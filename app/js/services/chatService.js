angular.module('app')
    .service('ChatService', function($http) {
        return {
            getAll: function() {
                return $http.get('/chats');
            },
            getOne: function(id) {
                return $http.get('/chats/' + id);
            },
            create: function(chat) {
              return $http.post('/chats', chat);
            },
            update: function(id, user) {
                return $http.put('/chats/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/chats/' + id);
            }
        };
    });
