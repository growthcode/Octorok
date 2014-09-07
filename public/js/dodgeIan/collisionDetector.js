var CollisionDetector = function(bullet, player) {
  var that = this;
  var _findDistance = function() {
    var distance = Math.sqrt(
    ((bullet.shape.x - player.shape.x) * (bullet.shape.x - player.shape.x))
    + ((bullet.shape.y - player.shape.y) * (bullet.shape.y - player.shape.y))
    );
   return distance;
  }
  this.bulletPlayerCollision = function() {
    if (bullet.alive) {
      if (_findDistance() < (bullet.radius + player.radius)) {
        injurePlayer(player, bullet.damage);
        destroyBullet(bullet);
        checkIfPlayerAlive(player);
      }
    }
  }
}

var injurePlayer = function(player, damage) {
  console.log(damage + "taken off");
  player.hp -= damage;
}

var checkIfPlayerAlive = function(player) {
  if (player.hp <= 0) {
    killPlayer(player);
  } else {
    console.log("he's alive!");
  }
}

var killPlayer = function(player) {
  var playerIndex = stage.children.indexOf(player.shape);
  stage.removeChildAt(playerIndex);
  player.alive = false;
  delete player;
  console.log(player.name + " was removed from canvas");
}

var checkAntonio = function() {
  for (var i in bulletArray) {
    new CollisionDetector(bulletArray[i], antonio).bulletPlayerCollision();
  }
}

createjs.Ticker.addEventListener('tick', checkAntonio);

