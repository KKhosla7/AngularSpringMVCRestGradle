'use strict';


var AngularSpringApp = {};

var Application = angular.module('AngularSpringApp', ['ngRoute', 'ngCookies', 'ngSanitize']);

Application.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/login', {
            templateUrl: 'layout/login',
            controller: LoginCtrl
        }).when('/create', {
            templateUrl: 'layout/account',
            controller: AccountCreateCtrl
        }).when('/forgot', {
            templateUrl: 'layout/forgot',
            controller: ForgotCtrl
        }).when('/profile', {
            templateUrl: 'layout/profile',
            controller: ProfileCtrl
        }).when('/settings', {
            templateUrl: 'layout/settings',
            controller: SettingsCtrl
        }).when('/employee', {
            templateUrl: 'layout/employee',
            controller: EmpCtrl
        }).when('/student', {
            templateUrl: 'layout/student',
            controller: StudentCtrl
        }).when('/logout', {
            templateUrl: 'layout/login',
            controller: LogoutCtrl
        }).otherwise({
            redirectTo: '/login'
        });
    }]).run(['$rootScope', '$location', function ($rootScope, $location) {
        var currentPath = function () {
            return $location.path();
        };
        $rootScope.$watch(currentPath, function (newPath) {
            $rootScope.activetab = newPath;
        });
    }]);
