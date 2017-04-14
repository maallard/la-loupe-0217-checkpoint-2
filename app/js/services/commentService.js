angular.module('app')
    .service('CommentService', function($http) {
        return {
            findAll: function () {
              return $http.get('/comments', comment);
            },
            getAllByCommentId: function (commentId) {
                return $http.get('/comments/forComment/' + commentId);
            },
            addComment: function(comment) {
                return $http.post('/comments/addcomment/', comment);
            },
            delComment: function(id, commentId) {
                return $http.put('/comments/delcomment', {user: id, comment: commentId});
            },
            getAll: function () {
              return $http.get('/comments');
            }
        };
    });
