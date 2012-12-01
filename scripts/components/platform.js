define('platform', ['crafty','box2d'],

function(Crafty) {
  'use strict';

  Crafty.c('Platform', {
    init: function() {
      this.addComponent('2D, Canvas, Color, Box2D');
    },

    platform: function(attr, opt) {
      if(!opt.bodyType) opt.bodyType = 'solid';

      this.attr(attr);
      this.color(opt.color);

      this.box2d({ bodyType: opt.bodyType });

      return this;
    }
  });
});
