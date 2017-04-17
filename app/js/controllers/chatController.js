angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        $scope.user = CurrentUser.user();
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.chatComments = [];
        $scope.addComment = function(chatComment) {
            var chat = {
                chatPost: chatComment,
                name: $scope.user._id
            };

            console.log(chat);

            ChatService.createChat(chat).then(function(res) {});

            location.reload();

        };

        ChatService.findAll().then(function(res) {
            $scope.chatComments = res.data;
        }, function(err) {});
    });
