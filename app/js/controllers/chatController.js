angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.user = {};
        var id = CurrentUser.user().username;
        console.log(id);

        $scope.chatList = [];
        ChatService.getAll().then(function(res) {
          $scope.chatList = res.data;
        }, function(err) {
          console.log(err);
        });


        $scope.addChat = function() {
          var message = {
              message_sent: $scope.message,
              author: CurrentUser.user()._id,
          };
            $scope.chatList.push(message);
            ChatService.send(message);
            $scope.message = "";
        };
    });
