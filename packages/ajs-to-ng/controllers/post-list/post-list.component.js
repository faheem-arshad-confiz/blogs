import angular from "angular";
import PostListController from "./post-list.controller";

angular.module("app").component("postList", {
  templateUrl: "controllers/post-list/post-list.html",
  controller: PostListController,
});
