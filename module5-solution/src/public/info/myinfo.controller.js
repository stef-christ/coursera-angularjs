(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'SignUpService', 'ApiPath'];
function MyInfoController(MenuService, SignUpService, ApiPath) {
  var myInfoCtrl = this;
  var api = ApiPath;

  myInfoCtrl.show = false;

  myInfoCtrl.user = SignUpService.getInfo();

  if(angular.equals(myInfoCtrl.user, {}) || angular.equals(myInfoCtrl.fav, {})) {
    myInfoCtrl.show = false;
  }
  else {
    myInfoCtrl.show = true;
  }
}
})();
