define('entry', ['crafty','box2d','mainclone','platform'],

function(Crafty) {
  'use strict';

  Crafty.scene('entry', function() {
    var i, h, x, y;

    // Base floor
    Crafty.e('Platform')
            .platform({ x: 0, y: 624, w: 1600, h: 16 }
                     , { color: '#ffff00' });

    Crafty.e('Platform')
            .platform({ x: 2050, y: 624, w: 500, h: 16 }
                     , { color: '#ffff00' });

    // first elevated platform
    // * single jump
    Crafty.e('Platform')
            .platform({ x: 750, y: 570, w: 50, h: 16 }
                     , { color: '#ffff00' });

    // Elevated floor
    // * double jump
    Crafty.e('Platform')
            .platform({ x: 1050, y: 465, w: 700, h: 175 }
                     , { color: '#ffff00' });

    // Second elevated platform
    // * long jump
    Crafty.e('Platform')
            .platform({ x: 2050, y: 465, w: 150, h: 16 }
                     , { color: '#ffff00' });

    // Small wall
    Crafty.e('Platform')
            .platform({ x: 0, y: 550, w: 16, h: 75 }
                     , { color: '#ffff00' });

    // Stairs
    x = 2500;
    y = 590;
    h = 50;
    for(i = 0; i < 5; i++) {
      Crafty.e('Platform')
              .platform({ x: x, y: y, w: 50, h: h }
                       , { color: '#ffff00' });
      x += 50;
      y -= 25;
      h += 25;
    }

    Crafty.e('Platform')
            .platform({ x: x + 200, y: 400, w: 150, h: 16 }
                     , { color: '#ffff00' });

    x += 350;
    for(i = 0; i < 4; i++) {
      Crafty.e('Platform')
              .platform({ x: x, y: 550, w: 50, h: 16 }
                       , { color: '#ffff00' });
      x += 150;
    }

    Crafty.e('WinPlatform')
            .platform({ x: x, y: 550, w: 50, h: 16 }
                     , { color: '#ff0000' });


    Crafty.e('MainClone');
  });
});
