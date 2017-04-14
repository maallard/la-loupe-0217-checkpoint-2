angular.module('app')
    .service('commentService', function($http) {
        return {
            create: (comment) => {
                return $http.post('/chat', comment);
            },
            getAll: () => {
                return $http.get('/chat');
            },
            findByName: () => {
                return $http.get('/chat');
            }
        };
    });
