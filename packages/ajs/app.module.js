import angular from "angular";

var appServices = angular.module("app.services", []);
var appComponents = angular.module("app.components", []);
var appDirectives = angular.module("appDirectives", []);

var app = angular.module("app", [
    "ngRoute",
    "app.services",
    "app.components",
    "appDirectives",
]);