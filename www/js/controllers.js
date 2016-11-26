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

  .controller('cookProfileController', function(cookService) {
    var ctrl = this;
    ctrl.dishes = angular.copy(cookService.dishes.firstCook);

    ctrl.addPortion = function addPortion(dishID) {
      ctrl.dishes[dishID].orderQuantity ? ctrl.dishes[dishID].orderQuantity +=1 : ctrl.dishes[dishID].orderQuantity = 1;
    };

    ctrl.removePortion = function removePortion(dishID) {
      ctrl.dishes[dishID].orderQuantity > 0 ? ctrl.dishes[dishID].orderQuantity -= 1 : ctrl.dishes[dishID].orderQuantity = 0;
    };
  });
