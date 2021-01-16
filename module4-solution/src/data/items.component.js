( function (){
'use strict';

angular.module ('Data')
.component ('categoryItems',{
  templateUrl:"src/data/templates/items.list.html",
  bindings:{
    items: '<'
  }
});

})();
