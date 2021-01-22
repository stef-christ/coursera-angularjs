(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFav = function(short_name) {
    service.fav = {};

    return $http.get(ApiPath + '/menu_items.json').then(function(response) {
      var responseItem = response.data.menu_items;
      for (var i=0 ; i < responseItem.length; i++) {
        if (responseItem[i].short_name == short_name) {
          service.fav = responseItem[i];
        }
      }
      return service.fav;
    });
  }

}



})();
