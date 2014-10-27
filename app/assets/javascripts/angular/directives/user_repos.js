(function() {
  var githubClient = angular.module('githubClient');

  githubClient.directive('userRepos', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/user_repos',
      controller: 'UserReposController'
    };
  });
})();
