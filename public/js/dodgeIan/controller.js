var Controller = function(object1, object2) {
  var that = this;
  this._findDistance = function() {
    var distance = Math.sqrt(
    ((object1.shape.x - object2.shape.x) * (object1.shape.x - object2.shape.x))
    + ((object1.shape.y - object2.shape.y) * (object1.shape.y - object2.shape.y))
    );
   return distance;
  }
  this.checkForCollision = function() {
    if (object1.alive) {
      if (that._findDistance() < (object1.radius + object2.radius)) {
        console.log("hit!!! ouch")
        that.injurePlayer(object2, object1.damage);
        destroyBullet(object1);
        that.checkIfPlayerAlive(object2);
        return true;
      }
    }
  }
  this.collisionScanner = function() {
    var bulletBodyDetection=[]
    bulletCount = bulletArray.length
    playerCount = playerArray.length
      for (var i = 0; i < bulletCount; i++){
        for (var x = 0; x < playerCount; x++){
        new Controller(bulletArray[i], playerArray[x]).checkForCollision()
      }
    }
  }
  this.injurePlayer = function(player, damage) {
    console.log(damage + "taken off");
    player.hp -= damage;
  }
  this.checkIfPlayerAlive = function(player) {
    if (player.hp <= 0) {
      killPlayer(player);
    } else {
      console.log("he's alive!");
    }
  }
  this.killPlayer = function(player) {
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
