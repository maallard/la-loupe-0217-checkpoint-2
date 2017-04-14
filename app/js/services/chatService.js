angular.module('app')
    .service('ChatService', function($http) {
        return {
            create: function(chat) {
                return $http.post('/chats/createchat/' + id, chat);
            },
        };
    });
