import "@angular/compiler";
import "angular";
import "angular-route";
import "bootstrap";
import "jquery";

import "./app.module";
import "./services";
import "./components";
import "./directives";
import "./app.config";
import "zone.js";

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { RouterModule } from "@angular/router";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PostViewComponent } from "./components/post-view/post-view.component";
import { PostService } from "./services/post/post.service";
import {
  LikeServiceProvider,
  routeParamsServiceProvider,
  sceServiceProvider,
} from "./ajs-upgraded-providers";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    PostService,
    routeParamsServiceProvider,
    sceServiceProvider,
    LikeServiceProvider,
  ],
  declarations: [PostViewComponent],
  entryComponents: [PostViewComponent],
})
export class AppModule {
  // Override Angular bootstrap so it doesn't do anything
  ngDoBootstrap() {}
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["app"]);
  });
