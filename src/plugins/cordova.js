// src/plugins/cordova.js
export default {
  install: (app) => {
    const cordovaPlugin = {
      // Helper methods
      isAndroid: () => window.cordova && /android/i.test(window.cordova.platformId),
      isIOS: () => window.cordova && /ios/i.test(window.cordova.platformId),
      
      // Device info
      getDeviceInfo: () => window.device || {},
      
      // Add more methods as needed
      hideSplashScreen: () => {
        if (window.navigator && window.navigator.splashscreen) {
          window.navigator.splashscreen.hide()
        }
      }
    }
    
    // Add to the global object so it's available throughout the app
    app.config.globalProperties.$cordova = cordovaPlugin
    
    // Add to the global window object for access from outside of Vue
    window.$cordova = cordovaPlugin
  }
}