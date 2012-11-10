define('mainclone', ['crafty','box2d','box2dtwoway','camera'],

function(Crafty, b2) {
  'use strict';

  Crafty.c('MainClone', {
    init: function() {
      this.addComponent('2D, Canvas, Color, Camera, Box2D, b2Twoway');

      this.color('#000');
      this.attr({ x: 400, y: 500, w: 32, h: 32 });

      this.box2d({ bodyType: 'dynamic'
                 , density: 3
                 , friction: 1
                 , rotation: false
                 });
      this.twoway(10, 10);
    }
  });
});
