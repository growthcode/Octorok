//CollisionDetector is valid for object with radiuses: bullets, players, boss(es)
var CollisionDetector = function(object1, object2) {
  var that = this;
  var _findDistance = function() {
    var distance = Math.sqrt(
    ((object1.shape.x - object2.shape.x) * (object1.shape.x - object2.shape.x))
    + ((object1.shape.y - object2.shape.y) * (object1.shape.y - object2.shape.y))
    );
   return distance;
  }
  this.bulletPlayerCollision = function() {

    if (object1.alive) {
      if (_findDistance() < (object1.radius + object2.radius)) {
        console.log("hit!!! ouch")
        injurePlayer(object2, object1.damage);
        destroyBullet(object1);
        checkIfPlayerAlive(object2);
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


