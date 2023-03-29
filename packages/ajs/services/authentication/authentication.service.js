import * as angular from 'angular'

angular
    .module("app.services")
    .factory('AuthenticationService', function () {
    var auth = {
        isAuthenticated: false,
        isAdmin: false
    }
    return auth;
});