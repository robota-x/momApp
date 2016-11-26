'use strict';

angular.module('starter.controllers', [])

  .controller('mapController', function($scope) {
    var map;
    $scope.initMap = function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
  })

  // .controller('cookProfileController', function(cookService) {
  //   var ctrl = this;
  //   ctrl.dishes = angular.copy(cookService.dishes.firstCook);
  //
  //   ctrl.addPortion = function addPortion(dishID) {
  //     ctrl.dishes[dishID].orderQuantity ? ctrl.dishes[dishID].orderQuantity +=1 : ctrl.dishes[dishID].orderQuantity = 1;
  //   };
  //
  //   ctrl.removePortion = function removePortion(dishID) {
  //     ctrl.dishes[dishID].orderQuantity > 0 ? ctrl.dishes[dishID].orderQuantity -= 1 : ctrl.dishes[dishID].orderQuantity = 0;
  //   };
  // })

  .controller('ListingCtrl', function(cookService){
    this.data = angular.copy(cookService.data);
  })

  .controller('CookProfileCtrl', function($stateParams, cookService) {
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
    }

  })

  .controller('MoreCtrl', function(){})
  .controller('OrdersCtrl', function(){})
  .controller('ChatCtrl', function(){})
  .controller('ProfileCtrl', function(){});
