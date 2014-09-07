var CollisionDetector = function(bullet, player){
  this.bullet = bullet
  this.player = player
  var that = this
  var _findDistance = function(){
    that.distance = Math.sqrt(
            ((bullet.shape.x - player.shape.x) * (bullet.shape.x - player.shape.x))
          + ((bullet.shape.y - player.shape.y) * (bullet.shape.y - player.shape.y))
           );
   return that.distance
  }
  this.bulletPlayerCollision = function () {
    var distance =  _findDistance()
    if (distance<(bullet.radius+player.radius)){
    return true
    }
  }
}

var detector = new CollisionDetector(sevenSixtyTwo,antonio)
createjs.Ticker.addEventListener('tick', detector.bulletPlayerCollision)
