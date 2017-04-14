angular.module('app')
    .service('MessageService', function($http) {
        var URL = 'http://localhost:3000';
        return {
            send: function(message) {
                return $http.post(`${URL}/messages/`, message);
            },
            getAll: function() {
                return $http.get(`${URL}/messages/`);
            },
            like: function(messageId, liked, liker) {
                return $http.post(`${URL}/messages/${messageId}/liker/${liker}`, {liked});
            }
        };
    });
