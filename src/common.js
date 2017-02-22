/* globals validate, resources */
'use strict';

var cache = {}, root = chrome.runtime.getURL('data/resources/'), vRegExp = /(?:\d{1,2}\.){1,3}\d{1,2}/;

var filters = Object.keys(resources)
  .map(host => Object.keys(resources[host]).map(path => host + path))
  .reduce((a, b) => a.concat(b))
  .map(url => '*://' + url + '*');

function flattenObject (obj) {
  let toReturn = {};

  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      let flatObject = flattenObject(obj[i]);
      for (let x in flatObject) {
        toReturn[i + x] = flatObject[x];
      }
    }
    else {
      toReturn[i] = obj[i];
    }
  }
  return toReturn;
}

function badge (tabId) {
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
}

function logger () {
  //console.log.apply(console.log, arguments);
}

function observe (d) {
  let {pathname, hostname} = new URL(d.url);
  let obj = resources[hostname];
  if (obj) {
    let list = flattenObject(obj);
    let matches = Object.keys(list).filter(str => {
      str = str.replace(/[-[\]{}()*+?.,\\^$|#\s\/]/g, '\\$&');
      str = str.replace(/vrsn/g, '(?:\\d{1,2}\\.){1,3}\\d{1,2}');
      return (new RegExp(str)).test(d.url);
    });
    if (matches.length) {
      let path = list[matches.pop()];
      // sometimes there is no "vrsn"
      if (path.indexOf('vrsn') !== -1) {
        let version = vRegExp.exec(d.url);
        path = path.replace(/vrsn/g, version);
      }
      if (validate(path)) {
        let redirectUrl = root + path;

        if (cache[d.tabId]) {
          cache[d.tabId].push({hostname, pathname});
          badge(d.tabId);
        }
        else {
          logger('resource is redirected but no tab is found');
        }
        return {
          redirectUrl
        };
      }
      else {
        logger('cannot find', d.url);
      }
    }
    else {
      logger('cannot find version from', d.url);
    }
  }
  else {
    logger('resources of', hostname, 'not found');
  }
}

chrome.webRequest.onBeforeRequest.addListener(observe, {
    urls: filters,
    types: ['script', 'xmlhttprequest']
  },
  ['blocking']
);

// resetting toolbar badge
chrome.webRequest.onBeforeRequest.addListener(d => {
  if (cache[d.tabId]) {
    cache[d.tabId] = [];
    badge(d.tabId);
  }
}, {
  urls: ['<all_urls>'],
  types: ['main_frame']
}, []);
// badge
chrome.tabs.query({}, tabs => tabs.forEach(t => cache[t.id] = []));
chrome.tabs.onCreated.addListener((tab) => cache[tab.id] = []);
chrome.browserAction.setBadgeBackgroundColor({
  color: '#818181'
});
// cleanup
chrome.tabs.onRemoved.addListener((tabId) => delete cache[tabId]);

// FAQs & Feedback
chrome.storage.local.get({
  'version': null,
  'faqs': navigator.userAgent.toLowerCase().indexOf('firefox') === -1 ? true : false
}, prefs => {
  let version = chrome.runtime.getManifest().version;

  if (prefs.version ? (prefs.faqs && prefs.version !== version) : true) {
    chrome.storage.local.set({version}, () => {
      chrome.tabs.create({
        url: 'http://add0n.com/local-cdn.html?version=' + version +
          '&type=' + (prefs.version ? ('upgrade&p=' + prefs.version) : 'install')
      });
    });
  }
});
(function () {
  let {name, version} = chrome.runtime.getManifest();
  chrome.runtime.setUninstallURL('http://add0n.com/feedback.html?name=' + name + '&version=' + version);
})();
