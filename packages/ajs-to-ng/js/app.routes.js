import angular from "angular";

angular.module("app").config([
  "$locationProvider",
  "$routeProvider",
  function ($location, $routeProvider) {
    $routeProvider
      .when("/", {
        template: "<post-list></post-list>",
        // controller: "PostListCtrl",
      })
      .when("/post/:id", {
        template: "<post-view></post-view>",
      })
      .when("/tag/:tagName", {
        template: "<post-list-tag></post-list-tag>",
      })
      .when("/admin", {
        template: "<admin-post-list></admin-post-list>",
        access: { requiredAuthentication: true },
      })
      .when("/admin/post/create", {
        template: "<admin-post-create></admin-post-create>",
        access: { requiredAuthentication: true },
      })
      .when("/admin/post/edit/:id", {
        template: "<admin-post-edit></admin-post-edit>",
        access: { requiredAuthentication: true },
      })

      .when("/admin/login", {
        template: "<admin-user-login></admin-user-login>",
      })
      .when("/admin/logout", {
        template: "<admin-user-logout></admin-user-logout>",
        access: { requiredAuthentication: true },
      })
      .when("/admin/register", {
        template: "<admin-user-register></admin-user-register>",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
angular.module("app").config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.interceptors.push("TokenInterceptor");
  },
]);

// app.run(function($rootScope, $location, $window, AuthenticationService) {
//     $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
//         //redirect only if both isAuthenticated is false and no token is set
//         if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication
//             && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {

//             $location.path("/admin/login");
//         }
//     });
// });
