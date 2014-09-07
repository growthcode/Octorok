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
      return true;
    }
  }
}
