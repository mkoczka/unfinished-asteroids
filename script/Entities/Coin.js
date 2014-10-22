ENGINE.Coin = function(args) {

  Utils.extend(this, {

    color: "#ff0"

  }, args);

  this.coinSize = 2 * this.radius;
  this.imageSize = app.images.coins.width;
  this.animationSteps = this.imageSize / this.coinSize;

};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  zIndex: 2,

  collidable: true,

  radius: 5,

  count: 0,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      object.score += 5;
      this.collection.remove(this);
    }

  },

  render: function(delta) {

    if (this.count > this.animationSteps) {
      this.count = 0;
    }

    app.layer.drawRegion(app.images.coins, [this.count * this.coinSize, 0, this.coinSize, this.coinSize], this.x, this.y);
    this.count++;

  }

};