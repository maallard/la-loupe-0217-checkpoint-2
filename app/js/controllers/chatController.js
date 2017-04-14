angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

            $scope.newmessages=[];

            $scope.newMessage='';
            $scope.addNewMessage= function () {
              newMessages.push(message);
              $scope.newMessage='';

            };
        });
    });
