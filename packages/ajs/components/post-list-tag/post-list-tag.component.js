import angular from "angular";
import PostListTagController from "./post-list-tag.controller";

angular
  .module("app.components")
  .component("postListTag", {
    templateUrl: "components/post-list-tag/post-list-tag.html",
    controller: PostListTagController,
  });
