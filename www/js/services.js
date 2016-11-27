'use strict';

angular.module('starter.controllers')

  .service('userSettings', function() {
    var options = this;
    options.defaultSettings = {
      delivery: 'pickup',
      payment: 'beforeDelivery',
      address: {}
    }
    var storedSettings = sessionStorage.getItem('userSettings');
    options.loadSettings = function() {
      options.settings =  storedSettings ? JSON.parse(storedSettings) : angular.copy(options.defaultSettings);
    }

    options.saveSetting = function(newSettings) {
      options.settings = angular.copy(newSettings);
      sessionStorage.setItem('userSettings', JSON.stringify(options.settings));
      console.log('saved settings');
    }

    options.loadSettings();
  })

  .service('orderService', function() {
    this.confirmedOrders = sessionStorage.getItem('orders') ? JSON.parse(sessionStorage.getItem('orders')) : [];  // ask our server. in a distant future.
    // console.log('ini order', sessionStorage.getItem('orders'))

  })

  .service('cookService', function() {

    this.newOrder = function(cookID) {
      var blankOrder =  angular.copy(this.data[cookID].offering);
      for (var dish in blankOrder) {
        blankOrder[dish].quantity = 0;
      }
      return blankOrder;
    };

    this.data = {
      '0': {
        offering: {
        '0': {
            name: 'Spaghetti with meatballs',
            description: 'sample description',
            imageSrc: 'https://marvelapp-live.storage.googleapis.com/canvas/2016/11/c917926bcff94cdab7b87552741ac18b.jpg',
            price: 9.45,
            date: 'Mon 28th Nov'
          },
        '1': {
            name: 'Risotto',
            description: 'sample description',
            imageSrc: 'https://marvelapp-live.storage.googleapis.com/canvas/2016/11/d544e56f3e3b48fca0240cca37a1f499.jpg',
            price: 12.33,
            date: 'Tue 29th Nov'
          },
        },
        name: 'Mom number 1',
        address: '6a brick lane e1 6rf',
        rating: '4.6/5.0',
        speciality: 'Thai Food',
        profileImg: '/img/mom1.jpeg',
        pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      '1': {
        offering: {
        '0': {
            name: 'Spaghetti with meatballs',
            description: 'sample description',
            imageSrc: 'https://marvelapp-live.storage.googleapis.com/canvas/2016/11/c917926bcff94cdab7b87552741ac18b.jpg',
            price: 9.45,
            date: 'Mon 28th Nov'
          },
        '1': {
            name: 'Risotto',
            description: 'sample description',
            imageSrc: 'https://marvelapp-live.storage.googleapis.com/canvas/2016/11/d544e56f3e3b48fca0240cca37a1f499.jpg',
            price: 12.33,
            date: 'Tue 29th Nov'
          },
        },
        name: 'Mom number 2',
        address: '12 Bache\'s street n1',
        rating: '3.3/5.0',
        speciality: 'Italian Food',
        profileImg: '/img/mom2.jpeg',
        pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    }
  })
