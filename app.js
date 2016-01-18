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


writingApp.controller('twitterController', ['$scope', '$resource', 'keywordService', function($scope, $resource, keywordService){

  $scope.keyword = keywordService.keyword;

  $scope.tumblrAPI =
  $resource("https://api.tumblr.com/v2/blog/pitchersandpoets.tumblr.com/posts/photo?tag=new+york+yankees", {
  callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});

  $scope.tumblrResult = $scope.tumblrAPI.get({ q: $scope.photo, cnt: 1});

  console.log($scope.tumblrResult);


}]);




writingApp.controller('tumblrController', ['$scope', function($scope){

}]);




