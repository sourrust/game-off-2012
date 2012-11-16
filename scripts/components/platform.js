define('platform', ['crafty','box2d'],

function(Crafty) {
  'use strict';

  Crafty.c('Platform', {
    init: function() {
      this.addComponent('2D, Canvas, Color, Box2D');
    },

    platform: function(attr, color) {
      this.attr(attr);
      this.color(color);

      this.box2d({ bodyType: 'solid' });

      return this;
    }
  });
});
