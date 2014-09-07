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
      console.log("hit!!! ouch")
      return true;
    }
  }

  // this.bulletPlayerDetection = function (){
  //   console.log("hisad")
  //   bulletCount=bulletArray.length
  //     if (bulletBodyDetection[i].bulletPlayerCollision){
  //       console.log(bulletBodyDetection[i])
  //     }
  //   }
  // }
}

// var bulletPlayerDetection = function (){
//   bulletCount=bulletArray.length
//   for ( var i = 0; i<bulletCount; i++){
//     bulletBodyDetection[i]=CollisionDetector(bulletArray[i], player[i])
//     if (bulletBodyDetection[i].bulletPlayerCollision){
//       console.log(bulletBodyDetection[i])
//     }
//   }
// }
var bulletPlayerDetection = function (){

  var bulletBodyDetection=[]

  bulletCount = bulletArray.length
  playerCount = playerArray.length
  for (var i = 0; i<bulletCount; i++){

    // console.log(bulletBodyDetection[i])
    for (var x = 0; x<playerCount; x++){

    new CollisionDetector(bulletArray[i], playerArray[x]).bulletPlayerCollision()
  }
}
}
    // createjs.Ticker.addEventListener("tick", bulletBodyDetection[i].bulletPlayerDetection);
// setInterval(bulletPlayerDetection(),30)
    createjs.Ticker.addEventListener("tick", bulletPlayerDetection);

