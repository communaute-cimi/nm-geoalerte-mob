define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/restaurant.html'],
        function($, _, Backbone, Helper, GenericView, tmpPage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click .header" : 'goBack',
            "click #booking-button" : 'navigate'
		},
		initialize : function(options) {
			 	this.events = _.extend({}, this.genericEvents, this.events);
			 	_.bindAll(this, 'render');
			    this.delegateEvents();
				this.renderData();
		},
		render : function() {
			var that = this;

			$(this.el).append(_.template(tmpPage));
			return this.el;
		},
		goBack : function() {
			MyApp.reversePage = true;
			window.history.back();
		},
        navigate: function(){
            MyApp.Router.navigate("offres", {trigger: true});
        }
	});

	return view;
});
