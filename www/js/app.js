// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

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

  .state('tab.map', {
    url: '/map',
    templateUrl: 'templates/tab-map.html',
    controller: 'mapController'
  })

  //tabs
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.listing', {
    url: '/listing',
    views: {
      'tab-listing': {
        templateUrl: 'templates/tab-listing.html',
        controller: 'ListingCtrl as Ctrl'
      }
    }
  })

  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl as Ctrl'
      }
    }
  })

  .state('tab.orders', {
    url: '/orders',
    views: {
      'tab-orders': {
        templateUrl: 'templates/tab-orders.html',
        controller: 'OrdersCtrl as Ctrl'
      }
    }
  })

  .state('tab.chat', {
    url: '/chat',
    views: {
      'tab-chat': {
        templateUrl: 'templates/tab-chat.html',
        controller: 'ChatCtrl as Ctrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl as Ctrl'
      }
    }
  })

  .state('cookProfile', {
    url: '/cookprofile/:cookID',
    templateUrl: 'templates/cookprofile.html',
    controller: 'CookProfileCtrl as Ctrl'
  })

  $urlRouterProvider.otherwise('/tab/listing');
});
