/**
 * Initialise requirejs with required libraries
 */
requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl : 'js/',

	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths : {
		jquery : 'libs/jquery/jquery-2.1.3',
		underscore : 'libs/loDash/lodash.underscore-2.4.1',
		backbone : 'libs/backbone/backbone-1.1.2',
		jquerymobile : 'libs/jquery-mobile/jquery.mobile-1.4.5',
		bootstrap: 'libs/bootstrap/bootstrap.min-3.3.1',
		config : 'config/config',
		localization : 'locale/locale',
		generic: 'views/generic',
		analytics: 'libs/google-analytics/analytics',
		store: 'libs/store/store.min',
		app : 'app'
	},
	shim : {
		'backbone' : {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps : ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports : 'Backbone'
		},
		'jquerymobile' : {
			deps : ['jquery']
		},
		'bootstrap' : {
			deps : ['jquery']
		},
		'analytics' : {
            exports : 'ga'
        }
	}
});

require(['require', 'jquery', 'backbone', 'underscore', 'app', 'bootstrap'], function(require, $,backbone, _, App, bootstrap) {
	$(document).bind("mobileinit", function() {
		console.log("JQuery mobile routing system disabled");
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = true;
	});
	require(["jquery"], function($) {
	    $(function() {

	    });
	});
	require(['jquerymobile'], function($$) {
		// The "app" dependency is passed in as "App"
		App.initialize();
	});
});
