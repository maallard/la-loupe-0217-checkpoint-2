angular.module('app')
    .service('MsgService', function($http) {
        return {
            create: function(msg) {
                return $http.post('/msgs/', msg);
            },
            getAll: function() {
                return $http.get('/msgs');
            }
        };
    });
