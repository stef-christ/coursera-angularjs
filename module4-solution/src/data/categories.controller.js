(function () {
'use strict';

angular.module('Data')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['categories'];
function MenuCategoriesController(categories){
  var menu = this;

  menu.categories = categories;
  };

})();
