angular.module('app')
    .controller('ChatController', function ($scope, CurrentUser, commentService, UserService) {
        UserService.getOne(CurrentUser.user()._id).then((res) => {
            $scope.user = res.data;
        });
        $scope.comments = [];
        $scope.newComment = "";

        $scope.addComment = () => {
            commentService.create({comment: $scope.newComment}).then((res) => {
              $scope.comments.push(res.data.comment);
            }, (err) => {

            });
            $scope.newComment = "";
        };
        commentService.getAll().then((res) => {
          $scope.comments = res.data;
        }, (err) => {

        });
    });
