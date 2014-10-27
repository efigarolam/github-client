(function() {
  var githubClient = angular.module('githubClient');

  githubClient.controller('UserReposController', ['$scope', 'github', function($scope, github) {
    $scope.userRepos = [];
    $scope.$on('userSelected', function(event, username) {
      $scope.username = username;
      getUserRepos();
    });

    var getUserRepos = function() {
      github.getUserRepos($scope.username).success(function(data) {
        $scope.userRepos = data;
      }).error(function(data) {
        console.log(data.message);
      });
    };
  }]);
})();
