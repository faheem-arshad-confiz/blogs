import angular from "angular";
import AdminUserController from "./admin-user.controller";

angular.module("app").component("adminUserRegister", {
  templateUrl: "controllers/admin-user/admin-user-register.html",
  controller: AdminUserController,
});

angular.module("app").component("adminUserLogin", {
  templateUrl: "controllers/admin-user/admin-user-login.html",
  controller: AdminUserController,
});

angular.module("app").component("adminUserLogout", {
  templateUrl: "controllers/admin-user/admin-user-logout.html",
  controller: AdminUserController,
});
