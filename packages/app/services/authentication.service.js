import * as angular from 'angular'

angular.module("appServices").factory('AuthenticationService', function() {
    var auth = {
        isAuthenticated: false,
        isAdmin: false
    }
    return auth;
});