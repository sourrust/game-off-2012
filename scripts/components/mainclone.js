define('mainclone',

[ 'crafty'
, 'box2d'
, 'config'
, 'box2dtwoway'
, 'camera'
, 'clone'
, 'entry'
, 'winplatform'
],

function(Crafty, b2, config) {
  'use strict';

  Crafty.c('MainClone', {
    init: function() {
      this.addComponent('Clone, Camera, b2Twoway');

      this.twoway(10, 10);

      this.text = Crafty.e('2D, Canvas, Text');

      this.bind('Change', function(position) {
        var clone, i, l, ppm, vec;

        ppm = config.pixelPerMeter;

        // Reset to starting position if player falls off map
        if(position._y > config.canvas.height) {
          vec = new b2.Vec2(400 / ppm, 500 / ppm);
          this.body.SetPosition(vec);

          l = this._clones.length;
          vec.x = 0;
          vec.y = 500 / ppm;
          for(i = 0; i < l; i++) {
            clone = this._clones[i];
            clone.visible = false;
            clone.body.SetPosition(vec);
          }
        }
      });

      this.onContact('WinPlatform', function() {
        this.text.attr({ x: this.x + 16, y: this.y - 16 })
                 .textFont({ family: 'Arial'
                           , weight: 'bold'
                           , size: '20px'
                           })
                 .text('Win!');
      });
    }
  });
});
