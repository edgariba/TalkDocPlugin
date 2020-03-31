#import "TalkDocPlugin.h"

#import <Cordova/CDVAvailability.h>

@implementation TalkDocPlugin

- (void)pluginInitialize {
}

- (void)saludar:(CDVInvokedUrlCommand*)command
{

    NSString* name = [[command arguments] objectAtIndex:0];
    NSString* msg = [NSString stringWithFormat: @"Hola todo el...  %@", name];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)llamar:(CDVInvokedUrlCommand*)command
{

    NSString* uuidUser = [[command arguments] objectAtIndex:0];
    NSString* idQbUser = [[command arguments] objectAtIndex:1];
    NSString* passQuickBloxUser = [[command arguments] objectAtIndex:2];
    NSString* email = [[command arguments] objectAtIndex:3];
    NSString* idQuickBloxDoctor = [[command arguments] objectAtIndex:4];
    NSString* msg = [NSString stringWithFormat: @"Hola estos son los params...  %@", uuidUser,
     @"IdQuickBloxUser %@", idQbUser, @"passQuickBloxUser %@", passQuickBloxUser,
     , @"email %@", email, @"idQuickBloxDoctor %@", idQuickBloxDoctor];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}


@end
