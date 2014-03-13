'use strict';


var EmpCtrl = function ($scope, $http) {


    $scope.emp = {};
    $scope.editMode = false;


    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };

    $scope.resetError = function () {
        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.fetchAllEmployees = function () {
        $http.get('api/employee/employeelist.json').success(function (empList) {
            $scope.employeeList = empList;
        }).error(function () {
            $scope.setError('Failed to fetch Employees.');
        });
    };


    $scope.addEmployee = function (emp) {
        $http.post('api/employee/addEmployee', emp).success(function () {
            $scope.fetchAllEmployees();
            $scope.emp.firstName = '';
            $scope.emp.middleName = '';
            $scope.emp.lastName = '';
            $scope.emp.designation = '';
            $scope.emp.project = '';
            $scope.emp.email = '';
        }).error(function () {
            $scope.setError('Failed to add Employee.');
        });
    };

    $http.removeEmployee = function (emp) {
        $http.delete('' + emp.s).success(function () {

        }).error(function () {
            $scope.setError('Failed to remove Employee.');
        });
    };

    $http.removeAllEmployee = function () {
        $http.delete('').success(function () {

        }).error(function () {
            $scope.setError('Failed to remove Employees.');
        });
    };

    $scope.fetchAllEmployees();

    $scope.predicate = 'id';

};