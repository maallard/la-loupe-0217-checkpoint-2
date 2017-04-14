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
        $scope.addComment = function () {
          CommentService.addComment({author: $scope.user._id, body: $scope.query}).then(function(res) {
          });
          location.reload();
        };
        // $scope.afficher();
        $scope.delComment = function (commentId) {
          UserService.delComment(CurrentUser.user()._id, commentId).then(function(res) {
          });
        };
        $scope.comments = [];
        $scope.getComments = function() {
          CommentService.getAll().then(function(res) {
            $scope.comments = res.data;
          }, function(err) {
          });
        };
        $scope.comments = [];
        CommentService.getAll().then(function (res) {
          $scope.comments = res.data;
        }, function (err) {
          // bad
        });
    });
