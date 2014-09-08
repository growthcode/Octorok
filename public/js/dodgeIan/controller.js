var Controller = function(player, bullet) {
  this.player = player;
  this.bullet = bullet;
  var that = this;
  this._findDistance = function() {
    var distance = Math.sqrt(
    ((that.bullet.shape.x - player.shape.x) * (that.bullet.shape.x - player.shape.x))
    + ((that.bullet.shape.y - player.shape.y) * (that.bullet.shape.y - player.shape.y))
    );
   return distance;
  }
  this.checkForCollision = function() {
    if (that.bullet.alive) {
      if (that._findDistance() < (that.bullet.radius + player.radius)) {
        console.log("hit!!! ouch")
        that._injurePlayer(that.player, that.bullet.damage);
        destroyBullet(that.bullet);
        that._checkIfPlayerAlive(player);
        return true;
      }
    }
  }
  this.collisionScanner = function() {
    var bulletBodyDetection = [];
    bulletCount = bulletArray.length;
    playerCount = playerArray.length;
    for (var i = 0; i < bulletCount; i++) {
      for (var x = 0; x < playerCount; x++) {
        new Controller(bulletArray[i], playerArray[x]).checkForCollision();
      }
    }
  }
  this._injurePlayer = function(player, damage) {
    console.log(damage + "taken off");
    player.hp -= damage;
  }
  this._checkIfPlayerAlive = function(player) {
    if (player.hp <= 0) {
      that._killPlayer(player);
    } else {
      console.log("he's alive!");
    }
  }
  this._killPlayer = function(player) {
    var playerIndex = stage.children.indexOf(player.shape);
    player.radius = 0;
    stage.removeChildAt(playerIndex);
    player.alive = false;
    delete player;
    console.log(player.name + " was removed from canvas");
  }
}

var gameController = new Controller();

createjs.Ticker.addEventListener('tick', gameController.collisionScanner);
