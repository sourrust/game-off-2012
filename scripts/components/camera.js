define('camera', ['crafty'],

function(Crafty) {
  'use strict';

  Crafty.c('Camera', {
    init: function() {
      Crafty.viewport.follow(this, 0, 0);
    }
  });
});
