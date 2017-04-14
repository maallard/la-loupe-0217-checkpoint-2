angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

            $scope.newMessage = [];
            $scope.createMessage = function() {
                $scope.newMessage.user = CurrentUser.user()._isd;
                $scope.newMessage.push($scope.addMessage);
            };
        });
    });
