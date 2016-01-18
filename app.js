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

writingApp.service('tagService', function(){

    this.tag = '';
});




writingApp.controller('homeController', ['$scope', 'tagService', function($scope, tagService){

  $scope.tag = tagService.tag;

  $scope.$watch('tag', function(){
    keywordService.tag = $scope.tag;

  });

}]);


writingApp.controller('twitterController', ['$scope', '$resource', 'tagService', function($scope, $resource, tagService){

  $scope.tag = tagService.tag;

  $scope.tumblrAPI =
  $resource("https://api.tumblr.com/v2/blog/pitchersandpoets.tumblr.com/posts/photo?tag=new+york+yankees", {
  callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});

  $scope.tumblrResult = $scope.tumblrAPI.get({ q: $scope.photo, cnt: 1});

  console.log($scope.tumblrResult);


}]);




writingApp.controller('tumblrController', ['$scope', function($scope){

}]);




