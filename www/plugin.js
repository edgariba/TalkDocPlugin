
var exec = require('cordova/exec');

var PLUGIN_NAME = 'TalkDocPlugin';

var TalkDocPlugin = {
  saludo: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "saludar", [name]);
  },

  llamada: function (argumentos, successCallback, errorCallback){
          exec(successCallback, errorCallback, PLUGIN_NAME, "llamar", [argumentos]);
    }
};

module.exports = TalkDocPlugin;
