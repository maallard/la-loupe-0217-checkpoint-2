angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        console.log($scope.user);
        UserService.getAll().then(function(res) {
            $scope.allUsers = res.data;
        });


        $scope.newPost = '';

        $scope.createPost = function() {
            $scope.user.userPost.push($scope.newPost);
            $scope.newPost = "";

        };
        $scope.update = function() {
            UserService.update($scope.user._id, $scope.user);
            UserService.getAll().then(function(res) {
                $scope.allUsers = res.data;
            });
            function Ctrl($scope) {
                $scope.user.creationDate = new Date();
            }
        };

        console.log($scope.allUsers);

    });
