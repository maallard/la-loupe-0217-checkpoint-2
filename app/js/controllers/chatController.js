angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, MessageService) {
        // Variables
        $scope.user = CurrentUser.user();
        $scope.messages = [];
        $scope.newestToOldest = true;
        $scope.newChatMessage = "";

        // Called on page load
        clearFields();
        refreshFeed();

        // Public functions
        $scope.sendMessage = function(content) {
            var message = {
                content: content,
                author: $scope.user._id
            };

            MessageService.send(message).then(function(res){
                console.log("Successfuly sent message at", res.data.creation_date);
                clearFields();
                refreshFeed();
            }, function(err) {
                console.error('Error sending message');
            });
        };

        // Private functions
        function clearFields() {
            $scope.newChatMessage = "";
        }

        function refreshFeed() {
            MessageService.getAll().then(function(res){
                $scope.messages = res.data.messages;
                console.log("Successfuly refreshed feed at", (new Date()).toLocaleTimeString());
            }, function(err) {
                console.error('Error refreshing feed');
            });
        }
    });
