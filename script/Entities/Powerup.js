ENGINE.Powerup = function(args) {

  Utils.extend(this, {

    color: "#ff0"

  }, args);

  this.sprite = [103, 66, 14, 14];

};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,

  zIndex: 2,

  collidable: true,

  radius: 5,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      object.hp += object.maxHp / 2;
      if (object.hp >= object.maxHp) {
        object.hp = object.maxHp;
      }
      this.collection.remove(this);
    }

  },

  render: function() {

    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);

  }

};