define(['jquery', 'underscore', 'backbone', 'helper', 'generic',
        'text!templates/mainpage.html'],
        function($, _, Backbone, Helper, GenericView, tmpMainpage) {
	var view = GenericView.extend({
		transition: 'fade',
		error: undefined,
		events: {
            "click #cliquable-restaurant" : 'navigate'
		},
		initialize : function(options) {
			 	this.events = _.extend({}, this.genericEvents, this.events);
			 	_.bindAll(this, 'render');
			    this.delegateEvents();
				this.renderData();
                this.signalSent = false;
                this.displaySecurity = false;
                
                var that = this;
                navigator.geolocation.getCurrentPosition(function(position){
                    $.ajax({
                        url: 'http:///v1/alerts/' + position.coords.latitude + '/' + position.coords.longitude,
                        type:'GET',
                        success: function (data) {
                            $('#alert').removeClass('hidden');
                        }
                    });
                    console.log('geolocation OK');
                });
		},
		render : function() {
			var that = this;

			$(this.el).append(_.template(tmpMainpage));
			return this.el;
		},
        navigate: function(){
            MyApp.Router.navigate("restaurant", {trigger: true});
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
