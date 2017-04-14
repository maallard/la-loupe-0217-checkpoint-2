angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.messages = [];

        $scope.pseudoChosen = function(){
          $scope.pseudo = true;
        };
        $scope.add = function(){
          ChatService.create($scope.message, userId);
          ChatService.getAll().then(function(res){
              $scope.messages = res.data;
            });
            $scope.message = '';
        };
    });
