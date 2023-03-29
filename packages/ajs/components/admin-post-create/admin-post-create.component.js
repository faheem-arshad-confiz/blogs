import angular from "angular";
import AdminPostCreateController from "./admin-post-create.controller";

angular
  .module("app.components")
  .component("adminPostCreate", {
    templateUrl: "components/admin-post-create/admin-post-create.html",
    controller: AdminPostCreateController,
  });
