app.controller('mainController', function($scope) {

});

app.controller('imageController', function($scope, $http, $location, $timeout) {

  var filename;

  if ($location.$$path == '/lambert') {
    filename = 'data/LambertDrawings.data.json';
  } else if ($location.$$path == '/raper') {
    filename = 'data/GeorgeRaper.data.json';
  } else if ($location.$$path == '/seton') {
    filename = 'data/RobertAndersonSeton.data.json';
  } else if ($location.$$path == '/painter') {
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

  $scope.hideall = true;
  $scope.hideprog = false;

  $timeout(function() {
    $scope.hideall = false;
    $scope.hideprog = true;
  }, 1500);

});
