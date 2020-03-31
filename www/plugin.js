
var exec = require('cordova/exec');

var PLUGIN_NAME = 'TalkDocPlugin';

var TalkDocPlugin = {
  saludo: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "saludar", [name]);
  },
  llamada: function (uuIdUser, idQuickBloxUser, passQuickBloxUser, email, idQuickBloxDoctor, successCallback, errorCallback){
          exec(successCallback, errorCallback, PLUGIN_NAME, "llamar", [uuIdUser, idQuickBloxUser, passQuickBloxUser, email, idQuickBloxDoctor]);
    }
};

module.exports = TalkDocPlugin;
