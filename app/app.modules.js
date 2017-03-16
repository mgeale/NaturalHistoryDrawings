var app = angular.module('app', []);

app.controller('drawings', function($scope, $http) {

  $http.get('../data/data.json')
  .then(function(response) {
    $scope.content = response.data;
  });

});
