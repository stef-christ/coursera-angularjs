(function () {
'use strict';

angular.module('Data').
service ('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http){
var service = this;

service.getAllCategories = function() {
  service.categories = [];
  return $http({
    method:'GET',
    url:('https://davids-restaurant.herokuapp.com/categories.json')})
  .then(function (response){
    service.categories = response.data;
    return service.categories;
  });
}

service.getItemsForCategory = function(categoryShortName) {
  service.items = [];
  return $http({
    method:'GET',
    url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName})
    .then(function (response){
      service.items=response.data.menu_items;
      return service.items;
    });
  };
};

})();
