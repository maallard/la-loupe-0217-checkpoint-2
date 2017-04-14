angular.module('app')
    .service('CommentService', function($http) {
        return {

            create: function (comment, user) {
              return $http.post('/comments', {content: comment, user: user});
            },

            getAll: function() {
                return $http.get('/comments');
            },
        };
    });
