angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, ChatService) {
            UserService.getOne(CurrentUser.user()._id).then(function(res) {
                $scope.user = res.data;
                $scope.user = CurrentUser.user();
                $scope.chats = [];
                $scope.newChat = {
                    content: "",
                    done: false
                };

                $scope.addChat = function() {
                    ChatService.create($scope.newChat).then(function(res) {
                        $scope.chat.push(res.data.chat)
                    }, function(err) {

                    });
                };

                ChatService.getAll().then(function(res) {
                    $scope.chat = res.data;

                });
            });
          }
