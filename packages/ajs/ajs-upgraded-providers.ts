import { InjectionToken } from "@angular/core";

export const RouteParams = new InjectionToken("RouteParams");

export function routeParamsFactory(i: any) {
  return i.get("$routeParams");
}

export const routeParamsServiceProvider = {
  provide: RouteParams,
  useFactory: routeParamsFactory,
  deps: ["$injector"],
};

export const SCE = new InjectionToken("sce");

export function sceServiceFactory(i: any) {
  return i.get("$sce");
}

export const sceServiceProvider = {
  provide: SCE,
  useFactory: sceServiceFactory,
  deps: ["$injector"],
};

export const LikeService = new InjectionToken("LikeService");

export function likeServiceFactory(i: any) {
  return i.get("LikeService");
}

export const LikeServiceProvider = {
  provide: LikeService,
  useFactory: likeServiceFactory,
  deps: ["$injector"],
};
