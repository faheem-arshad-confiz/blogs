import angular from "angular";
import AdminPostEditController from "./admin-post-edit.controller";

angular
  .module("app.components")
  .component("adminPostEdit", {
    templateUrl: "components/admin-post-edit/admin-post-edit.html",
    controller: AdminPostEditController,
  });
