// src/errorHandler.js
export default {
  init() {
    // Store original console methods
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    // Override console.log
    console.log = function() {
      // Log to the console
      originalConsoleLog.apply(console, arguments);
      
      // Write to file if in Cordova
      if (window.cordova && window.cordova.file) {
        const msg = Array.from(arguments).join(' ');
        writeToLogFile('debug.log', msg);
      }
    };

    // Override console.error
    console.error = function() {
      // Log to the console
      originalConsoleError.apply(console, arguments);
      
      // Write to file if in Cordova
      if (window.cordova && window.cordova.file) {
        const msg = Array.from(arguments).join(' ');
        writeToLogFile('error.log', msg);
      }
    };

    // Global error handler
    // eslint-disable-next-line no-unused-vars
    window.onerror = function(message, source, lineno, colno, error) {
      console.error('GLOBAL ERROR:', message, 'at', source, ':', lineno, ':', colno);
      
      // Show an alert in development
      if (process.env.NODE_ENV === 'development') {
        alert(`Error: ${message}\nAt: ${source}:${lineno}:${colno}`);
      }
      
      return false; // Let the error propagate
    };

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      console.error('UNHANDLED PROMISE REJECTION:', event.reason);
    });
  }
};

// Helper to write to log file
function writeToLogFile(filename, message) {
  if (!window.cordova || !window.cordova.file) return;
  
  window.resolveLocalFileSystemURL(
    window.cordova.file.externalDataDirectory || window.cordova.file.dataDirectory,
    function(dir) {
      dir.getFile(filename, { create: true, exclusive: false }, function(fileEntry) {
        fileEntry.createWriter(function(writer) {
          writer.seek(writer.length); // Start write at EOF
          const timestamp = new Date().toISOString();
          writer.write(new Blob([`${timestamp}: ${message}\n`], { type: 'text/plain' }));
        });
      });
    },
    function(error) {
      console.error('Error accessing file system:', error);
    }
  );
}