define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/heure.html'],
        function($, _, Backbone, Helper, GenericView, tmpPage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click #cliquable-heure" : 'navigate'
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
            MyApp.Router.navigate("couverts", {trigger: true});
        }
	});

	return view;
});
