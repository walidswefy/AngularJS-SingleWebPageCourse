(function () {

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['UserService'];
    function RegistrationController(UserService) {
        var reg = this;

        reg.submit = function () {
            var categoryName = reg.user.categoryName;
            UserService.getItemsForCategory(categoryName).then(function (success) {
                reg.invalidCategoryName = false;
                reg.user.category = success.data;
                UserService.setUser(reg.user);
                alert("Information Saved");
            }, function (error) {
                reg.invalidCategoryName = true;
            });

        };
    }

})();
