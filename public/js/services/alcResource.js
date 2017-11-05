angular.module('alcService', [])

    .factory('Users', ['$http', function($http){
        return{
            get: function(){
                return $http.get('/user');
            },
           create: function(userData){
                return $http.get('/user', userData);
            },
            delete : function(id){
                return $http.delete('user' + id);
            }
            

        }
    }]);