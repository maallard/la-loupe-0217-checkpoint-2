angular.module('app')
    .service('ChatService', function($http) {
        return {
          findAll: function() {
              return $http.get('/chats');
          },
          // findById: function(id) {
          //   return $http.get('/chats/' + id);
          // },
            createChat: function(chat) {
                return $http.post('/chats/createchat/', chat);
            },
        };
    });
