require.config({
  paths: {
    crafty: 'lib/crafty',
    box2dweb: 'lib/box2dweb',
    box2d: 'components/box2d',
    box2dtwoway: 'components/box2dTwoway'
  }
});

require(['crafty', 'box2d', 'box2dtwoway'],

function(Crafty, b2) {
  'use strict';
  Crafty.init(800, 640);
  Crafty.canvas.init();

  Crafty.box2D.init(0, 10, 32, true);

  Crafty.e('2D, Canvas, Color, Box2D')
          .color('#ffff00')
          .attr({ x: 0, y: 624, w: 800, h: 16 })
          .box2d({ bodyType: 'solid' });

  Crafty.e('2D, Canvas, Color, Box2D')
          .color('#ffff00')
          .attr({ x: 750, y: 570, w: 50, h: 16 })
          .box2d({ bodyType: 'solid' });

  Crafty.e('2D, Canvas, Color, Box2D, b2Twoway')
          .color('#000')
          .attr({ x: 400, y: 320, w: 32, h: 32 })
          .box2d({ bodyType: 'dynamic'
                 , density: 3
                 , friction: 0.5
                 , rotation: false
                 })
          .twoway(35, 35);
  Crafty.box2D.showDebugInfo();
});
