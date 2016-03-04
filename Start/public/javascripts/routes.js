writingApp.config(function($routeProvider){


  $routeProvider

  .when('/',{
    templateUrl: '/pages/home.html',
    controller: 'homeController'

  })

  .when('/example1',{
    templateUrl: '/pages/example1.html',
    controller: 'homeController'
  })


  .when('/twitterprompt',{
    templateUrl: '/pages/twitterprompt.html',
    controller: 'twitterController'

  })

  .when('/tumblrprompt', {
    templateUrl: '/pages/tumblrprompt.html',
    controller: 'quoteController'
  })

  .when('/posts', {
    templateUrl: '/pages/posts.html',
    controller: 'postController'
  })

  .when('/login', {
    templateUrl: '/pages/login.html',
    controller: 'authController'
  })

  .when('/signup', {
    templateUrl: '/pages/signup.html',
    controller: 'authController'
  })


});
