var CollisionDetector = function(bullet, player) {
  this.bullet = bullet;
  this.player = player;
  var that = this;
  var _findDistance = function() {
    var distance = Math.sqrt(
    ((bullet.shape.x - player.shape.x) * (bullet.shape.x - player.shape.x))
    + ((bullet.shape.y - player.shape.y) * (bullet.shape.y - player.shape.y))
    );
   return distance;
  }
  this.bulletPlayerCollision = function() {
    if (_findDistance() < (bullet.radius + player.radius)) {
      injurePlayer(player, bullet.damage);
    }
  }
}

var injurePlayer = function(player, damage) {
  player.hp -= damage;
}

var checkIfPlayerAlive = function(player) {
  if (player.hp <= 0) {
    return false;
  } else {
    return true;
  }
}

var killPlayer = function(player) {
  var playerIndex = stage.children.indexOf(player.shape);
  stage.removeChildAt(playerIndex);
}
