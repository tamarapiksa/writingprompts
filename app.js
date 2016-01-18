var writingApp = angular.module ('writingApp', ['ngRoute', 'ngResource']);


writingApp.config(function($routeProvider){


  $routeProvider

  .when('/',{
    templateUrl: '/pages/home.html',
    controller: 'homeController'

  })

  .when('/twitterprompt',{
    templateUrl: '/pages/twitterprompt.html',
    controller: 'twitterController'

  })

  .when('/tumblrprompt', {
    tempplateUrl: '/pages/tumblrprompt.html',
    controller: 'tumblrController'
  })


});

writingApp.service('keywordService', function(){

    this.keyword = '';
});


writingApp.controller('homeController', ['$scope', 'keywordService', function($scope, keywordService){

  $scope.keyword = keywordService.keyword;

  $scope.$watch('keyword', function(){
    keywordService.keyword = $scope.keyword;

  });

}]);

writingApp.controller('twitterController', ['$scope', 'keywordService', function($scope, keywordService){

  $scope.keyword = keywordService.keyword; 

}]);

writingApp.controller('tumblrController', ['$scope', function($scope){

}]);


