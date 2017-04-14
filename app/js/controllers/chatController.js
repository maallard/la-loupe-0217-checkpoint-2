angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, MessagesService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            $scope.pseudo = res.data.pseudo;
            console.log($scope.user);

// MessagesService.getAll().then(function(res) {
//   $scope.comments = res.data.message;
// };

            $scope.newMessages = [];
            $scope.allComments = {
              writer: $scope.pseudo,
              comments: $scope.comments
            };
            $scope.error = true;

            $scope.newMessage = '';
            $scope.addNewMessage = function() {

                if ($scope.newMessage !== "") {


                    console.log($scope.pseudo);
                    var postmsg = {
                        pseudo: $scope.pseudo,
                        message: $scope.newMessage
                    };
                    $scope.newMessages.push(postmsg);
                    $scope.newMessage = '';

                    MessagesService.create(postmsg).then(function(res) {

                    }, function(err) {});
                    $scope.error =true;
                }
                else{

                $scope.error = false;
              }
            };
        });


    });
