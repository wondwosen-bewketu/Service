class SimpleLogger {
    log(message) {
      console.log(message);
    }
    
    error(message) {
      console.error(message);
    }
    
    warn(message) {
      console.warn(message);
    }
    
    debug(message) {
      console.debug(message);
    }
  }
  
  module.exports = SimpleLogger;
  