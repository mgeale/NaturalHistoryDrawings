var app = angular.module('app', []);

app.controller('drawings', function($scope, $http) {

  $http.get('data/data.json')
  .then(function(response) {
    $scope.imgs = response.data;
  });

  var lightboxImg;
  lightboxImg = document.getElementById('lightbox-img');

  $scope.lClass = 'close';

  var toggleClass = function() {
    if ($scope.lClass == 'open') {
      $scope.lClass = 'close';
    } else {
      $scope.lClass = 'open';
    }
  }

  $scope.photoClick = function(event) {
    console.log(this.img.highreslink);
    toggleClass();
  }

  $scope.toggleClick = function() {
    toggleClass();
    lightboxImg.src = 'images/empty.svg';
  }

});
