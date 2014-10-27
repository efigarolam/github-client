(function() {
  var githubClient = angular.module('githubClient');

  githubClient.factory('github', ['$http', function($http) {
    var getUser = function(user) {
      return $http.get('https://api.github.com/users/' + user).success(function(data) {
        return data;
      }).error(function(data) {
        console.log('Yolo');
      });
    };

    var getUserRepos = function(user) {
      return $http.get('https://api.github.com/users/' + user + '/repos').success(function(data) {
        return data;
      }).error(function(data) {
        console.log('Yolo');
      });
    };

    return {
      getUser: getUser,
      getUserRepos: getUserRepos
    };
  }]);
})();
