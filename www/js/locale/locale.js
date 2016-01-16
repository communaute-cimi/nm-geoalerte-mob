define([], function(){
	localeDictionary = {};
	localeDictionary.FR = {
		mainpage : {
			message: "test" 
        }
	};

	/**
	 * Returns a localized String for the corresponding page and key, in the corresponding language
	 * @param page: page for the String, can be also error or common 
	 * @param key: key for the resource
	 * @param language: language to use (can be DE, EN, ES, FR, IT, NL or PT)
	 */
	var getLocalValue = function(page, key, language){
		// If language is not set, default value is used
		if(typeof language === 'undefined'){
			language = MyApp.oConfig.preferedLanguage();
		}
		
		// if(typeof localeDictionary[language] === 'undefined'){}
		return localeDictionary[language][page][key];
	};
	
	
	return {
		getLocalValue : getLocalValue
	};
});
