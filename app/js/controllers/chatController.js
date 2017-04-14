angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService, MsgService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });


        $scope.addMsg = function () {
          console.log($scope.newMsg);
          $scope.newMsg.author = CurrentUser.user()._id;
          console.log('user', $scope.newMsg.author);
        MsgService.create($scope.newMsg).then(function(res) {
          console.log('res', res);
          $scope.newMsg.content = '';
          loadmsgs();
        });
        };
        function loadmsgs() {
            MsgService.getAll().then(function(res) {
                console.log('listMsgs', res);
                $scope.msgsList = res.data;
                console.log('res2', res.data);
            });
        }
        loadmsgs();
    });
