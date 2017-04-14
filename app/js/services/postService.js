angular.module('app')
    .service('PostService', function($http) {
        return {
            create: function(post) {
                return $http.post('/posts/',post);
            },
            getAll: function() {
                return $http.get('/posts');
            },
            getOne: function(id) {
                return $http.get('/posts/' + id);
            },
            update: function(id, post) {
                return $http.put('/posts/' + id, post);
            },
            delete: function(id) {
                return $http.delete('/posts/' + id);
            }
        };
    });
