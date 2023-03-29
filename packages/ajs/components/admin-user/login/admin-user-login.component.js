import angular from "angular";
import AdminUserLoginController from "./admin-user-login.controller";

angular
  .module("app.components")
  .component("adminUserLogin", {
    templateUrl: "components/admin-user/login/admin-user-login.html",
    controller: AdminUserLoginController,
  });
