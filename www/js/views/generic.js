define(['jquery', 'underscore', 'backbone', 'helper'],
        function($, _, Backbone, Helper) {
	Backbone.View.prototype.close = function(){
		 if (this.remove)
		  this.remove(); 
		  if (this.unbind)
		  this.unbind();
		  if (this.onClose){
		    this.onClose();
		  }
		}
	var view = Backbone.View.extend({
		genericEvents: {
		},
		goBack : function() {
			MyApp.reversePage = true;
			window.history.back();
		},
		renderData : function(){
			MyApp.Router.changePage(this,$(this.el).attr('id'));
		}
	});
	return view;
});