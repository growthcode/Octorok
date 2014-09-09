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
        that._destroyBullet(that.bullet);
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
        new Controller(playerArray[x], bulletArray[i]).checkForCollision();
      }
    }
  }
  this._injurePlayer = function(player, damage) {
    console.log(damage + "taken off");
    player.hp -= damage;
    that._displayHpBar(that._remainingHp(player));
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
  this._destroyBullet = function(bullet) {
    var bulletIndex = stage.children.indexOf(bullet.shape);
    stage.removeChildAt(bulletIndex);
    bullet.alive = false;
    delete bullet;
    console.log(bullet + "was removed from canvas");
  }
  this._remainingHp = function(player) {
    return Math.floor(player.hp);
  }
  this._displayHpBar = function(value) {
    $('progress').attr('value', value);
  }
}

var gameController = new Controller();

createjs.Ticker.addEventListener('tick', gameController.collisionScanner);
