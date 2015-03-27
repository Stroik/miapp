angular.module('muniapp', ['ionic', 'muniapp.controllers', 'muniapp.services', 'ngStorage'])

.run(function($ionicPlatform) {
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

  .state('app.telefonos', {
    url: '/telefonos',
    views: {
      'app-telefonos': {
        templateUrl: 'templates/tab-account.html',
        controller: 'TelefonosCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');

});
