require.config({
  paths: {
    crafty: 'lib/crafty',
    box2dweb: 'lib/box2dweb',
    box2d: 'components/box2d',
    box2dtwoway: 'components/box2dTwoway',
    camera: 'components/camera',
    clone: 'components/clone',
    mainclone: 'components/mainclone',
    platform: 'components/platform',
    entry: 'scenes/entry'
  }
});

require(['crafty','entry'],

function(Crafty) {
  'use strict';
  Crafty.init(800, 640);
  Crafty.canvas.init();

  Crafty.box2D.init(0, 10, 32, true);

  Crafty.scene('entry');

  Crafty.box2D.showDebugInfo();
});
