angular.module('app')
    .service('ChatService', function($http) {
        return {
            createChat: function(id, chat) {
                return $http.post('/chats/createchat/' + id, chat);
            },
        };
    });
