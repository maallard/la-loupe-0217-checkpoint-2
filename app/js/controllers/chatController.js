angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, commentService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

            $scope.Comments = [];


            $scope.AddComment = function (){
              var commentAdd = {
                text: $scope.commentAdd,
                pseudo: $scope.pseudo
              };

$scope.Comments.push(commentAdd);

                commentService.create(commentAdd).then(function(res){

                    $scope.Comments.push(commentAdd);
                }, function(err){});

              $scope.commentAdd = '';
              $scope.pseudo = '';
            };


        });
});
