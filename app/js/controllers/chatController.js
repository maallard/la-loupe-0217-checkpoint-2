angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        var pseudo = CurrentUser.user().pseudo;


        $scope.messages = [];

        $scope.pseudoChosen = function() {
            $scope.pseudo = true;
        };
        $scope.add = function() {
            ChatService.create({
                userPseudo: pseudo,
                element: $scope.message
            });
            ChatService.getAll().then(function(res) {
                $scope.messages = res.data;
            });
            $scope.message = '';
        };

        ChatService.getAll().then(function(res) {
            $scope.messages = res.data;
        });
    });
