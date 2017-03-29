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
    when('/raper', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    }).
    when('/seton', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    }).
    when('/painter', {
      templateUrl: 'app/body.html',
      controller: 'imageController'
    });

}]);
