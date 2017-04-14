angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, MessageService) {
        $scope.user = CurrentUser.user();
        $scope.messages = [];

        $scope.sendMessage = function(content) {
            var message = {
                content: content,
                author: $scope.user._id
            };

            MessageService.send(message).then(function(res){
                console.log("Successfuly sent message at", res.data.creation_date);
                refreshFeed();
            }, function(err) {
                console.error('Error sending message');
            });
        };

        function refreshFeed() {
            MessageService.getAll().then(function(res){
                $scope.messages = res.data.messages;
                console.log("Successfuly refreshed feed at", (new Date()).toLocaleTimeString());
            }, function(err) {
                console.error('Error refreshing feed');
            });
        }
        refreshFeed();
    });
