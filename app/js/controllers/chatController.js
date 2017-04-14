angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, CommentService) {

        $scope.submitComment = function () {
          CommentService.create($scope.query, $scope.user).then(function(res) {
            location.reload(true);
          }, function(err) {
            // bad
          });
        };

        CommentService.getAll().then(function (res) {
          $scope.comments = res.data;
          console.log("Comments collection exists", $scope.comments);
        }, function (err) {
          console.log("Comment does not work");
        });

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
    });
