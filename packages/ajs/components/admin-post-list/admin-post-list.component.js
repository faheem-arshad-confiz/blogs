import angular from "angular";
import AdminPostListController from "./admin-post-list.controller";

angular
  .module("app.components")
  .component("adminPostList", {
    templateUrl: "components/admin-post-list/admin-post-list.html",
    controller: AdminPostListController,
  });
