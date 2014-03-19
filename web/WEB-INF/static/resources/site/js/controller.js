'use strict';


var ProfileCtrl = function ($scope) {

    $scope.pageName = "Profile";
    $scope.profile = {};
    $scope.accountProfile = {};
    $scope.editMode = false;
    $scope.editModeAccount = false;

    $scope.profile.firstName = 'Karan';
    $scope.profile.middleName = '';
    $scope.profile.lastName = 'Khosla';
    $scope.profile.email = 'test@test';

    $scope.accountProfile.oldPassword = 'test123';
    $scope.accountProfile.newPassword = 'test123';

    $scope.editAccountProfile = function() {
        $scope.editModeAccount = true;
    };

    $scope.saveAccountProfile = function() {
        $scope.editModeAccount = false;
    };

    $scope.editProfile = function() {
        $scope.editMode = true;
    };

    $scope.saveProfile = function() {
        $scope.editMode = false;
    };
};

var SettingsCtrl = function ($scope) {

    $scope.pageName = "Settings";

};

var LogoutCtrl = function ($scope ,$location) {

    $scope.pageName = "Logout";

    $location.path("/login");

};

var LoginCtrl = function ($scope) {

    $scope.pageName = "Login";

};

var AccountCreateCtrl = function ($scope) {

    $scope.pageName = "AccountCreation";

    $scope.createForm = function($location) {
        $location.path("/");
    };

};

var ForgotCtrl = function ($scope) {

    $scope.pageName = "Forgot";

};

var OnlineCtrl = function ($scope) {

    $scope.pageName = "Online";

};


var CourseCtrl = function ($scope) {

    $scope.pageName = "Courses";

};


var StudentCtrl = function ($scope, $http) {

    $scope.pageName = "Student";

    $scope.student = {};
    $scope.editMode = false;

    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };

    $scope.resetError = function () {
        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.fetchAllStudents = function () {

        $scope.resetError();

        $http.get('api/student/studentlist.json').success(function (sList) {
            $scope.studentList = sList;
        }).error(function () {
            $scope.setError('Failed to fetch Students.');
        });
    };


    $scope.addStudent = function (student) {

        $scope.resetError();

        $http.post('api/student/addStudent', student).success(function () {
            $scope.fetchAllStudents();
            $scope.student.firstName = '';
            $scope.student.middleName = '';
            $scope.student.lastName = '';
            $scope.student.standard = '';
        }).error(function () {
            $scope.setError('Failed to add Student.');
        });
    };

    $scope.editStudentDetails = function (student) {
        $scope.resetError();

        $scope.student = student;
        $scope.editMode = true;
    };

    $scope.updateStudentDetails = function (student) {
        $scope.resetError();

        $http.put('api/student/updateStudentDetails', student).success(function () {
            $scope.fetchAllStudents();
            $scope.emp.firstName = '';
            $scope.emp.middleName = '';
            $scope.emp.lastName = '';
            $scope.emp.standard = '';
            $scope.editMode = false;
        }).error(function () {
            $scope.setError('failed to update Student.');
        });
    };

    $scope.removeStudent = function (studentId) {

        $scope.resetError();

        $http.delete('api/student/removeStudent/' + studentId).success(function () {
            $scope.fetchAllStudents()
        }).error(function () {
            $scope.setError('Failed to remove Student.');
        });
    };

    $scope.removeAllStudents = function () {

        $scope.resetError();

        $http.delete('api/student/removeAllStudents').success(function () {
            $scope.fetchAllStudents()
        }).error(function () {
            $scope.setError('Failed to remove Students.');
        });
    };

    $scope.fetchAllStudents();

    $scope.predicate = 'id';

};


//-------------------------------------------------------------------------------------------------------------------------------------------

var EmpCtrl = function ($scope, $http) {

    $scope.pageName = "Employee";

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

        $scope.resetError();

        $http.get('api/employee/employeelist.json').success(function (empList) {
            $scope.employeeList = empList;
        }).error(function () {
            $scope.setError('Failed to fetch Employees.');
        });
    };


    $scope.editEmployeeDetails = function (emp) {
        $scope.resetError();

        $scope.emp = emp;
        $scope.editMode = true;
    };

    $scope.updateEamployeeDetails = function (emp) {
        $scope.resetError();

        $http.put('api/employee/updateEmployeeDetails', emp).success(function () {
            $scope.fetchAllEmployees();
            $scope.emp.firstName = '';
            $scope.emp.middleName = '';
            $scope.emp.lastName = '';
            $scope.emp.designation = '';
            $scope.emp.project = '';
            $scope.emp.email = '';
            $scope.editMode = false;
        }).error(function () {
            $scope.setError('Could not update the existing Employee Record.');
        });
    };


    $scope.addEmployee = function (emp) {

        $scope.resetError();

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

    $scope.removeEmployee = function (employeeId) {

        $scope.resetError();

        $http.delete('api/employee/removeEmployee/' + employeeId).success(function () {
            $scope.fetchAllEmployees();
        }).error(function () {
            $scope.setError('Failed to remove Employee.');
        });
    };

    $scope.removeAllEmployee = function () {

        $scope.resetError();

        $http.delete('api/employee/removeAllEmployees').success(function () {
            $scope.fetchAllEmployees();
        }).error(function () {
            $scope.setError('Failed to remove all Employees.');
        });
        $scope.fetchAllEmployees();
    };

    $scope.fetchAllEmployees();

    $scope.predicate = 'id';
};

