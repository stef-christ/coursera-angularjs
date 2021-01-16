(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
            url:'/',
            templateUrl:'src/menuapp/templates/home.template.html'})

    .state('categories',{
            url:'/categories',
            templateUrl:'src/data/templates/categories.template.html',
            controller:'MenuCategoriesController as menu',
            resolve:{
              categories: ['MenuDataService', function (MenuDataService){
                return MenuDataService.getAllCategories();
              }]}
            })

    .state('items',{
            url:'/items/{categoryShortName}',
            templateUrl:'src/data/templates/items.template.html',
            controller:'MenuItemsController as menuitems',
            resolve:{
              items: ['$stateParams','MenuDataService', function( $stateParams, MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                  }
                });
    };
}) ();
