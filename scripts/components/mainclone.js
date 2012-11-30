define('mainclone', ['crafty','box2d','box2dtwoway','camera','clone'],

function(Crafty, b2) {
  'use strict';

  Crafty.c('MainClone', {
    init: function() {
      this.addComponent('Clone, Camera, b2Twoway');

      this.twoway(10, 10);
    }
  });
});
