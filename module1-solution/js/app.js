(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.text = "";
  $scope.message = "";

  $scope.check = function () {
    if ($scope.text == "") {
        $scope.message = "Please enter data first";
        return;
        }
    else {
      var list = $scope.text.split(",")
      if (list.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
  }
}

}) ();
