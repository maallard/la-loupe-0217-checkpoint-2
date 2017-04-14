angular.module('app')
    .service('ChatService', function($http) {
        return {
            create:function (commentaire) {
              return $http.post('/chat', commentaire);

            }
          };
        }
    );
