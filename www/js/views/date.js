define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/date.html'],
        function($, _, Backbone, Helper, GenericView, tmpPage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click #cliquable-date" : 'navigate'
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
        navigate: function(){
            MyApp.Router.navigate("heure", {trigger: true});
        }
	});

	return view;
});
