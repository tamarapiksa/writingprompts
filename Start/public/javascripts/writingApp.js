

<<<<<<< HEAD
var writingApp = angular.module ('writingApp', ['ngRoute', 'ngResource', 'ngCookies']).run(function($http, $rootScope, $location, $cookies){
  
  $rootScope.$on('$routeChangeStart', function(event, next, current){
    var user = JSON.parse($cookies.get('user'))
    if (user === null){
      if (next.templateUrl === 'views/auth/login.html'){
      } else {
        $location.path('/login')
      }
    } else {
      $rootScope.authenticated = true;
      $rootScope.current_user = user
    }
  })

=======
var writingApp = angular.module ('writingApp', ['ngRoute', 'ngResource']).run(function($http, $rootScope){
>>>>>>> 0f65837ebbc6832827e95d035f520c0969690d65
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function(){
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});



