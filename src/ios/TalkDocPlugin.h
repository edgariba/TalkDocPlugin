#import <Cordova/CDVPlugin.h>

@interface TalkDocPlugin : CDVPlugin {
}

// Encabezados de las funciones del plugin
- (void) saludar:(CDVInvokedUrlCommand*)command;
- (void) llamar:(CDVInvokedUrlCommand*)command;

@end
