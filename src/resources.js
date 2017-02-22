'use strict';

var resources = {
  'ajax.googleapis.com': {
    '/ajax/libs/': {
      'angularjs/vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec',
      'dojo/vrsn/dojo/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'ext-core/vrsn/ext-core.': 'ext-core/vrsn/ext-core.js.dec',
      'ext-core/vrsn/ext-core-debug.': 'ext-core/vrsn/ext-core.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jqueryui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jqueryui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'mootools/vrsn/mootools-yui-compressed.': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'prototype/vrsn/prototype.': 'prototype/vrsn/prototype.min.js.dec',
      'scriptaculous/vrsn/scriptaculous.': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'webfont/vrsn/webfont.': 'webfont/vrsn/webfont.js.dec',
      'dojo/1/dojo/dojo.': 'dojo/1.6.1/dojo/dojo.js.dec',
      'jquery/1/jquery.': 'jquery/1.11.1/jquery.min.js.dec',
      'jquery/1.2/jquery.min.js': 'jquery/1.2.6/jquery.min.js.dec',
      'jquery/1.2/jquery.js': 'jquery/1.2.6/jquery.min.js.dec',
      'jquery/1.3/jquery.min.js': 'jquery/1.3.2/jquery.min.js.dec',
      'jquery/1.3/jquery.js': 'jquery/1.3.2/jquery.min.js.dec',
      'jquery/1.4/jquery.min.js': 'jquery/1.4.4/jquery.min.js.dec',
      'jquery/1.4/jquery.js': 'jquery/1.4.4/jquery.min.js.dec',
      'jquery/1.5/jquery.min.js': 'jquery/1.5.2/jquery.min.js.dec',
      'jquery/1.5/jquery.js': 'jquery/1.5.2/jquery.min.js.dec',
      'jquery/1.6/jquery.min.js': 'jquery/1.6.4/jquery.min.js.dec',
      'jquery/1.6/jquery.js': 'jquery/1.6.4/jquery.min.js.dec',
      'jquery/1.7/jquery.min.js': 'jquery/1.7.2/jquery.min.js.dec',
      'jquery/1.7/jquery.js': 'jquery/1.7.2/jquery.min.js.dec',
      'jquery/1.8/jquery.min.js': 'jquery/1.8.3/jquery.min.js.dec',
      'jquery/1.8/jquery.js': 'jquery/1.8.3/jquery.min.js.dec',
      'jqueryui/1/jquery-ui.js': 'jqueryui/1.10.4/jquery-ui.min.js.dec',
      'jqueryui/1/jquery-ui.min.js': 'jqueryui/1.10.4/jquery-ui.min.js.dec',
      'mootools/1/mootools-yui-compressed.': 'mootools/1.1.2/mootools-yui-compressed.js.dec',
      'prototype/1/prototype.': 'prototype/1.7.1.0/prototype.js.dec',
      'scriptaculous/1/scriptaculous.': 'scriptaculous/1.9.0/scriptaculous.js.dec',
      'swfobject/2/swfobject.': 'swfobject/2.2/swfobject.js.dec',
      'webfont/1/webfont.': 'webfont/1.5.18/webfont.js.dec',
    }
  },
  'ajax.aspnetcdn.com': {
    '/ajax/': {
      'jQuery/jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'jquery/jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'modernizr/modernizr-vrsn.': 'modernizr/vrsn/modernizr.min.js.dec',
    }
  },
  'ajax.microsoft.com': {
    '/ajax/': {
      'jQuery/jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'jquery/jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'modernizr/modernizr-vrsn.': 'modernizr/vrsn/modernizr.min.js.dec',
    }
  },
  'cdnjs.cloudflare.com': {
    '/ajax/libs/': {
      'angular.js/vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec',
      'backbone.js/vrsn/backbone.': 'backbone.js/vrsn/backbone-min.js.dec',
      'backbone.js/vrsn/backbone-min.': 'backbone.js/vrsn/backbone-min.js.dec',
      'dojo/vrsn/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'ember.js/vrsn/ember.': 'ember.js/vrsn/ember.min.js.dec',
      'ext-core/vrsn/ext-core.': 'ext-core/vrsn/ext-core.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jqueryui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jqueryui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'modernizr/vrsn/modernizr.': 'modernizr/vrsn/modernizr.min.js.dec',
      'mootools/vrsn/mootools-core': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'scriptaculous/vrsn/scriptaculous.': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'underscore.js/vrsn/underscore.': 'underscore.js/vrsn/underscore-min.js.dec',
      'underscore.js/vrsn/underscore-min.': 'underscore.js/vrsn/underscore-min.js.dec',
      'webfont/vrsn/webfont': 'webfont/vrsn/webfont.js.dec',
      'prototype/1.7.3/prototype.min.js': 'prototype/1.7.3.0/prototype.min.js.dec',
      'prototype/1.7.3/prototype.js': 'prototype/1.7.3.0/prototype.min.js.dec',
      'prototype/1.7.2/prototype.min.js': 'prototype/1.7.2.0/prototype.min.js.dec',
      'prototype/1.7.2/prototype.js': 'prototype/1.7.2.0/prototype.min.js.dec',
      'prototype/1.6.1/prototype.js': 'prototype/1.6.1.0/prototype.min.js.dec',
      'prototype/1.6.1/prototype.mi.js': 'prototype/1.6.1.0/prototype.min.js.dec'
    }
  },
  'code.jquery.com': {
    '/': {
      'jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'ui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'ui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jquery-latest.': 'jquery/1.11.1/jquery.min.js.dec',
      'jquery.': 'jquery/1.11.1/jquery.min.js.dec',
      'jquery-1.3.min.js': 'jquery/1.3.0/jquery.min.js.dec',
      'jquery-1.3.js': 'jquery/1.3.0/jquery.min.js.dec',
      'jquery-1.4.min.js': 'jquery/1.4.0/jquery.min.js.dec',
      'jquery-1.4.js': 'jquery/1.4.0/jquery.min.js.dec',
      'jquery-1.5.min.js': 'jquery/1.5.0/jquery.min.js.dec',
      'jquery-1.5.js': 'jquery/1.5.0/jquery.min.js.dec',
      'jquery-1.6.min.js': 'jquery/1.6.0/jquery.min.js.dec',
      'jquery-1.6.js': 'jquery/1.6.0/jquery.min.js.dec',
      'jquery-1.7.min.js': 'jquery/1.7.0/jquery.min.js.dec',
      'jquery-1.7.js': 'jquery/1.7.0/jquery.min.js.dec',
    }
  },
  'cdn.jsdelivr.net': {
    '/': {
      'angularjs/vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec',
      'backbonejs/vrsn/backbone.': 'backbone.js/vrsn/backbone-min.js.dec',
      'backbonejs/vrsn/backbone-min.': 'backbone.js/vrsn/backbone-min.js.dec',
      'dojo/vrsn/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'emberjs/vrsn/ember.': 'ember.js/vrsn/ember.min.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jquery.ui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jquery.ui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'mootools/vrsn/mootools-': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'underscorejs/vrsn/underscore.': 'underscore.js/vrsn/underscore-min.js.dec',
      'underscorejs/vrsn/underscore-min.': 'underscore.js/vrsn/underscore-min.js.dec',
      'webfontloader/vrsn/webfont': 'webfont/vrsn/webfont.js.dec',
    }
  },
  'yastatic.net': {
    '/': {
      'angularjs/vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec',
      'backbone/vrsn/backbone.': 'backbone.js/vrsn/backbone-min.js.dec',
      'backbone/vrsn/backbone-min.': 'backbone.js/vrsn/backbone-min.js.dec',
      'dojo/vrsn/dojo/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'ext-core/vrsn/ext-core.': 'ext-core/vrsn/ext-core.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jquery-ui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jquery-ui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'modernizr/vrsn/modernizr.': 'modernizr/vrsn/modernizr.min.js.dec',
      'prototype/vrsn/prototype.': 'prototype/vrsn/prototype.min.js.dec',
      'scriptaculous/vrsn/scriptaculous.': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'underscore/vrsn/underscore.': 'underscore.js/vrsn/underscore-min.js.dec',
      'underscore/vrsn/underscore-min.': 'underscore.js/vrsn/underscore-min.js.dec',
    }
  },
  'libs.baidu.com': {
    '/': {
      'backbone/vrsn/backbone.': 'backbone.js/vrsn/backbone-min.js.dec',
      'backbone/vrsn/backbone-min.': 'backbone.js/vrsn/backbone-min.js.dec',
      'dojo/vrsn/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'ext-core/vrsn/ext-core.': 'ext-core/vrsn/ext-core.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jqueryui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jqueryui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'mootools/vrsn/mootools-yui-compressed.': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'prototype/vrsn/prototype.': 'prototype/vrsn/prototype.min.js.dec',
      'scriptaculous/vrsn/scriptaculous.': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'underscore/vrsn/underscore.': 'underscore.js/vrsn/underscore-min.js.dec',
      'underscore/vrsn/underscore-min.': 'underscore.js/vrsn/underscore-min.js.dec',
      'webfont/vrsn/webfont.': 'webfont/vrsn/webfont.js.dec',
      'webfont/vrsn/webfont_debug.': 'webfont/vrsn/webfont.js.dec',
    }
  },
  'lib.sinaapp.com': {
    '/js/': {
      'angular.js/angular-vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec',
      'backbone/vrsn/backbone.': 'backbone.js/vrsn/backbone-min.js.dec',
      'dojo/vrsn/dojo.': 'dojo/vrsn/dojo/dojo.js.dec',
      'ext-core/vrsn/ext-core.': 'ext-core/vrsn/ext-core.js.dec',
      'ext-core/vrsn/ext-core-debug.': 'ext-core/vrsn/ext-core.js.dec',
      'jquery/vrsn/jquery.': 'jquery/vrsn/jquery.min.js.dec',
      'jquery-ui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jquery-ui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'mootools/vrsn/mootools.': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'prototype/vrsn/prototype.': 'prototype/vrsn/prototype.min.js.dec',
      'scriptaculous/vrsn/scriptaculous.': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.': 'swfobject/vrsn/swfobject.js.dec',
      'underscore/vrsn/underscore.': 'underscore.js/vrsn/underscore-min.js.dec',
      'underscore/vrsn/underscore-min.': 'underscore.js/vrsn/underscore-min.js.dec',
      'webfont/vrsn/webfont.': 'webfont/vrsn/webfont.js.dec',
      'webfont/vrsn/webfont_debug.': 'webfont/vrsn/webfont.js.dec',
    }
  },
  'upcdn.b0.upaiyun.com': {
    '/libs/': {
      'dojo/dojo-vrsn.': 'dojo/vrsn/dojo/dojo.js.dec',
      'emberjs/emberjs-vrsn.': 'ember.js/vrsn/ember.min.js.dec',
      'jquery/jquery-vrsn.': 'jquery/vrsn/jquery.min.js.dec',
      'jqueryui/jquery.ui-vrsn.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jqueryui/jquery.ui-vrsn.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'modernizr/modernizr-vrsn.': 'modernizr/vrsn/modernizr.min.js.dec',
      'mootoolscore/mootools.core-vrsn.': 'mootools/vrsn/mootools-yui-compressed.js.dec',
    }
  },
  'cdn.bootcss.com': {
    '/': {
      'jquery/vrsn/jquery.js': 'jquery/vrsn/jquery.min.js.dec',
      'jquery/vrsn/jquery.min.js': 'jquery/vrsn/jquery.min.js.dec',
      'jqueryui/vrsn/jquery-ui.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'jqueryui/vrsn/jquery-ui.min.js': 'jqueryui/vrsn/jquery-ui.min.js.dec',
      'backbone.js/vrsn/backbone-min.js': 'backbone.js/vrsn/backbone-min.js.dec',
      'backbone.js/vrsn/backbone.js': 'backbone.js/vrsn/backbone-min.js.dec',
      'ext-core/vrsn/ext-core.js': 'ext-core/vrsn/ext-core.js.dec',
      'ext-core/vrsn/ext-core.min.js': 'ext-core/vrsn/ext-core.js.dec',
      'ember.js/vrsn/ember.js': 'ember.js/vrsn/ember.min.js.dec',
      'ember.js/vrsn/ember.min.js': 'ember.js/vrsn/ember.min.js.dec',
      'mootools/vrsn/mootools-yui-compressed.js': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'mootools/vrsn/mootools-yui-compressed.min.js': 'mootools/vrsn/mootools-yui-compressed.js.dec',
      'prototype/vrsn/prototype.min.js': 'prototype/vrsn/prototype.min.js.dec',
      'prototype/vrsn/prototype.js': 'prototype/vrsn/prototype.min.js.dec',
      'scriptaculous/vrsn/scriptaculous.js': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'scriptaculous/vrsn/scriptaculous.min.js': 'scriptaculous/vrsn/scriptaculous.js.dec',
      'swfobject/vrsn/swfobject.js': 'swfobject/vrsn/swfobject.js.dec',
      'underscore.js/vrsn/underscore-min.js': 'swfobject/vrsn/swfobject.js.dec',
      'underscore.js/vrsn/underscore.js': 'underscore.js/vrsn/underscore-min.js.dec',
      'webfont/vrsn/webfont.js': 'webfont/vrsn/webfont.js.dec',
      'webfont/vrsn/webfont.min.js': 'webfont/vrsn/webfont.js.dec',
      'prototype/1.7.3/prototype.min.js': 'prototype/1.7.3.0/prototype.min.js.dec',
      'prototype/1.7.3/prototype.js': 'prototype/1.7.3.0/prototype.min.js.dec',
      'prototype/1.7.2/prototype.min.js': 'prototype/1.7.2.0/prototype.min.js.dec',
      'prototype/1.7.2/prototype.js': 'prototype/1.7.2.0/prototype.min.js.dec',
      'prototype/1.6.1/prototype.js': 'prototype/1.6.1.0/prototype.min.js.dec',
      'prototype/1.6.1/prototype.mi.js': 'prototype/1.6.1.0/prototype.min.js.dec'
    }
  },
  'cdn.staticfile.org': {
    '/': {
      'jquery/vrsn/jquery.js': 'jquery/vrsn/jquery.min.js.dec',
      'jquery/vrsn/jquery.min.js': 'jquery/vrsn/jquery.min.js.dec',
      'angularjs/vrsn/angular.': 'angularjs/vrsn/angular.min.js.dec'
    }
  }
};

resources['yandex.st'] = resources['yastatic.net'];
resources['cdn.css.net'] = resources['cdn.bootcss.com'];
