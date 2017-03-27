app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'app/landing.html',
      controller: 'mainController'
    }).
    when('/lambert', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    }).
    when('/george-raper', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    }).
    when('/robert-anderson-seton', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    }).
    when('/sydney-bird-painter', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    });

}]);
