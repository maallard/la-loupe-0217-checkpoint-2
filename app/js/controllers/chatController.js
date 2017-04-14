angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, CommentService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.messages = [];
        $scope.query = '';
        $scope.addMessage = function () {
          var emptyMessage = {value: ''};
          emptyMessage.value = $scope.query;
          $scope.messages.push(emptyMessage);
          $scope.query = '';
        };
        $scope.user = CurrentUser.user();
        $scope.comments = [];
        UserService.getOne($scope.user._id).then(function (res) {
          res.data.comments.forEach(function (comment) {
            CommentService.getById(comment.commentId).then(function (res) {
              $scope.comments.push(res.data[0]);
            });
          });
        });
        // $scope.afficher();
        $scope.addComment = function (commentId) {
          UserService.addComment(CurrentUser.user()._id, commentId).then(function(res) {
          });
        };
        // $scope.afficher();
        $scope.delComment = function (commentId) {
          UserService.delComment(CurrentUser.user()._id, commentId).then(function(res) {
          });
        };
    });
