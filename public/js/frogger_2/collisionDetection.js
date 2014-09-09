var waterYLine = (stage.canvas.height*6/13).toFixed(2)

frog['radius'] = frogRadius

// car1['width'] = carWidth
// car1['height'] = carHeight
// car2['width'] = carWidth
// car2['height'] = carHeight
// truck1['width'] = truckWidth
// truck1['height'] = truckHeight
// truck2['width'] = truckWidth
// truck2['height'] = truckHeight
// car4['width'] = carWidth
// car4['height'] = carHeight
// car5['width'] = carWidth
// car5['height'] = carHeight
// car6['width'] = carWidth
// car6['height'] = carHeight
// car7['width'] = carWidth
// car7['height'] = carHeight
// car8['width'] = carWidth
// car8['height'] = carHeight
// car9['width'] = carWidth
// car9['height'] = carHeight
// car10['width'] = carWidth
// car10['height'] = carHeight
// car11['width'] = carWidth
// car11['height'] = carHeight
// car12['width'] = carWidth
// car12['height'] = carHeight
// car13['width'] = carWidth
// car13['height'] = carHeight
// car14['width'] = carWidth
// car14['height'] = carHeight
// car15['width'] = carWidth
// car15['height'] = carHeight

// rectangle
checkIntersection = function(rect1,rect2) {
  if (rect1.x > rect2.x + rect2.width && rect1.x + rect1.width < rect2.x && rect1.y > rect2.y + rect2.height && rect1.y + rect1.height < rect2.y ) {
    return false
  };
  return true;
}






var resetFrogPosition = function() {
  frog.x = frogXStart
  frog.y = frogYStart
  stage.update
}

var keepFrogInBounds = function() {
  if((frog.x-frog.radius) < 0 || (frog.x+frog.radius) > borderWidth) {
    resetFrogPosition();
    numOfFrogLives -= 1;
  }
}

var checkVehicleCollision = function(vehicle) {
  var distX = Math.abs(frog.x - (vehicle.shape.x + vehicle.width/2));
  var distY = Math.abs(frog.y - (vehicle.shape.y + vehicle.height/2));

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

createjs.Ticker.addEventListener('tick', checkAllVehicleCollisions);
createjs.Ticker.addEventListener('tick', checkAllLogCollisions);

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
  for (var i in logMovingLeft) {
    if (checkLogCollision(logMovingLeft[i])) {
      frog.x += logVelocity;
    }
    if (checkLogCollision(logMovingLeft[i]))  {
      frog.x -= logVelocity;
    }
    stage.update();
  }
  for (var i in movingObjectMovingRight) {
    if (checkLogCollision(movingObjectMovingRight[i])) {
      frog.x += logVelocity;
    }
    if( checkLogCollision(movingObjectMovingRight[i])) {
      frog.x -= logVelocity;
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
  for (var i in movingObjectMovingRight) {
    if (checkWaterLogCollision(movingObjectMovingRight[i])) {
      return true;
    }
    if (checkWaterLogCollision(movingObjectMovingRight[i])) {
      return true;
    }
  }
  for (var i in logMovingLeft) {
    if (checkWaterLogCollision(logMovingLeft[i])) {
      return true;
    }
    if (checkWaterLogCollision(logMovingLeft[i])) {
      return true;
    }
  }
}

var checkJumpInWater = function(){
  if ((frog.y < waterYLine) && !(checkAllWaterLogCollisions())){
      return true
 }
}

var checkWaterCollisions = function(){
  if(checkJumpInWater()){
    console.log("water line crossed")
    resetFrogPosition()
    numOfFrogLives -= 1
  }
  stage.update();
}

createjs.Ticker.addEventListener('tick', killFrogIfHitByVehicle);
createjs.Ticker.addEventListener('tick', checkAllLogCollisions);
createjs.Ticker.addEventListener('tick', keepFrogInBounds);
createjs.Ticker.addEventListener('tick', checkWaterCollisions);
