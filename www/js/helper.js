/**
 * 
 */
define(['jquery', 'underscore'], function($, _) {
	var Helper = {};  // Declare Helper namespace
	
	Helper.assign = function(container, selector, view) {
		var selectors;
		
		if (_.isObject(selector)) {
			selectors = selector;
		} else {
			selectors = {};
			selectors[selector] = view;
		}

		if (!selectors)
			return;

		_.each(selectors, function(view, selector) {
			view.setElement(container.$(selector)).render();
		}, container);
	}

	return Helper;
});
