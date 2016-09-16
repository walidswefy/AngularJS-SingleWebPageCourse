(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";

        $scope.displayMessage = function () {
            if ($scope.dishes == "") {
                $scope.message = "Please enter data first";
            }
            else if ($scope.dishes.split(",").length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };


    }
})();
