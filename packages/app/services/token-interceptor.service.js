import * as angular from "angular";

angular.module("appServices").factory("TokenInterceptor", [
  "$q",
  "$window",
  "$location",
  "AuthenticationService",
  function ($q, $window, $location, AuthenticationService) {
    console.log(
      "Authentication service " + AuthenticationService.isAuthenticated
    );
    var interceptor = {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers.Authorization =
            "Bearer " + $window.sessionStorage.token;
        }
        return config;
      },

      requestError: function (rejection) {
        return $q.reject(rejection);
      },

      /* Set Authentication.isAuthenticated to true if 200 received */
      response: function (response) {
        console.log("User is authenticated");
        if (
          response != null &&
          response.status == 200 &&
          $window.sessionStorage.token &&
          !AuthenticationService.isAuthenticated
        ) {
          AuthenticationService.isAuthenticated = true;
        }
        return response || $q.when(response);
      },

      /* Revoke client authentication if 401 is received */
      responseError: function (rejection) {
        console.log("User is un authenticated");
        if (
          rejection != null &&
          rejection.status === 401 
          // &&
          // ($window.sessionStorage.token ||
          //   AuthenticationService.isAuthenticated)
        ) {
          if($window.sessionStorage.token){
            delete $window.sessionStorage.token;
          }
          AuthenticationService.isAuthenticated = false;
          $location.path("/admin/login");
        }
        console.log("")
        return $q.reject(rejection);
      },
    };
    return interceptor;
  },
]);

// "angular": "1.8.3",
// "angular-route": "1.8.3",
// "bootstrap": "^5.2.3",
// "jquery": "^3.6.4",
// "less": "^4.1.3",
// "rimraf": "^2.6.2",
// "ts-loader": "^3.2.0",
// "typescript": "^2.6.2",
// "webpack": "^5.76.3"
