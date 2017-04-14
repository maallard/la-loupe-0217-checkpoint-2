angular.module('app')
    .service('ChatService', function($http) {
      var URL = 'http://localhost:3000'
        return {
            getAll: function() {
                  return $http.get(URL + '/chat');
            },

            create: function (msg) {
                  return $http.post(URL + '/chat', msg);
            },
            // getOne: function(id) {
            //     return ;
            // },
            // update: function(id, user) {
            //     return ;
            // },
            // delete: function(id) {
            //     return ;
            // }
        };
    });
