define('entry', ['crafty','box2d','mainclone','platform'],

function(Crafty) {
  'use strict';

  Crafty.scene('entry', function() {

    Crafty.e('Platform')
            .platform({ x: 0, y: 624, w: 1600, h: 16 }
                     , '#ffff00');

    Crafty.e('Platform')
            .platform({ x: 750, y: 570, w: 50, h: 16 }
                     , '#ffff00');

    Crafty.e('MainClone');
  });
});
