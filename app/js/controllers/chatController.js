angular.module('app')
    .controller('ChatController', function($scope, CurrentUser,UserService, MessageService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
  $scope.newMessage = {message: ''};

        $scope.addMessage = function () {
      MessageService.create($scope.newMessage).then(function (res) {
        // good
      }, function (err) {
        // bad
      });
    };
    });
