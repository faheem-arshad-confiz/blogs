import angular from "angular";
import AdminPostListController from "./admin-post-list.controller";

angular.module("app").component("adminPostList", {
  templateUrl: "controllers/admin-post-list/admin-post-list.html",
  controller: AdminPostListController,
});
