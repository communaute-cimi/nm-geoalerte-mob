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
                MyApp.shouldDisplayAlert = !MyApp.shouldDisplayAlert;
                if(!MyApp.shouldDisplayAlert){
                    MyApp.Router.navigate("couverts/yes", {trigger: true});
                }
                else {
                    MyApp.Router.navigate("couverts/no", {trigger: true});
                }
            }, 1000);
        }
	});

	return view;
});
