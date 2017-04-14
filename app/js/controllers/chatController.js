angular.module('app')
    .controller('ChatController', function($scope, CurrentUser) {
        $scope.user = CurrentUser.user();
    });
