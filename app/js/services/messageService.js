angular.module('app')
    .service('messageService', function($http) {
        var URL = 'http://localhost:3000';
        return {
            findAll: function() {
                return $http.get(URL + '/message');
            },
            create: function() {
                return $http.post(URL + '/message', msg);
            }
        };
    });
