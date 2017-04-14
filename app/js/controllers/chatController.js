angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, MessagesService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

            $scope.newMessages=[];

            $scope.newMessage='';
            $scope.addNewMessage= function () {
              var postmsg = {
                userspseudo: "clem",
                message: $scope.newMessage
              };
              $scope.newMessages.push(postmsg);
              $scope.newMessage='';

              MessagesService.create(postms).then(function(res) {

                            }, function(err) {});

            };
        });
    });
