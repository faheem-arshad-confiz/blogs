import "angular";
import "angular-route";
import "bootstrap";
import "jquery";

import "./app.module";
import "./services";
import "./components";
import "./directives";
import "./app.config";
import '@angular/compiler';
import 'zone.js';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: []
})
export class AppModule {
  // Override Angular bootstrap so it doesn't do anything
  ngDoBootstrap() {
  }
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app']);
});