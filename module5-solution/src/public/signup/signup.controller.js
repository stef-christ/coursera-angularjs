(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', 'MenuService'];
function SignUpController(SignUpService, MenuService) {
  var signUpCtrl = this;
  signUpCtrl.message = '';

  signUpCtrl.info = function (user) {

  signUpCtrl.promise = MenuService.getFav(user.favDish.toUpperCase()).then(function(response) {
    signUpCtrl.promise = response;
    if(angular.equals(signUpCtrl.promise, {})) {
      signUpCtrl.message = 'No such menu number exists';
    }
    else {
      user.fav = signUpCtrl.promise;
      SignUpService.info(user);
      signUpCtrl.message = 'Your information has been saved';
    }
  });
  };

}
})();
