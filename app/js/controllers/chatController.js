angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService,ChatService,LocalService) {
      var  userId= CurrentUser.user()._id;
      var  pseudo = CurrentUser.user().pseudo;

        $scope.chatArea = null;
        $scope.texts = JSON.parse(LocalService.get('tchats') || "[]");
        $scope.alert = true;

        $scope.chatSend = function(){
          if ($scope.chatArea === null || $scope.chatArea.trim().length === 0) {
            $scope.alert = false;

          }else{
            $scope.alert = true;
            ChatService.create(pseudo,$scope.chatArea).then(function(res){
              ChatService.getAll().then(function(res){
                $scope.texts = res.data;
                $scope.chatArea = null;
                LocalService.set('tchats',JSON.stringify(res.data));

              });
            });
          }


        };
        $scope.like = function(id){
          ChatService.update(id,userId).then(function(res){
            ChatService.getAll().then(function(res){
              $scope.texts = res.data;
              LocalService.set('tchats',JSON.stringify(res.data));

            });

          });
        };
    });
