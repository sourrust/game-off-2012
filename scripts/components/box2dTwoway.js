define('box2dtwoway', ['crafty','box2d'],

function(Crafty, b2) {
  'use strict';
  var isHittingSensor;

  Crafty.c('b2Twoway', {
    init: function() {
      this.requires('Keyboard, Box2D');
      this._inAir = false;
      this._impluse = new b2.Vec2(0, 0);
    },

    twoway: function(_speed, _jump) {
      var w, h;
      this._speed = _speed;
      this._jump  = _jump;

      w = this.attr().w;
      h = this.attr().h;

      // setup foot sensor
      this.addFixture({ bodyType: 'dynamic'
                      , density: 0
                      , friction: 0
                      , shape: [ [1, h]
                               , [w - 2, h]
                               ]
                      });

      this.fixtures[1].SetSensor(true);

      this.bind('EnterFrame', function() {
        var jump, jumpforce, mass, moveX, moveY, movement, speed, vel
          , velChange;

        jump      = 0;
        jumpforce = 0;
        moveX     = false;
        moveY     = false;
        speed     = 0;
        vel       = this.body.GetLinearVelocity();
        if(this.isDown('D')) {
          moveX = true;

          speed = (this._inAir && vel.x < 0)
                ? Math.min(vel.x + 1, this._speed/5)
                : this._speed;
        } else if(this.isDown('A')) {
          moveX = true;

          speed = (this._inAir && vel.x > 0)
                ? Math.max(vel.x - 1, -this._speed/5)
                : -this._speed;
        } else if(this._inAir) {
          speed = vel.x * 0.98;
        }

        if(this.isDown('W')) {
          moveY = true;
          jumpforce = this._jump;
        }

        if(isHittingSensor(this.contact('Box2D'))) {
          this._inAir = false;
        }

        mass = this.body.GetMass();
        if(moveY && !this._inAir) {
          this._inAir = true;
          jump = mass * jumpforce;
        }
        movement = mass * (speed - vel.x);
        this._impluse.x = movement;
        this._impluse.y = jump;

        if(movement !== 0 || jump !== 0) {
          this.body.ApplyImpulse(this._impluse
               , this.body.GetWorldCenter());
        }
      });

      return this;
    }
  });

  isHittingSensor = function(contacts) {
    var contact, i, isSensor, l;

    l = contacts.length;
    isSensor = false;
    for(i = 0; i < l; i++) {
      contact = contacts[i];

      isSensor |= contact.contact.fixtureA.IsSensor();
    }

    return !!isSensor;
  };
});
