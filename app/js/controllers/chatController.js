angular.module('app')
    .controller('ChatController', function($scope, $interval, CurrentUser, MessageService) {
        // Variables
        $scope.user = CurrentUser.user();
        $scope.messages = [];
        $scope.newestToOldest = true;
        $scope.newChatMessage = "";

        // Called on page load
        clearFields();
        refreshFeed();
        $interval(refreshFeed, 2000);

        // Public functions
        $scope.sendMessage = function(content) {
            var message = {
                content: content,
                author: $scope.user._id
            };

            MessageService.send(message).then(function(res) {
                console.log("Successfuly sent message at", res.data.creation_date);
                clearFields();
                refreshFeed();
            }, function(err) {
                console.error('Error sending message');
            });
        };

        $scope.toggleLike = function(message) {
            var liked = !message.likes.includes($scope.user._id);
            var liker = $scope.user._id;
            MessageService.like(message._id, liked, liker).then(function(res) {
                if (liked) {
                    message.likes.push({'_id':$scope.user._id});
                } else {
                    var index = indexOfLiker(messages.likes, '_id', $scope.user._id);
                    message.likes.splice(index, 1);
                }
                console.log(`Successfully ${liked ? 'liked' : 'disliked'} message`);
            }, function(err) {
                console.error(`Error ${liked ? 'liking' : 'disliking'} message ${message._id}`);
            });
        };

        $scope.isCurrentUser = function(user) {
            return user._id === $scope.user._id;
        };

        // Private functions
        function clearFields() {
            $scope.newChatMessage = "";
        }

        function refreshFeed() {
            MessageService.getAll().then(function(res) {
                $scope.messages = res.data.messages;
                console.log("Successfuly refreshed feed at", (new Date()).toLocaleTimeString(), "||>", res.data);
            }, function(err) {
                console.error('Error refreshing feed');
            });
        }

        function indexOfLiker(array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    return i;
                }
            }
            return -1;
        }
    });
