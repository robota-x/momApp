'use strict';

angular.module('starter.controllers', [])

  .controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function(error){
      console.log("Could not get location");
    });
  })

  .controller('ListingCtrl', function(cookService){
    this.data = angular.copy(cookService.data);
  })

  .controller('CookProfileCtrl', function($stateParams, cookService, orderService, $location) {
    var Ctrl = this;
    Ctrl.data = angular.copy(cookService.data[$stateParams.cookID]);

    Ctrl.currentOrder = cookService.newOrder($stateParams.cookID);

    Ctrl.addPortion = function addPortion(dishID) {
      console.log('add', dishID)
      Ctrl.currentOrder[dishID].quantity += 1;
    };

    Ctrl.removePortion = function removePortion(dishID) {
      console.log('rmv')
      Ctrl.currentOrder[dishID].quantity = 0 ? null : Ctrl.currentOrder[dishID].quantity -= 1;
    }

    Ctrl.isOrderNonNull = function() {
      for (var dish in Ctrl.currentOrder) {
        if (Ctrl.currentOrder[dish].quantity) {
          return true;
        }
      }
      return false;
    }

    Ctrl.orderTotal = function() {
      return Object.keys(Ctrl.currentOrder).reduce(function(acc, key) {
        return Ctrl.currentOrder[key].quantity * Ctrl.currentOrder[key].price + acc;
      }, 0);
    };

    Ctrl.confirmOrder = function() {
      Ctrl.currentOrder.totalCost = Ctrl.orderTotal();
      orderService.confirmedOrders.push(Ctrl.currentOrder);
      Ctrl.currentOrder = cookService.newOrder($stateParams.cookID);
      Ctrl.orderCompleted = true;
      sessionStorage.setItem('orders', JSON.stringify(orderService.confirmedOrders));
    };

    Ctrl.goToOrders = function() {
      $location.path('tab/orders');
    };

  })

  .controller('OrdersCtrl', function(orderService){
    var Ctrl = this;
    Ctrl.orders = orderService.confirmedOrders;
    console.log('in order', orderService);
  })

  .controller('ProfileCtrl', function(userSettings){
    var Ctrl = this;
    Ctrl.options = angular.copy(userSettings.settings);

    Ctrl.saveProfile = function() {
      userSettings.saveSetting(Ctrl.options);
    }

    Ctrl.profileChanges = function() {
      return !angular.equals(Ctrl.options, userSettings.settings);
    }
  })

  .controller('MoreCtrl', function(){})
  .controller('ChatCtrl', function(){});
