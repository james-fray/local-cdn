/* globals validate */
'use strict';

var app = {};
app.callbacks = {};
app.on = (id, callback) => {
  app.callbacks[id] = app.callbacks[id] || [];
  app.callbacks[id].push(callback);
};
app.emit = (id, value) => (app.callbacks[id] || []).forEach(c => c(value));

var decentraleyes = {};

// importing from detection module from https://github.com/Synzvato/decentraleyes project
(function (iframe) {
  iframe.src = './decentraleyes/loader.html';
  iframe.onload = function () {
    decentraleyes.getLocalTarget = iframe.contentWindow.exports.getLocalTarget;
    decentraleyes.mappings = iframe.contentWindow.mappings;
    decentraleyes.resources = iframe.contentWindow.resources;
    app.emit('decentraleyes-ready');
  };
  document.body.appendChild(iframe);
})(document.createElement('iframe'));

app.on('decentraleyes-ready', () => {
  let mappings = decentraleyes.mappings;
  let filter = {
    urls: [],
    types: ['script', 'xmlhttprequest']
  };
  for (let host in mappings) {
    for (let path in mappings[host]) {
      filter.urls.push('*://' + host + path + '*');
    }
  }
  app.emit('filter-ready', filter);
});

var cache = {};

// redirecting to local resource if possible
app.on('filter-ready', (filter) => {
  chrome.webRequest.onBeforeRequest.addListener(d => {
    let url = new URL(d.url);
    let obj = decentraleyes.getLocalTarget(url.hostname, url.pathname);
    if (obj) {
      if (validate(obj.path)) {
        let redirectUrl = chrome.runtime.getURL('data/' + obj.path);
        // redirect even if tab is not found
        if (cache[d.tabId]) {
          cache[d.tabId].push({
            hostname: url.hostname,
            pathname: url.pathname
          });
          app.emit('update-badge', d.tabId);
        }
        else {
          console.error('resource is redirected but no tab is found');
        }
        return {
          redirectUrl
        };
      }
      else {
        console.error('resource not found', d.url,  obj.path);
      }
    }
    return {};
  }, filter, ['blocking']);
});
// resetting toolbar badge
chrome.webRequest.onBeforeRequest.addListener(d => {
  if (cache[d.tabId]) {
    cache[d.tabId] = [];
    app.emit('update-badge', d.tabId);
  }
}, {
  urls: ['<all_urls>'],
  types: ['main_frame']
}, []);

// badge
chrome.tabs.query({}, tabs => tabs.forEach(t => cache[t.id] = []));
app.on('update-badge', (tabId) => {
  if (!cache[tabId]) {
    return;
  }
  chrome.browserAction.setBadgeText({
    tabId,
    text: (cache[tabId].length || '') + ''
  });
  let title = cache[tabId].map((o, i) => (i + 1) + '. ' + o.hostname + ' -> ' + o.pathname.split('/').pop()).join('\n');
  title = 'Local CDN' + (title ? '\n\n' + title : '');
  chrome.browserAction.setTitle({
    tabId,
    title
  });
});
chrome.tabs.onCreated.addListener((tab) => cache[tab.id] = []);
// cleanup
chrome.tabs.onRemoved.addListener((tabId) => delete cache[tabId]);
// FAQs
chrome.storage.local.get('version', (obj) => {
  let version = chrome.runtime.getManifest().version;
  if (obj.version !== version) {
    chrome.storage.local.set({version}, () => {
      chrome.tabs.create({
        url: 'http://add0n.com/local-cdn.html?version=' + version + '&type=' +
          (obj.version ? ('upgrade&p=' + obj.version) : 'install')
      });
    });
  }
});
