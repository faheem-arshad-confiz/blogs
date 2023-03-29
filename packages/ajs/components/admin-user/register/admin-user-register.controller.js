const AdminUserRegisterController = [
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

export default AdminUserRegisterController;