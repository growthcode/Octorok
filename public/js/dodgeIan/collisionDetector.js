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
    if (_findDistance() < (bullet.radius + player.radius)) {
      console.log("hit!!! ouch")
      injurePlayer(player, bullet.damage);
      destroyBullet(bullet);
      checkIfPlayerAlive(player);
      return true;
    }
  }
}
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

    createjs.Ticker.addEventListener("tick", bulletPlayerDetection);

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
  delete player;
  console.log(player.name + " was removed from canvas");
}

var checkAntonio = function() {
  for (var i in bulletArray) {
    new CollisionDetector(bulletArray[i], antonio).bulletPlayerCollision();
  }
}

createjs.Ticker.addEventListener('tick', checkAntonio);


