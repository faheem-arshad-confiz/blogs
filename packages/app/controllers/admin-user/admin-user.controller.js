const AdminUserController = [
  "$scope",
  "$location",
  "$window",
  "UserService",
  "AuthenticationService",
  function AdminUserCtrl(
    $scope,
    $location,
    $window,
    UserService,
    AuthenticationService
  ) {
    console.log({
      $scope,
      $location,
      $window,
      UserService,
    });
    //Admin User Controller (signIn, logOut)
    $scope.signIn = function signIn(username, password) {
      if (username != null && password != null) {
        UserService.signIn(username, password)
          .then((res) => res.data)
          .then(function (data) {
            console.log("sasasasas", data);
            AuthenticationService.isAuthenticated = true;
            $window.sessionStorage.token = data.token;
            console.log($window.sessionStorage.token);
            $location.path("/admin");
          })
          .catch(function (status, data) {
            console.log(status);
            console.log(data);
          });
      }
    };

    $scope.logOut = function logOut() {
      if (AuthenticationService.isAuthenticated) {
        UserService.logOut()
          .then((res) => res.data)
          .then(function (data) {
            AuthenticationService.isAuthenticated = false;
            delete $window.sessionStorage.token;
            $location.path("/");
          })
          .catch(function (status, data) {
            console.log(status);
            console.log(data);
          });
      } else {
        $location.path("/admin/login");
      }
    };

    $scope.register = function register(username, password, passwordConfirm) {
      if (AuthenticationService.isAuthenticated) {
        $location.path("/admin");
      } else {
        console.log("before promise");
        UserService.register(username, password, passwordConfirm)
          .then((res) => res.data)
          .then(function (data) {
            console.log("in then");
            $location.path("/admin/login");
          })
          .catch(function (status, data) {
            console.log("in catch");
            console.log(status);
            console.log(data);
          });
      }
    };
  },
];

export default AdminUserController;
