angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, MessagesService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

            $scope.newMessages=[];


        //     UserService.getOne(CurrentUser.pseudo()._id).then(function(res) {
        //   $scope.pseudo = res.data;
        // });

            $scope.newMessage='';
            $scope.addNewMessage= function () {
              var postmsg = {
                pseudo: $scope.pseudo,
                message: $scope.newMessage
              };
              $scope.newMessages.push(postmsg);
              $scope.newMessage='';

              MessagesService.create(postmsg).then(function(res) {

                            }, function(err) {});

            };
        });
    });
