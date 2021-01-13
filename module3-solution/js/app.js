(function () {
'use strict';

angular.module('NarrowItDown', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItem.html',
    scope: {
      foundItems: '<',
      onRemove: '&',
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.getItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm.toLowerCase());
      promise.then(function(response) {
        menu.found = response;
      });
  };

  menu.removeItem = function(index) {
    menu.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    service.foundItems = [];
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      service.items = response.data.menu_items;

      for (var i = 0; i < service.items.length; i++) {
        service.itemDesc = service.items[i].description.toLowerCase();
        if(service.itemDesc.indexOf(searchTerm) !== -1 && searchTerm !== '') {
          service.foundItems.push(service.items[i]);
        };
      };
      return service.foundItems;
    });
  }
}

}) ();
