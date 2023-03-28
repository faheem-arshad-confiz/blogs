import angular from "angular";
import AdminPostEditController from "./admin-post-edit.controller";

angular.module("app").component("adminPostEdit", {
  templateUrl: "controllers/admin-post-edit/admin-post-edit.html",
  controller: AdminPostEditController,
});
