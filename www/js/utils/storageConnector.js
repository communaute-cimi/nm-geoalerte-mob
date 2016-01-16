/**
 * Key-value store manager
 * This aims to abstract data storage
 */
define(['store'], function(store){
	
	var _storageConnector = function(){

		/**
		 * Set the value associating the key to it
		 */
		this.setValue = function(key, value){
			// window.localStorage.setItem(key, value);
			store.set(key, value);	
		};
		
		/**
		 * returns the value associated with the key
		 */
		this.getValue = function(key){
			// return window.localStorage.getItem(key);
			return store.get(key);
		};
			
		/**
		 * returns the value associated with the key
		 */
		this.removeValue = function(key){
			// return window.localStorage.removeItem(key);
			var val = store.get(key);
			store.remove(key);
			return val;
		};
	};

	return _storageConnector;

});