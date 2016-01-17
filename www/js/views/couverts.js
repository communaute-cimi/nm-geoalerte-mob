define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/couverts.html'],
        function($, _, Backbone, Helper, GenericView, tmpPage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click #cliquable-couverts" : 'navigate',
            "click #signal" : 'signal',
            "click #consignes" : 'displaySecurity',
            "click #close-button" : 'hidePopup',
		},
		initialize : function(options) {
			 	this.events = _.extend({}, this.genericEvents, this.events);
			 	_.bindAll(this, 'render');
                _.bindAll(this, 'signal');
                _.bindAll(this, 'displaySecurity');
			    this.delegateEvents();
				this.renderData();
                this.alert = options.alert;
                this.signalSent = false;
                this.displaySecurity = false;
		},
		render : function() {
			var that = this;
            if(this.alert === 'yes'){
			     $(this.el).append(_.template(tmpPage, {alert: 'yes'}));
            }
            else{
                $(this.el).append(_.template(tmpPage, {}));
            }
			return this.el;
		},
        navigate: function(){
            MyApp.Router.navigate("connection", {trigger: true});
        },
        signal: function(){
            this.signalSent = true;
            this.displaySecurity = false;
            $('.alert').css('background', "url('images/alerte4-step3.png') no-repeat");
            $('.alert').css('background-size', "contain");
        },
        displaySecurity: function(){
            if(this.displaySecurity) {
                if(this.signalSent) {
                    $('.alert').css('background', "url('images/alerte4-step4.png') no-repeat");
                }
                else {
                    $('.alert').css('background', "url('images/alerte4-step2.png') no-repeat");
                }
            }
            else {
                if(this.signalSent) {
                    $('.alert').css('background', "url('images/alerte4-step3.png') no-repeat");
                }
                else {
                    $('.alert').css('background', "url('images/alerte4.png') no-repeat");
                }
            }
            $('.alert').css('background-size', "contain");
            this.displaySecurity = !this.displaySecurity;
        },
        hidePopup: function(){
            $(".alert").hide();
        }
	});

	return view;
});
