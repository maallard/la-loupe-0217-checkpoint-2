angular.module('app')
    .service('ChatService', function($http) {
        return {
            getAll: function() {
                return $http.get('/chat');
            },
            getOne: function(id) {
                return $http.get('/chat/' + id);
            },
            create: function(id) {
              return $http.post('/chat' + id);
            },
            update: function(id, user) {
                return $http.put('/chat/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/chat/' + id);
            }
        };
    });
