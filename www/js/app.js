angular.module('muniapp', ['ionic', 'muniapp.controllers', 'muniapp.services', 'ngStorage', 'ngLodash','ionic-material'])

.run(function($ionicPlatform, $rootScope, $ionicLoading, $location, $timeout, $localStorage, Posts) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    $rootScope.init = function(){
      Posts.all().then(function(data){
        $rootScope.$storage = $localStorage;
        $localStorage.posts = data.posts;
      });
      Posts.getTramites().then(function(data){
        $localStorage.tramites = data.posts;
      });
    };

    $rootScope.init();

  })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  // Each tab has its own nav history stack:

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'app-inicio': {
        templateUrl: 'templates/app-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

  .state('app.tramites', {
    url: '/tramites',
    views: {
      'app-tramites': {
        templateUrl: 'templates/app-tramites.html',
        controller: 'TramitesCtrl'
      }
    }
  })
  .state('app.tramite', {
    url: '/tramites/:postSlug',
    views: {
      'app-tramites': {
        templateUrl: 'templates/app-tramite-detail.html',
        controller: 'TramiteDetailCtrl'
      }
    }
  })

  .state('app.posts', {
      url: '/posts',
      views: {
        'app-posts': {
          templateUrl: 'templates/app-posts.html',
          controller: 'PostsCtrl'
        }
      }
    })
    .state('app.post-detail', {
      url: '/posts/:postSlug',
      views: {
        'app-posts': {
          templateUrl: 'templates/post-detail.html',
          controller: 'PostDetailCtrl'
        }
      }
    })
    .state('app.post-comment', {
      url: '/posts/:postSlug/comments',
      views: {
        'app-posts': {
          templateUrl: 'templates/post-comment.html',
          controller: 'CommentCtrl'
        }
      }
    })
  .state('app.telefonos', {
    url: '/telefonos',
    views: {
      'app-telefonos': {
        templateUrl: 'templates/app-telefonos.html',
        controller: 'TelefonosCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');

});
