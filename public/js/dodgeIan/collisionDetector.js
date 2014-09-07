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
        console.log("hit!!! ouch")
        injurePlayer(player, bullet.damage);
        destroyBullet(bullet);
        checkIfPlayerAlive(player);
        return true;
      }
    }
  }
}

var bulletPlayerDetection = function (){
  var bulletBodyDetection=[]
  bulletCount = bulletArray.length
  playerCount = playerArray.length
    for (var i = 0; i<bulletCount; i++){
      for (var x = 0; x<playerCount; x++){
      new CollisionDetector(bulletArray[i], playerArray[x]).bulletPlayerCollision()
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
  player.radius=0;
  stage.removeChildAt(playerIndex);
  player.alive = false;
  delete player;
  console.log(player.name + " was removed from canvas");
}

createjs.Ticker.addEventListener('tick', bulletPlayerDetection);


