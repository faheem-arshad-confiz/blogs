const AdminUserLogoutController = [
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
  },
];

export default AdminUserLogoutController;