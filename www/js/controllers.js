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
      this.dishes = cookService.dishes.firstCook;
  });
