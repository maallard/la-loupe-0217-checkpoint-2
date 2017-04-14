angular.module('app')
    .service('ChatService', function($http) {
        return {
            getAll: function() {
                return $http.get('/chats');
            },
            create: function(chat) {
              return $http.post('/chats, chat')
            },
            update: function(id, chat) {
                return $http.put('/chats/' + id, chat);
            },
            delete: function(id) {
                return $http.delete('/chats/' + id);
            }
        };
    });
