import angular from "angular";
import PostListTagController from "./post-list-tag.controller";

angular.module("app").component("postListTag", {
  templateUrl: "controllers/post-list-tag/post-list-tag.html",
  controller: PostListTagController,
});
