import * as angular from "angular";
// import { HttpClient } from '@angular/common/http';
// import { Inject, Injectable} from '@angular/core';
// import { downgradeInjectable } from '@angular/upgrade/static';

import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

declare const angular: angular.IAngularStatic;
import { downgradeInjectable } from "@angular/upgrade/static";

import { lastValueFrom } from "rxjs";

// import '@angular/compiler';
// import 'zone.js';
@Injectable()
export class PostService {
  private apiRoot = "http://localhost:3001";

  // constructor( @Inject (HttpClient) private http: HttpClient){
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  findAllPublished() {
    return lastValueFrom(this.http.get(this.apiRoot + "/post"));
  }

  findByTag(tag: any) {
    return lastValueFrom(this.http.get(this.apiRoot + "/tag/" + tag));
  }

  read(id: string) {
    return this.http.get(this.apiRoot + "/post/" + id);
  }

  findAll() {
    return lastValueFrom(this.http.get(this.apiRoot + "/post/all"));
  }

  changePublishState(id: string, newPublishState: any) {
    return lastValueFrom(
      this.http.put(this.apiRoot + "/post", {
        post: { _id: id, is_published: newPublishState },
      })
    );
  }

  delete(id: string) {
    return lastValueFrom(this.http.delete(this.apiRoot + "/post/" + id));
  }

  create(post: any) {
    return lastValueFrom(
      this.http.post(this.apiRoot + "/post", { post: post })
    );
  }

  update(post: any) {
    return lastValueFrom(this.http.put(this.apiRoot + "/post", { post: post }));
  }

  like(id: string) {
    return this.http.post(
      this.apiRoot + "/post/like",
      { id: id },
      { responseType: "text" }
    );
  }

  unlike(id: string) {
    return this.http.post(
      this.apiRoot + "/post/unlike",
      { id: id },
      { responseType: "text" }
    );
  }
}

angular
  .module("app.services")
  .factory("PostService", downgradeInjectable(PostService));
