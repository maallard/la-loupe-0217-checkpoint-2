angular.module('app')
    .service('MessageService', function($http) {
        var URL = 'http://localhost:3000';
        return {
            send: function(message) {
                return $http.post(`${URL}/messages/`, message);
            },
            getAll: function() {
                return $http.get(`${URL}/messages/`);
            }
        };
    });
