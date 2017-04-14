angular.module('app')
    .service('ChatService', function($http) {
        var URL = 'http://localhost:3000';
        return {

            addOne: function(message) {
                return $http.post(URL + '/chat/', message);
            },

            getAll: function() {
                          return $http.get(URL + '/chat/'); 
                      },

        };
    });
