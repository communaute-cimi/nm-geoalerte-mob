/**
 * Route function for the whole application
 */
define(['jquery', 'underscore', 'backbone', 'analytics'], function($, _, Backbone, ga) {
	"use strict";
	var App = {};

	var currentPageIsOne = true;

	var Router = Backbone.Router.extend({
		routes : {
			"authentication" : "authenticationHandler",
			"" : "defaults",
			":page" : "generic"
		},
		// last argument must always be the Application
		initialize : function() {
			console.log('Router initialization...');
			// App must always be the last argument passed to the router constructor
			App = _.last(arguments);

			App.masterView.render();
			$('body').append($(App.masterView.el));

			this.firstPage = true;
		},
		track : function(action,event,params){

			// If the device is not connected to Internet (no bearer found)
			if (typeof device !== "undefined" && navigator.network.connection.type == Connection.NONE){

					var stored = MyApp.storageConnector.getValue("GA_Store");
					if (stored == null){
						stored = new Array();
					}
					stored.push({'action':action, 'event':event,'params':params});
					MyApp.storageConnector.setValue("GA_Store", stored);

			// Else we are connected
			} else {
				ga(action,event,params);
			}
		},
		defaults : function() {
			console.log("View defaults");
			// Retrieve the first view
			/*for (var view in App.Views) {
				console.log("View : "+view);
				this.changePage(new App.Views[view], view);
				return;
			}*/

			MyApp.Router.navigate("mainpage", {trigger: true});
		},
		changePage: function(page, pageid) {
            this.changePageInner(page, pageid);
		},
		changePageInner : function(page, pageid) {

			var oldPage = $("div[data-role='page']");
			// page id
			/*
			var id = page.id ? page.id : pageid+'-page';
			console.log("Page id :"+id);
			$(page.el).attr('id', id);*/

			$(page.el).attr('data-role', 'page');
			page.render();
			$('#masterPage').append($(page.el));
			$.mobile.defaultPageTransition = 'slide';
			$.mobile.changePage.defaults.transition = 'slide';
			// specific jqm page options
			var transition = page.transition ? page.transition : $.mobile.defaultPageTransition ;
			var reverse = MyApp.reversePage ? MyApp.reversePage : false;
			// We don't want to slide the first page
			if (MyApp.notFirstPage) {
				//transition = 'slide';
				MyApp.notFirstPage = true;
				if(reverse){
					transition = 'slide';
				}
			}else{
				transition = 'slide';
				MyApp.notFirstPage = true;
			}

			$.mobile.changePage($(page.el), {
				changeHash : false,
				transition : transition,
				reverse : reverse
			});
			MyApp.reversePage = false;

			var removeOldPage = function(){
				oldPage.remove();
			};

			$('body').on('pagechange', removeOldPage);

		},
		/**
		 * Route for :page
		 * Loads the view corresponding to the page name
		 * @param page : page to load
		 */
		generic : function(page) {
			// Initialize the view
			if(typeof page !== undefined && typeof App.Views[page] !== undefined){
				var page = new App.Views[page]();
				$(page.el).attr('data-role', 'page');
			}
			else{
				// console.log('ERROR : this page does not exists : ' + page)
			}
		},
		authenticationHandler : function () {
			// Initialize an articleDetails view
			var page = new App.Views['authentication']();
			$(page.el).attr('data-role', 'page');
		}
	});

	return Router;
});
