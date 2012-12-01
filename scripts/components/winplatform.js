define('winplatform', ['crafty','platform'],

function(Crafty) {
  'use strict';

  Crafty.c('WinPlatform', {
    init: function() {
      this.addComponent('Platform');
    }
  });
});
