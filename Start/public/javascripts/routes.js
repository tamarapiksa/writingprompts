writingApp.config(function($routeProvider){


  $routeProvider

  .when('/',{
    templateUrl: '/pages/home.html',
    controller: 'homeController'

  })

  .when('/example1',{
    templateUrl: '/pages/example1.html',
    controller: 'postController'
  })


  .when('/example2',{
    templateUrl: '/pages/example2.html',
    controller: 'postController'
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

  .when('/feed', {
    templateUrl: '/pages/feed.html',
    controller: 'postController'
  })

  .when('/about', {
    templateUrl: '/pages/about.html',
    controller: 'homeController'
  })


});
