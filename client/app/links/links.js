angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    //var result = Links;
    Links.then(function(data){
      console.log(data);
      $scope.data.links = data;
      }
    );
    //console.log(result);
    //console.log(result.$$stat);
    //console.log(result['$$state']);
    //
    // console.log("You made it to get links!");
    // return $http({
    //   method: 'GET',
    //   url: '/api/links',
    // })
    // .then(function(resp){
    //   return resp.data;
    // });
  };

  $scope.getLinks();
});
