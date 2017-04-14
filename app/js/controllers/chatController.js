angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.messages = [];

        $scope.pseudoChosen = function() {
            $scope.pseudo = true;
        };
        $scope.add = function() {
            ChatService.create({
                userPseudo: $scope.monPseudo,
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
