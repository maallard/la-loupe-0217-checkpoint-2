angular.module('app')
    .service('ChatService', function($http) {
        return {
            getAll: function() {
                return $http.get('/messages/');
            },
            getOne: function(id) {
                return $http.get('/messages/' + id);
            },
            update: function(id, user) {
                return $http.put('/messages/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/messages/' + id);
            },
            send: function(message) {
              return $http.post('/messages/', message);
            }
        };
    });
