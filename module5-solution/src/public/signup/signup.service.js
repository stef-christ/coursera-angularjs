(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  service.user = {};
  
  service.info = function (user) {
    service.user = angular.copy(user);
    }

  service.getInfo = function() {
    return service.user;
    }
}

})();
