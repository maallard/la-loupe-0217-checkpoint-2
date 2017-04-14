angular.module('app')
    .controller('MessageController', function($scope, MessageService) {
      $scope.messages = [];
      $scope.addMessage = function() {
          MessageService.create(message).then(function(res) {
              // Quand la requete c'est bien passé
              $scope.messages.push(message);
              $scope.message = '';
              // $scope.profil = '';
              // $scope.date = '';
              console.log(res.data);
          }, function(err) {
              console.log('erreur ajout');
          });
      };
      MessageService.getAll().then(function(res) {
          $scope.messages = res.data;
      })
      // $scope.delete = function(index, message) {
      //     MessageService.delete(message._id).then(function(res) {
      //         console.log("Delete success");
      //         MessageService.getAll().then(function(res) {
      //             $scope.messages = res.data;
      //         });
      //     }, function(err) {
      //         console.log("Delete failed");
      //     });
      // };
      // $scope.update = function(index, message) {
      //     MessageService.update($scope.messages[index]._id, message).then(function(res) {
      //         console.log("Edit success");
      //       }), function(err) {
      //         console.log("Edit failed");
      //   };
      // }
  });
