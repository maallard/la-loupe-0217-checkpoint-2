angular.module('app')
    .service('ChatService', function($http) {
        return {
          findAll: function(chat) {
              return $http.get('/chats', chat);
          },
          // findById: function(commentId) {
          //   return $http.get('/chats/comment/' + commentId);
          // },
            createChat: function(chat) {
                return $http.post('/chats/createchat/', chat);
            },
        };
    });
