define('box2dtwoway', ['crafty','box2d'],

function(Crafty, b2) {
  'use strict';

  Crafty.c('b2Twoway', {
    init: function() {
      this.requires('Keyboard, Box2D');
      this._inAir = false;
    },

    twoway: function(_speed, _jump) {
      this._speed = _speed;
      this._jump  = _jump;

      this.bind('EnterFrame', function() {
        var jump, jumpforce, moveX, moveY, movement, speed;

        moveX = false;
        moveY = false;
        speed = 0;
        jumpforce = 0;
        if(this.isDown('D')) {
          moveX = true;
          speed = this._speed;
        } else if(this.isDown('A')) {
          moveX = true;
          speed = -this._speed;
        }

        if(this.isDown('W')) {
          moveY = true;
          jumpforce = this._jump;
        }

        if(this.body.GetLinearVelocity().y === 0) {
          this._inAir = false;
        }

        if(moveX || moveY) {
          if(!this._inAir) {
            this._inAir = true;
            jump = this.body.GetMass() * jumpforce;
          }
          movement = moveX ? speed/32 : 0;
          return this.body.ApplyImpulse(new b2.Vec2(movement, jump)
               , this.body.GetWorldCenter());
        }
      });
    }
  });
});
