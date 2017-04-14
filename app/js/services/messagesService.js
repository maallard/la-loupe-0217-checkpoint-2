angular.module('app')
    .service('MessagesService', function($http) {
        return {

            create: function(newMessage) {
                return http.post('/messages', newMessage);
            },

            getAll: function() {
                return $http.get('/messages');

            }
        };
    });
