(function () {
    'use strict';

    angular.module('public')
        .service('UserService', UserService)
        .constant('ApiBasePath', "https://scastro-course5.herokuapp.com/menu_items/");


    UserService.$inject = ['$http', 'ApiBasePath'];
    function UserService($http, ApiBasePath) {
        var service = this;

        service.getUser = function () {
            return service.user;
        };

        service.setUser = function (user) {
            service.user = user;
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + categoryShortName + ".json")
            });
        }
    }

})();
