


writingApp.factory('postService', function($resource){
    return $resource('/api/posts/:id');
  });



writingApp.controller('homeController', ['$scope', '$location', 'tagService', 'quoteService', 'postService', '$rootScope', function($scope, $location, tagService, quoteService, postService, $rootScope){

  
  $scope.tag = tagService.tag;

  $scope.$watch('tag', function(){
    tagService.tag = $scope.tag;

  });

  $scope.submit = function(){
    $location.path("/twitterprompt");

  };

  $scope.quote = quoteService.quote;

  $scope.$watch('quote', function(){
    quoteService.quote = $scope.quote;
  });

}]);


writingApp.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {username:'', password:''};
  $scope.error_message = '';

  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/posts');
      }
      else{
        $scope.error_message = data.message;
      }
    })
    $scope.error_message = 'login request for' + ' ' + $scope.user.username;
  };

  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/posts');
      }
      else{
        $scope.error_message = data.message;
      }
    })
    $scope.error_message = 'registration request for ' + ' ' + $scope.user.username;
  };
});





writingApp.controller('postController', ['$scope', 'postService', '$rootScope', function($scope, postService, $rootScope){
  $scope.posts = [];
  $scope.newPost = {created_by:'', text:'', created_at:''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };

}]);






writingApp.controller('twitterController', ['$scope', '$resource', 'tagService', function($scope, $resource, tagService){

  $scope.tag = tagService.tag;

  $scope.tumblrAPI = 
  $resource("http://api.tumblr.com/v2/tagged?&api_key=eSpPMTu19KwTIx3w0zEaLrxVodY2Q607HrT1HHXxTGcPGx3tgw", {
    callback: "JSON_CALLBACK"}, { get: {method: "JSONP"}});

  $scope.tumblrResult = $scope.tumblrAPI.get({ tag: $scope.tag, limit: 1});
  

  console.log($scope.tumblrResult);


}]);







writingApp.controller('quoteController', ['$scope', '$resource', 'quoteService', function($scope, $resource, quoteService){

  $scope.quote = quoteService.quote;

  $scope.quoteAPI = 
  $resource("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=text&text=?", { get: {method: "text"}});
  
  $scope.quoteResult = $scope.quoteAPI.get({ quote: $scope.quote});

  console.log($scope.quoteResult);

}]);











