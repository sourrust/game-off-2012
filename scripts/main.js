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
    entry: 'scenes/entry',
    config: 'config'
  }
});

require(['crafty','config','entry'],

function(Crafty, config) {
  'use strict';
  Crafty.init(config.canvas.width, config.canvas.height);
  Crafty.viewport.clampToEntities = false;
  Crafty.canvas.init();

  Crafty.box2D.init(0, 10, config.pixelPerMeter, true);

  Crafty.scene('entry');

  Crafty.box2D.showDebugInfo();
});
