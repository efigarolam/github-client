(function() {
  var githubClient = angular.module('githubClient');

  githubClient.controller('IndexController', ['$scope', 'github', function($scope, github) {
    $scope.githubUser = null;
    $scope.username = 'efigarolam';

    $scope.searchGithubUser = function() {
      github.getUser($scope.username).success(function(data) {
        $scope.githubUser = data;
        $scope.$broadcast('userSelected', $scope.username);
      }).error(function() {
        $scope.error = data;
      });
    };
  }]);
})();
