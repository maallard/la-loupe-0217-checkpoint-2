angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        $scope.messages = [];
        $scope.date = new Date();
        $scope.newMessage = "";
        $scope.nbrLike = 0;

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            $scope.addNewMessage = function(){
              $scope.messages.push($scope.newMessage);
            };
            $scope.addLike = function(){
              $scope.nbreLike += 1;
            };

        });
    });
