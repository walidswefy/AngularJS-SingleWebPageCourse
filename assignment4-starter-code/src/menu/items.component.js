(function () {
  'use strict';

  angular.module('MenuApp')
      .component('listItems', {
        templateUrl: 'src/menu/templates/list-items.template.html',
        bindings: {
          items: '<'
        }
      });

})();