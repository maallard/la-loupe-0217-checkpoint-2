angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.add = "";
        $scope.chatComments = [];
        $scope.addComment = function(chatComment) {
            var chat = {
                chatPost: chatComment,
                name: $scope.user._id
            };

            ChatService.createChat(chat).then(function(res) {});

            location.reload();

            console.log(chat);
        };

        ChatService.findAll().then(function(res) {
            $scope.chatComments = res.data;
        }, function(err) {});
    });
