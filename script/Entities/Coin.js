ENGINE.Coin = function(args) {

  Utils.extend(this, {

    color: "#ff0"

  }, args);

};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  zIndex: 2,

  collidable: true,

  radius: 5,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      object.score += 5;
      this.collection.remove(this);
    }

  },

  render: function() {

    app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.radius);

  }

};