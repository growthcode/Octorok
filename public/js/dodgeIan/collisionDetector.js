var CollisionDetector = function(bullet, player){
  this.bullet = bullet
  this.player = player
}

CollisionDetector.prototype.bulletPlayerCollision= function() {
}

detector = new CollisionDetector(sevenSixtyTwo,antonio)
detector.bulletPlayerCollision()

// var checkLogCollision = function(log) {
//   var distX = Math.abs(frog.x - (log.x+log.width/2));
//   var distY = Math.abs(frog.y - (log.y+log.height/2));

//   if (distX > (log.width/4 + frog.radius)) { return false; }
//   if (distY > (log.height/4 + frog.radius)) { return false; }

//   if (distX <= (log.width/4) && distY <= (log.height/4)) {
//     return true;
//   }
// }

// var checkAllLogCollisions = function() {
//   if(checkLogCollision(log1) || checkLogCollision(longLog1)) {
//     frog.x += logLane1Vel;
//   }
//   if(checkLogCollision(log2) || checkLogCollision(longLog2)) {
//     frog.x -= logLane2Vel;
//   }
//   stage.update();
// }

// createjs.Ticker.addEventListener('tick', checkWaterCollisions);
