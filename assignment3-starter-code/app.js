(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var narrowItDownController = this;
        narrowItDownController.found = [];
        narrowItDownController.search = function (searchTerm) {
            if (!searchTerm) {
                narrowItDownController.found = [];
            } else {
                MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
                    var menuItems = result.data.menu_items;
                    var filtered = menuItems.filter(function (item) {
                        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
                    });
                    narrowItDownController.found = filtered;
                    return filtered;
                });
            }
        };

        narrowItDownController.remove = function (index) {
            narrowItDownController.found.splice(index, 1);
        }
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {

        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });
        }
    }

    function FoundItems() {
        return {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                items: '<foundItems',
                onRemove: '&'
            }
            //,controller: NarrowItDownController,
            //controllerAs: 'ctrl',
            //bindToController: true
        };

    }
})();
