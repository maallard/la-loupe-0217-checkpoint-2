angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.add = "";
        $scope.chatComments = [];
        $scope.addComment = function(chatComment){
          $scope.chatComments.push($scope.chatComment);

          var chat = {
            chatPost: chatComment
          };

          console.log(chat);

          ChatService.createChat(chat).then(function(res){
          });
        };
    });
