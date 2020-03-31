/**
 *
 */
package com.example;

import android.util.Log;
import org.apache.cordova.*;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;

public class MiPlugin extends CordovaPlugin {
    private static final String TAG = "TalkDocPlugin";

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        Log.d(TAG, "Inicializando TalkDocPlugin");
    }

    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals("saludar")) {
            String phrase = args.getString(0);
            final PluginResult result = new PluginResult(PluginResult.Status.OK, "Hola todo el... " + phrase);
            callbackContext.sendPluginResult(result);
        }

        if (action.equals("llamar")) {
            final String uuIdUser = args.getString(0);
            final String idQuickBloxUser = args.getString(1);
            final String passQuickBloxUser = args.getString(2);
            final String email = args.getString(3);
            final String idQuickBloxDoctor = args.getString(4);
            final PluginResult result = new PluginResult(PluginResult.Status.OK, "Hola estos son los params... " + "Uuid: " + uuIdUser +
                    "idQuick: " + idQuickBloxUser + " email: " + email + " idDoctor: " + idQuickBloxDoctor);
            callbackContext.sendPluginResult(result);
        };
        return true;
    }


}
