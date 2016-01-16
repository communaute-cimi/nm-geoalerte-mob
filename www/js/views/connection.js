define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/connection.html'],
        function($, _, Backbone, Helper, GenericView, tmpPage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click #cliquable-connection" : 'connection'
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
        connection : function() {
            $.mobile.loading( "show", {
                text: "",
                textVisible: true,
                theme: "z",
                html: "<div class='spinner'>Chargement de votre réservation</div>"
                });
            window.setTimeout(function(){
                $.mobile.loading( "hide");
            }, 1000);
        }
	});

	return view;
});
