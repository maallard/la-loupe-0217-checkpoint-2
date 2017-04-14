angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            $scope.messages = [];
            $scope.message = '';
            $scope.addCom = function () {
                $scope.messages.push($scope.message);
                $scope.message = '';
            };
        });
    });
