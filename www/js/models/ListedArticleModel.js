/**
 * An article model when present in listings including the folling attributes :
 * Title : Title of the article
 */
define([
'backbone',
],function(Backbone){
	var ListedArticleModel = Backbone.Model.extend({
	    defaults: {
	    }
	});
	
	return ListedArticleModel; 
});