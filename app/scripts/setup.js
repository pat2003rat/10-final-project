var $ = require('jquery');

var parse = {
  BASE_API_URL: '',
  setup: function(config){
    if (config.BASE_API_URL) {
      this.BASE_API_URL = config.BASE_API_URL;
    }
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "patrick");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "gunner");

        if (config.sessionId) {
          xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
        }
      }
    });
  }
}
module.exports = parse;
