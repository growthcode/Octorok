var waterYLine = (stage.canvas.height*6/13).toFixed(2);

var checkVehicleCollision = function(vehicle) {
  var distX = Math.abs(frog.x - (vehicle.x + vehicle.width/2));
  var distY = Math.abs(frog.y - (vehicle.y + vehicle.height/2));

  if (distX > (vehicle.width / 2 + frog.radius)) { return false; }
  if (distY > (vehicle.height / 2 + frog.radius)) { return false; }

  if (distX <= (vehicle.width / 2)) { return true; }
  if (distY <= (vehicle.height / 2)) { return true; }

  var dx = distX - vehicle.width / 2;
  var dy = distY - vehicle.height / 2;
  return (dx * dx + dy * dy <= (frog.radius * frog.radius));
}

var checkAllVehicleCollisions = function () {
 return $.grep(vehicles, function(value) {
    return checkVehicleCollision(value) === true
  }).length > 0
}

var killFrogIfHitByVehicle = function() {
  if(checkAllVehicleCollisions()) {
    resetFrogPosition();
    numOfFrogLives -= 1;
  }
}

var checkLogCollision = function(log) {
  var distX = Math.abs(frog.x - (log.x+log.width/2));
  var distY = Math.abs(frog.y - (log.y+log.height/2));

  if (distX > (log.width/4 + frog.radius)) { return false; }
  if (distY > (log.height/4 + frog.radius)) { return false; }

  if (distX <= (log.width/4) && distY <= (log.height/4)) {
    return true;
  }
}

var checkAllLogCollisions = function() {
  for (var i in logs) {
    if (logs[i].direction == "right") {
      if (checkLogCollision(logs[i])) {
        frog.x += logs[i].speed;
      }
    } else {
      if (checkLogCollision(logs[i]))  {
        frog.x -= logs[i].speed;
      }
    }
    stage.update();
  }
}

var checkWaterLogCollision = function(log) {
  var distX = Math.abs(frog.x - (log.x+log.width/2));
  var distY = Math.abs(frog.y - (log.y+log.height/2));

  if (distX > (log.width/2.5 + frog.radius)) { return false; }
  if (distY > (log.height/3 + frog.radius)) { return false; }

  if (distX <= (log.width) && distY <= log.height) {
    return true;
  }
}

var checkAllWaterLogCollisions = function() {
  for (var i in logs) {
    if (checkWaterLogCollision(logs[i])) {
      return true;
    }
  }
}

var checkJumpInWater = function() {
  if ((frog.y < waterYLine) && !(checkAllWaterLogCollisions())) {
    return true
 }
}

var checkWaterCollisions = function() {
  if (checkJumpInWater()) {
    console.log("water line crossed")
    resetFrogPosition()
    numOfFrogLives -= 1
  }
  stage.update();
}
