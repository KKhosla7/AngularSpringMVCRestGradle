'use strict';


var AngularSpringApp = {};

var Application = angular.module('AngularSpringApp', ['ngRoute', 'ngCookies', 'ngSanitize']);


Application.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/employee', {
        templateUrl: 'layout/employee',
        controller: EmpCtrl
    });

    $routeProvider.otherwise({
        redirectTo: '/employee'
    });
}]);