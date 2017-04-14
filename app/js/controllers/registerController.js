angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth, UserService) {
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('anon.login');
            });
        };
    });
