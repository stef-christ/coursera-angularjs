( function (){
'use strict';

angular.module ('Data')
.component ('menuCategories',{
  templateUrl:"src/data/templates/categories.list.html",
  bindings:{
    categories: '<'
  }
});


})();
