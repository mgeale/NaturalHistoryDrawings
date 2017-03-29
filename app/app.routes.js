app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

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
