const AdminUserLoginController = [
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
  },
];

export default AdminUserLoginController;