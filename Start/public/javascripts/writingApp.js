

var writingApp = angular.module ('writingApp', ['ngRoute', 'ngResource']).run(function($http, $rootScope){
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function(){
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});



