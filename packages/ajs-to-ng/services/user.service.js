import * as angular from 'angular'


var options = {};
options.api = {};
options.api.base_url = "http://localhost:3001";

angular.module("appServices").factory('UserService', [
    '$http',
    function ($http) {
        return {
            signIn: function(username, password) {
                return $http.post(options.api.base_url + '/user/signin', {username: username, password: password});
            },
    
            logOut: function() {
                return $http.get(options.api.base_url + '/user/logout');
            },
    
            register: function(username, password, passwordConfirmation) {
                return $http.post(options.api.base_url + '/user/register', {username: username, password: password, passwordConfirmation: passwordConfirmation });
            }
        }
    }
]);