'use strict';

var require = function (name) {
  if (name === 'sdk/simple-prefs') {
    return {
      prefs: {
        domainWhitelist: ''
      },
      on: (id, callback) => {}
    };
  }
  return window[name.replace('./', '')];
};
var exports = {};
var module = {
  exports: {}
};
