/**
 * Created by karan.khosla on 3/14/14.
 */

Application.directive("navBar", function () {
        return {
            restrict: "A",
            replace: true,
            transclude: true,
            templateUrl: "components/navbar"
        }
    }
);

Application.directive("siteFooter", function () {
        return {
            restrict: "A",
            replace: true,
            transclude: true,
            templateUrl: "components/site-footer"
        }
    }
);