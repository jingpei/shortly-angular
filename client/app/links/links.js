angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function () {
    //var result = Links;
    Links.GET().then(function (data) {
      //console.log(data);
      $scope.data.links = data;
      }
    );
  };

  $scope.getLinks();
});
