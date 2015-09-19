angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  //blahblah
  //console.log($location);
  $scope.link = {};
  $scope.addLink = function () {
    console.log($scope.link.url);
    Links.POST($scope.link.url).then(
      function () {
        //console.log("You sent us a link to shorten: " + url);
        $scope.link.url = '';
      }
    );
  };

});
