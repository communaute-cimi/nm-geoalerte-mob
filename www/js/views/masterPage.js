define(['jquery', 'underscore', 'backbone', 'helper', 
        'text!templates/masterPage.html']
	, function($, _, Backbone, Helper, tmpMaster) {
	var view = Backbone.View.extend({
		events: {
		},
		initialize : function(options) {
			_.bindAll(this, 'render');
		},
		render : function() {
			$(this.el).append(_.template(tmpMaster));
			return this.el;
		}
	});

	return view;
});