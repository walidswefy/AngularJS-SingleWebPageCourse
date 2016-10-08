(function () {
'use strict';

angular.module('MenuApp')
.component('listCategories', {
  templateUrl: 'src/menu/templates/list-categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
