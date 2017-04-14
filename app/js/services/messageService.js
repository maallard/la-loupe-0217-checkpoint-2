angular.module('app')
.service('MessageService', function($http) {
  return {
      create: function (message) {
          return $http.put('/chat', message);
      },
      getAll: function () {
          return $http.get('/chat');
      }
  };
});
