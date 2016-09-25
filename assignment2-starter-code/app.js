(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
        $scope.items = ShoppingListCheckOffService.toBuyItems();
        $scope.buyItem = ShoppingListCheckOffService.buyItem;
    }

    AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {

        $scope.items = ShoppingListCheckOffService.boughtItems();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var toBuy = [];
        var bought = [];

        toBuy.push({
            name: "Milk",
            quantity: 1
        });
        toBuy.push({
            name: "Orange",
            quantity: 2
        });
        toBuy.push({
            name: "Juice",
            quantity: 3
        });
        toBuy.push({
            name: "Cola",
            quantity: 4
        });
        toBuy.push({
            name: "Cookies",
            quantity: 5
        });

        service.buyItem = function (itemIndex) {
            var item = toBuy[itemIndex];
            toBuy.splice(itemIndex, 1);
            bought.push(item);
        };

        service.toBuyItems = function () {
            return toBuy;
        };

        service.boughtItems = function () {
            return bought;
        };
    }
})();
