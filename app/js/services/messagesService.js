angular.module('app')
    .service('MessagesService', function($http) {
        return {

            create: function(postmsg) {
                return $http.post('/messages', postmsg);
            },

            getAll: function() {
                return $http.get('/messages');

            }
        };
    });
