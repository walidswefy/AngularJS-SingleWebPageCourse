(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })

            .state('catState', {
                url: '/categories',
                templateUrl: 'src/menu/templates/categories.template.html',
                controller: 'CategoriesController as $ctrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('itemState', {
                url: '/category/{categoryName}',
                templateUrl: 'src/menu/templates/items.template.html',
                controller: 'ItemsController as $itemsCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            });

    }

})();
