define('entry', ['crafty','box2d','mainclone','platform'],

function(Crafty) {
  'use strict';

  Crafty.scene('entry', function() {

    // Base floor
    Crafty.e('Platform')
            .platform({ x: 0, y: 624, w: 3200, h: 16 }
                     , '#ffff00');

    // first elevated platform
    // * single jump
    Crafty.e('Platform')
            .platform({ x: 750, y: 570, w: 50, h: 16 }
                     , '#ffff00');

    // Elevated floor
    // * double jump
    Crafty.e('Platform')
            .platform({ x: 1050, y: 465, w: 700, h: 175 }
                     , '#ffff00');

    // Second elevated platform
    // * long jump
    Crafty.e('Platform')
            .platform({ x: 2050, y: 465, w: 150, h: 16 }
                     , '#ffff00');

    // Small wall
    Crafty.e('Platform')
            .platform({ x: 0, y: 550, w: 16, h: 75 }
                     , '#ffff00');


    Crafty.e('MainClone');
  });
});
