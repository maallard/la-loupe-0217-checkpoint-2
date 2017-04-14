angular.module('app')
    .service('ChatService', function($http) {
        return {
            createChat: function(chat) {
                return $http.post('/chats/createchat/', chat);
            },
        };
    });
