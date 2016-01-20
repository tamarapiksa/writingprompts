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
    tagService.tag = $scope.tag;

  });

}]);


writingApp.controller('twitterController', ['$scope', '$resource', 'tagService', function($scope, $resource, tagService){

  $scope.tag = tagService.tag;

  $scope.tumblrAPI = 
  $resource("http://api.tumblr.com/v2/tagged?&api_key=", {
    callback: "JSON_CALLBACK"}, { get: {method: "JSONP"}});

  $scope.tumblrResult = $scope.tumblrAPI.get({ tag: $scope.tag, limit: 1});
  

  console.log($scope.tumblrResult);


}]);




writingApp.controller('tumblrController', ['$scope', function($scope){

}]);




