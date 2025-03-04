import { createApp } from 'vue'
import App from './App.vue'
import cordovaPlugin from './plugins/cordova'
import errorHandler from './errorHandler'

// Initialize error handler
errorHandler.init()

// Create app instance
const app = createApp(App)
app.use(cordovaPlugin)

// Handle Vue errors globally
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err)
  console.error('Component:', vm)
  console.error('Info:', info)
}

const init = () => {
  // Hide the splash screen if we're in a Cordova environment
  if (window.$cordova) {
    setTimeout(() => {
      window.$cordova.hideSplashScreen()
    }, 1000)
  }
  
  app.mount('#app')
}

// Wait for the deviceready event if running in Cordova
if (window.cordova) {
  document.addEventListener('deviceready', init, false)
} else {
  // In browser development
  init()
}