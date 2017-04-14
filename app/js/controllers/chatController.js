angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.commentaireInput = '';
        $scope.userInput = '';
        $scope.chat = [];

        // AJOUTER
        $scope.ajouterCommentaire = function() {

          var userPost = {
            commentaire : $scope.commentaireInput,
            user : $scope.userInput,

          };

            $scope.chat.push(userPost)

            $scope.commentaireInput = '';
            $scope.userInput = '';
        };


        $scope.verification = function() {
                    console.log($scope.chat);
                  };
    });
