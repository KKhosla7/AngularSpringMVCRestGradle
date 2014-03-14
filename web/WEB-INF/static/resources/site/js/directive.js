/**
 * Created by karan.khosla on 3/14/14.
 */



Application.directive("navbar", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "components/navbar"
        }
    }
);


Application.directive("mainPage", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "layout/login"
        }
    }
);

Application.directive("siteFooter", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "components/site-footer"
        }
    }
);