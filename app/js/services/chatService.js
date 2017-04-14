angular.module('app')
    .service('ChatService', function($http) {
        return {
            create: function(pseudo,text){
              return $http.post('/tchats',{pseudo: pseudo, text: text});
            },
            getAll: function() {
                return $http.get('/tchats');
            },
            getOne: function(id) {
                return $http.get('/tchats/' + id);
            },
            update: function(id, userId) {
                return $http.put('/tchats/' + id, {user:userId});
            },
            delete: function(id) {
                return $http.delete('/tchats/' + id);
            }
        };
    });
