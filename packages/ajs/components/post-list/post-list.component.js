import angular from "angular";
import PostListController from "./post-list.controller";

angular
  .module("app.components")
  .component("postList", {
    templateUrl: "components/post-list/post-list.html",
    controller: PostListController,
  });
