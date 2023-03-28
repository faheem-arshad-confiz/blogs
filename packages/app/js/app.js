import angular from "angular";

var app = angular.module("app", [
    "ngRoute",
    "appServices",
    "appControllers",
    "appDirectives",
]);

var appServices = angular.module("appServices", []);
var appControllers = angular.module("appControllers", []);
var appDirectives = angular.module("appDirectives", []);



