import angular from "angular";
import AdminUserLogoutController from "./admin-user-logout.controller";

angular
  .module("app.components")
  .component("adminUserLogout", {
    templateUrl: "components/admin-user/logout/admin-user-logout.html",
    controller: AdminUserLogoutController,
  });
