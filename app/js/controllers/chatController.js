angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService,ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.newCommentaire ={
          content: "",
          done: "false"
        };
        $scope.addCommentaire = function () {
          ChatService.create($scope.newCommentaire).then(function (res) {

          },
           function (err) {

          }
        );
    };
  });
