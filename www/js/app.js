/**
 * Starts the app and injects the views
 */
define(['jquery', 'underscore', 'backbone', 'router', 'utils/storageConnector',
        'config','localization',
        'views/masterPage', 'views/mainpage', 'views/connection', 'views/couverts',
        'views/date', 'views/heure', 'views/offres', 'views/restaurant'],
		function($, _, Backbone, Router, StorageConnector,
				configuration, locale, 
				MasterPageView, mainpageView, connectionView, couvertsView, 
                dateView, heureView, offresView, restaurantView) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	var MyApp = MyApp || {
		Views : {
			mainpage : mainpageView,
            connection : connectionView,
            couverts : couvertsView,
            date : dateView,
            heure : heureView,
            offres : offresView,
            restaurant : restaurantView
		},
		Models : {
			
		},
		defaults : {

		},
		Router : {},
		initialize : function() {
			$(document).ready(function() {
				console.log('App initialization...');
				
				if (StorageConnector)
					MyApp.storageConnector = new StorageConnector(); 
				if (configuration)
					MyApp.oConfig = new configuration();
				if (locale)
					MyApp.oLocale =  locale;
                
				
				//Initialising master view
				MyApp.masterView = new MasterPageView();
				
				MyApp.Router = new Router(MyApp);
				MyApp.events(); //register event handler
				Backbone.history.start();
				console.log('App initialized');
                
                navigator.geolocation.getCurrentPosition(function(){
                    console.log('geolocation OK');
                });
			});
		}, 
		events : function (){
			$(document).delegate("#home-page", "pageinit", function() {
				console.log("Pageinit fired for #home-page");
			});
			document.addEventListener('deviceready', MyApp.onDeviceReady, true);
		},
		onDeviceReady : function (){
			//navigator.splashscreen.hide();
		}
	};

	// make app global
	window.MyApp = MyApp;
	return MyApp;
});
