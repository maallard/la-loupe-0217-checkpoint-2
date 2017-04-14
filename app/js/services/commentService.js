angular.module('app')
    .service('CommentService', function($http) {
        return {

            create: function (comment, userName) {
              return $http.post('/comments', {content: comment, user: userName});
            },

            getAll: function() {
                return $http.get('/comments');
            },
        };
    });
