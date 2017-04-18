angular.module('app')
    .service('ChatService', function($http) {
        return {
          findAll: function(chat) {
              return $http.get('/chats', chat);
          },

            createChat: function(chat) {
                return $http.post('/chats/createchat/', chat);
            },
        };
    });
