angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, LocalService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.user = {};
        var id = CurrentUser.user().username;
        console.log(id);

        $scope.chatList = [{
                message: 'Hello, la Wild Code School c\'est trop bien !'
            },
            {
                message: 'J\'adore les cours qu\'on nous donne !'
            },
            {
                message: 'Voici le checkpoint 2 !'
            },
            {
                message: 'Bravo Philippe, ton JS est très bien !'
            }
        ];

        $scope.addChat = function() {
            $scope.chatList.push({
                message: $scope.message
            });
            $scope.message = "";
        };
    });
