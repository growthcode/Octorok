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
// var bulletX=bullet.shape.x
// var bulletY=bullet.shape.y

// CollisionDetector.prototype.findDistance = function(){
//   // console.log(this)
//   console.log(this.bullet)
//   // console.log(this.player.shape.x)
  
//   // var bullet = this.bullet
//   // var player = this.player
//    this.distance = Math.sqrt(
//             ((this.bullet.shape.x - this.player.shape.x) * (this.bullet.shape.x - this.player.shape.x))
//           + ((this.bullet.shape.y - this.player.shape.y) * (this.bullet.shape.y - this.player.shape.y))
//            );
//    console.log("distance")
//    return distance
// }


// CollisionDetector.prototype.bulletPlayerCollision = function() {
//   // console.log(this)
//   var bullet = this.bullet
//   var player = this.player
//   // console.log(bullet)
//   // console.log(player)
//   // var distance = Math.sqrt(
//   //           ((bullet.shape.x - player.shape.x) * (bullet.shape.x - player.shape.x))
//   //         + ((bullet.shape.y - player.shape.y) * (bullet.shape.y - player.shape.y))
//   //          );
//   // debugger
//   // console.log('sdfgs')
//   // createjs.Ticker.addEventListener('tick', function() {
//     // console.log(distance)
//   // })
//   // console.log(this.bullet.shape.x)
//   // console.log(distance)
//   if (this.findDistance<(this.bullet.radius+this.player.radius)){
//     console.log("hi")
//   }
// }
// CollisionDetector(sevenSixtyTwo,antonio)

var detector = new CollisionDetector(sevenSixtyTwo,antonio)
// detector.bulletPlayerCollision()
createjs.Ticker.addEventListener('tick', detector.bulletPlayerCollision)
// detector.findDistance()
// setInterval(detector.bulletPlayerCollision(), 5)
// detector.bulletPlayerCollision()
// createjs.Ticker.addEventListener('tick', detector.bulletPlayerCollision)
// detector.bulletPlayerCollision()
// setInterval(console.log(bullet.shape.x + ' ' + player.shape.x), 3000)
// bullet--
// this.radius = radius
//   this.damage = 40;
//   this.shape = new createjs.Shape();
//   this.shape.graphics.beginFill("green").drawCircle(0,0,radius);
//   this.shape.x = posX;
//   this.shape.y = posY;
//   this.dx = dx;
//   this.dy = dy;
  
  
  
  
  
//   player--
//   this.radius=radius
//   this.shape = new createjs.Shape();
//   this.shape.graphics.beginFill("red").drawCircle(100,100,radius);
//   this.name = name;
//   this.shape.x = posX;
//   this.shape.y = posY;
//   this.stepSize = 10; //pixels
//   this.hp = 100;
// // var checkLogCollision = function(log) {
// //   var distX = Math.abs(frog.x - (log.x+log.width/2));
// //   var distY = Math.abs(frog.y - (log.y+log.height/2));

// //   if (distX > (log.width/4 + frog.radius)) { return false; }
// //   if (distY > (log.height/4 + frog.radius)) { return false; }

// //   if (distX <= (log.width/4) && distY <= (log.height/4)) {
// //     return true;
// //   }
// // }

// // var checkAllLogCollisions = function() {
// //   if(checkLogCollision(log1) || checkLogCollision(longLog1)) {
// //     frog.x += logLane1Vel;
// //   }
// //   if(checkLogCollision(log2) || checkLogCollision(longLog2)) {
// //     frog.x -= logLane2Vel;
// //   }
// //   stage.update();
// // }

// // createjs.Ticker.addEventListener('tick', checkWaterCollisions);
