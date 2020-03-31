
var exec = require('cordova/exec');

var PLUGIN_NAME = 'TalkDocPlugin';

var MiPlugin = {
  saludo: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "saludar", [name]);
  }

  llamada: function (argumentos, successCallback, errorCallback){
          exec(successCallback, errorCallback, PLUGIN_NAME, "llamar", [argumentos]);
    }
};ó

module.exports = TalkDocPlugin;
