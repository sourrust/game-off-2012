require.config({
  paths: {
    crafty: 'lib/crafty'
  }
});

require(['crafty'],

function(Crafty) {
  'use strict';
  Crafty.init(800, 640);
});
