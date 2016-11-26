'use strict';

angular.module('starter.controllers')

  .service('cookService', function() {
    this.dishes = {
      'firstCook': {
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
      }
    }
  })
