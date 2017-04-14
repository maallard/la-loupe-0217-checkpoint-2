angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.add = "";
        $scope.posts = [];
        $scope.addComment = function(){
          $scope.posts.push($scope.post);
          console.log($scope.post);
        };
    });
