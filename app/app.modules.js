var app = angular.module('app', []);

app.controller('drawings', function($scope, $http) {
  $http.get('../data/data.json')
  .then(function(response) {
    $scope.content = response.data;
    $scope.statuscode = response.status;
    console.log($scope.statuscode);
    $scope.statustext = response.statusText;
    // console.log($scope.content);
  });
});
