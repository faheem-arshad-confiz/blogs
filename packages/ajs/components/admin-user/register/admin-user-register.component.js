import angular from "angular";
import AdminUserRegisterController from "./admin-user-register.controller";

angular
  .module("app.components")
  .component("adminUserRegister", {
    templateUrl: "components/admin-user/register/admin-user-register.html",
    controller: AdminUserRegisterController,
  });
