(function() {
  githubClient.config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/index',
      controller: 'IndexController'
    })
    .when('/about', {
      templateUrl: 'templates/about' 
    });
  });
})();

