define('clone', ['crafty','box2d'],

function(Crafty) {
  'use strict';

  Crafty.c('Clone', {
    init: function() {
      this.addComponent('2D, Canvas, Color, Box2D');

      this.color('#000');
      this.attr({ x: 400, y: 500, w: 32, h: 32 });

      this.box2d({ bodyType: 'dynamic'
                 , density: 3
                 , friction: 1
                 , rotation: false
                 });
    }
  });
});
