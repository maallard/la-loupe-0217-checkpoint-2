angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, PostService) {
        $scope.post = {};
        $scope.user = {};
        var id = CurrentUser.user()._id;
        UserService.getOne(id).then(function(res) {
            $scope.user = res.data;
        });

        PostService.getAll().then(function(res) {
            $scope.allPosts = res.data;
            console.log($scope.allPosts);
        });

        $scope.createPost = function() {
            $scope.post.user = $scope.user.name;
            $scope.post.post = $scope.newPost;
            PostService.create($scope.post);
            PostService.getAll().then(function(res) {
                $scope.allPosts = res.data;
            });
            $scope.newPost = "";
        };
    });
