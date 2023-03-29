import angular from "angular";
import AdminPostCreateController from "./admin-post-create.controller";

angular.module("app").component("adminPostCreate", {
  templateUrl: "controllers/admin-post-create/admin-post-create.html",
  controller: AdminPostCreateController,
});
