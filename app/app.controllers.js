app.controller('mainController', function($scope) {

});

app.controller('imageController', function($scope, $http, $location) {

  var filename;

  if ($location.$$path == '/lambert') {
    filename = 'data/LambertDrawings.data.json';
  } else if ($location.$$path == '/george-raper') {
    filename = 'data/GeorgeRaper.data.json';
  } else if ($location.$$path == '/robert-anderson-seton') {
    filename = 'data/RobertAndersonSeton.data.json';
  } else if ($location.$$path == '/sydney-bird-painter') {
    filename = 'data/SydneyBirdPainter.data.json';
  };

  $http.get(filename)
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

  $scope.photoClick = function() {
    $scope.lightbox = {
      img: this.img.highreslink,
      caption: this.img.caption
    }
    toggleClass();
    var delay = setTimeout(function() {
      echo.init();
    }, 0);
  }

  $scope.toggleClick = function() {
    toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
  }

});
