
angular.module('app')
    .service('commentService', function($http) {
        return {
            create: function (Comments) {
                return $http.post('/chat', commentAdd);
            },
                };
    });
