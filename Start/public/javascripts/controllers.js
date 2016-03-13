


<<<<<<< HEAD
<<<<<<< HEAD


writingApp.controller('homeController', ['$scope', '$location', 'tagService', 'quoteService', '$rootScope', function($scope, $location, tagService, quoteService, $rootScope){
=======
writingApp.factory('postService', function($resource){
    return $resource('/api/posts/:id');
  });



writingApp.controller('homeController', ['$scope', '$location', 'tagService', 'quoteService', 'postService', '$rootScope', function($scope, $location, tagService, quoteService, postService, $rootScope){
>>>>>>> 0f65837ebbc6832827e95d035f520c0969690d65
=======


writingApp.controller('homeController', ['$scope', '$location', 'tagService', 'quoteService', '$rootScope', function($scope, $location, tagService, quoteService, $rootScope){
>>>>>>> 2aa2e6383c252c9feee8f79d4c9d188d829976b8



  
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


<<<<<<< HEAD
<<<<<<< HEAD
writingApp.controller('authController', function($scope, $http, $rootScope, $location, $cookies){
  $scope.user = {username:'', password:''};
  $scope.error_message = '';

 


  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $cookies.put('user', JSON.stringify(data.user))
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user;
=======
writingApp.controller('authController', function($scope, $http, $rootScope, $location){
=======
writingApp.controller('authController', function($scope, $http, $rootScope, $location, $cookies){
>>>>>>> 2aa2e6383c252c9feee8f79d4c9d188d829976b8
  $scope.user = {username:'', password:''};
  $scope.error_message = '';

 


  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $cookies.put('user', JSON.stringify(data.user))
        $rootScope.authenticated = true;
<<<<<<< HEAD
        $rootScope.current_user = data.user.username;
>>>>>>> 0f65837ebbc6832827e95d035f520c0969690d65
=======
        $rootScope.current_user = data.user;
>>>>>>> 2aa2e6383c252c9feee8f79d4c9d188d829976b8
        $location.path('/example2');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };

  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/example2');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };
});











writingApp.controller('twitterController', ['$scope', '$resource', 'tagService', function($scope, $resource, tagService){

  $scope.tag = tagService.tag;

  $scope.tumblrAPI = 
  $resource("http://api.tumblr.com/v2/tagged?&api_key=XXXXXXXX", {
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


<<<<<<< HEAD
<<<<<<< HEAD
writingApp.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

writingApp.controller('postController', function($scope, $rootScope, $location, postService, $http) {

   $scope.posts = postService.query();
   $scope.newPost = {created_by: '', text: '', created_at: ''};
  
  $scope.post = function() {
    $scope.newPost.created_by = $rootScope.current_user;
    $scope.newPost.created_at = Date.now();
    postService.save($scope.newPost, function(){
      $scope.posts = postService.query();
      $scope.newPost = {created_by: '', text: '', created_at: ''};
    });
  };


=======

writingApp.factory('postService', function($resource) {
=======
writingApp.factory('postService', function($resource){
>>>>>>> 2aa2e6383c252c9feee8f79d4c9d188d829976b8
  return $resource('/api/posts/:id');
});

writingApp.controller('postController', function($scope, $rootScope, $location, postService, $http) {

   $scope.posts = postService.query();
   $scope.newPost = {created_by: '', text: '', created_at: ''};
  
  $scope.post = function() {
    $scope.newPost.created_by = $rootScope.current_user;
    $scope.newPost.created_at = Date.now();
    postService.save($scope.newPost, function(){
      $scope.posts = postService.query();
      $scope.newPost = {created_by: '', text: '', created_at: ''};
    });
<<<<<<< HEAD
  }
>>>>>>> 0f65837ebbc6832827e95d035f520c0969690d65
=======
  };


>>>>>>> 2aa2e6383c252c9feee8f79d4c9d188d829976b8

});