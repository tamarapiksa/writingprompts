var writingApp = angular.module ('writingApp', ['ngRoute', 'ngResource']);


writingApp.config(function($routeProvider){


  $routeProvider

  .when('/',{
    templateURL: 'pages/home.html',
    controller: 'homeController'

  })

  .when('/twitterprompt',{
    templateURL: '/pages/twitterprompt.html',
    controller: 'twitterController'

  })

  .when('/tumblrprompt', {
    tempplateURL: '/pages/tumblrprompt.html',
    controller: 'tumblrController'
  })


});


writingApp.controller('homeController', ['$scope', function($scope){

}]);

writingApp.controller('twitterController', ['$scope', function($scope){

}]);

writingApp.controller('tumblrController', ['$scope', function($scope){

}]);

