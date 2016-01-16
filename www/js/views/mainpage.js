define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/mainpage.html'],
        function($, _, Backbone, Helper, GenericView, tmpMainpage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
		},
		initialize : function(options) {
			 	this.events = _.extend({}, this.genericEvents, this.events);
			 	_.bindAll(this, 'render');
			    this.delegateEvents();
				this.renderData();
		},
		render : function() {
			var that = this;

			$(this.el).append(_.template(tmpMainpage));
			return this.el;
		}
	});

	return view;
});
