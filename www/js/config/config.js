define([], function(){

	var configurationObject = function(){
		var deviceUUID = (typeof device == 'undefined') ? "" : device.uuid;
		var deviceName = (typeof device == 'undefined') ? navigator.userAgent : device.platform + " " + device.name + " "+ device.version + " (" + navigator.userAgent+ ")";
		var deviceFamily = (typeof device == 'undefined') ? "android" : device.platform.toLowerCase();

		var preferedLanguage;
		
		this.serverAddress = function (){
			return 'https://applicationbackend';
		}
		/**
		 * returns the Application id registered in push middleware
		 */
		this.pushApplicationId = function(){
			return 'AppsFiori';
		}
		/**
		 * returns true if the device id should be displayed on push service id creation
		 */
		this.displayDeviceID = function(){
			return false;
		}
		/**
		 * returns the application GCM sender id
		 */
		this.GCMSenderId = function(){
			return "392748994510";
		}
		this.deviceToken = function() {
			return deviceUUID;
		}
		this.appVersion = function(){
			return '1.0.2';
		}
		this.deviceName= function() {
			return deviceName;
		}
		this.deviceFamily = function() {
			return deviceFamily;
		}
		this.googleAnalyticsId = function() {
            return 'UA-51829853-7';
        }
        /**
		 * Sets the perfered language
		 * can be : 'DE', 'EN', 'ES', 'FR', 'IT', 'NL' or 'PT'
		 */
		this.setPreferedLanguage = function(language){
			_preferedLanguage = language;
			MyApp.storageConnector.setValue('preferedLanguage', language);
		}
		/**
		 * returns prefered language
		 */
		this.preferedLanguage = function(){
			// loads preferedLanguage from local storage if not defined
			if(typeof _preferedLanguage === 'undefined' || _preferedLanguage === null){
				_preferedLanguage = MyApp.storageConnector.getValue('preferedLanguage');
			}
			return _preferedLanguage;
		}
	};

	return configurationObject;
})
