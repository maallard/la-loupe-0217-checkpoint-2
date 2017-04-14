angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, ChatService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.commentaireInput = '';
        $scope.userInput = '';
        $scope.chat = [];


        $scope.refresh = function() {
                  ChatService.getAll().then(function(res){
                    $scope.chat = res.data.chatRenvoyé;
                  }, function(err) {
                    console.error('erreur au chargement du chat');
                  });
                  // UserService.getOne().then(function(res){
                  //   $scope.chat = res.data.chatRenvoyé;
                  // }, function(err) {
                  //   console.error('erreur au chargement du chat');
                  // });
                }
                $scope.refresh();




        // AJOUTER
        $scope.ajouterCommentaire = function() {

          var userPost = {
            commentaire : $scope.commentaireInput,
            user : $scope.userInput,
          };



          ChatService.create(userPost).then(function(res){
                        $scope.chat.push(userPost)
                        $scope.chat = $scope.chat.reverse()
                         // .slice().reverse() permet de mettre le tableau dans l'ordre inverse
                        console.log('donné push');
                      }, function(err) {
                        console.error('Donné non push');
                      });


            $scope.commentaireInput = '';
            $scope.userInput = '';
        };


    });
