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
                this.shouldShowAlert = options.alert;
		},
		render : function() {
			var that = this;
            if (this.shouldShowAlert) {
			    $(this.el).append(_.template(tmpPage, {alert: MyApp.currentAlert}));
            }
            else {
                $(this.el).append(_.template(tmpPage, {}));
            }
			return this.el;
		},
        connection : function() {
            $.mobile.loading( "show", {
                text: "",
                textVisible: true,
                theme: "z",
                html: "<div class='spinner'></div>"
                });
            // fix a bug with jQuery mobile
            $(".ui-loader").css("display", "");
            window.setTimeout(function(){
                $.mobile.loading().hide();
                $(".ui-loader").css("display", "none");
            }, 1000);
        }
	});

	return view;
});
