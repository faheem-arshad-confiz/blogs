import angular from "angular";
import PostViewController from "./post-view.controller";

angular.module("app").component("postView", {
  templateUrl: "controllers/post-view/post-view.html",
  controller: PostViewController,
});
