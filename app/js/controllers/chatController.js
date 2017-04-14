angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, MessageService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.commentaires = [];
              $scope.addCommentaire = function() {
                  let commentaire = {
                      comment: $scope.comment,
                      user: $scope.user,
                      sujet: $scope.sujet,
                  };
                  MessageService.create(commentaire).then(function(res) {
                      // Quand la requete c'est bien passé
                      $scope.commentaires.push(commentaire);
                      $scope.comment = '';
                      $scope.user = '';
                      $scope.sujet = '';
                      console.log(res.data);
                  }, function(err) {
                      // Quand la requete ce passe mal
                  });
              };
              MessageService.getAll().then(function(res) {
                  $scope.commentaires = res.data;
              });
              $scope.delete = function(index, commentaire) {
                  MessageService.delete(commentaire._id).then(function(res) {
                      console.log("Delete success");
                      MessageService.getAll().then(function(res) {
                          $scope.commentaires = res.data;
                      });
                  }, function(err) {
                      console.log("Delete failed");
                  });
              };
              $scope.update = function(index, comment) {
                  MessageService.update($scope.commentaires[index]._id, comment).then(function(res) {
                      console.log("Edit success");
                    }), function(err) {
                      console.log("Edit failed");
                };
              }
    });
