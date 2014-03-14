'use strict';


var AngularSpringApp = {};

var Application = angular.module('AngularSpringApp', ['ngRoute', 'ngCookies', 'ngSanitize']);


Application.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'layout/login',
        controller: LoginCtrl
    });

    $routeProvider.when('/create', {
        templateUrl: 'layout/account',
        controller: AccountCreateCtrl
    });

    $routeProvider.when('/forgot', {
        templateUrl: 'layout/forgot',
        controller: ForgotCtrl
    });

    $routeProvider.when('/profile', {
        templateUrl: 'layout/profile',
        controller: ProfileCtrl
    });

    $routeProvider.when('/settings', {
        templateUrl: 'layout/settings',
        controller: SettingsCtrl
    });

    $routeProvider.when('/employee', {
        templateUrl: 'layout/employee',
        controller: EmpCtrl
    });

    $routeProvider.when('/student', {
        templateUrl: 'layout/student',
        controller: StudentCtrl
    });

    $routeProvider.when('/course', {
        templateUrl: 'layout/course',
        controller: CourseCtrl
    });

    $routeProvider.when('/online', {
        templateUrl: 'layout/online',
        controller: OnlineCtrl
    });

    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);