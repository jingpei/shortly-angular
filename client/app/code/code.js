angular.module('shortly.code', [])

.controller('CodeController', function ($scope, $routeParams, $http, Code) {
  $scope.getCode = function () {
    Code.GET($routeParams.code);
  }

  $scope.getCode();
});