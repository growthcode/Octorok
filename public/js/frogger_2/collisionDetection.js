var waterYLine = (stage.canvas.height*6/13).toFixed(2)

frog['radius'] = frogRadius

car1['width'] = carWidth
car1['height'] = carHeight
car2['width'] = carWidth
car2['height'] = carHeight
truck1['width'] = truckWidth
truck1['height'] = truckHeight
truck2['width'] = truckWidth
truck2['height'] = truckHeight

// log1['width'] = logWidth
// log1['height'] = logHeight
// log2['width'] = logWidth
// log2['height'] = logHeight
// longLog1['width'] = longLogWidth
// longLog1['height'] = longLogHeight
// longLog2['width'] = longLogWidth
// longLog2['height'] = longLogHeight

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

var checkAllVehicleCollisions = function() {
  if(checkVehicleCollision(car1) || checkVehicleCollision(car2) || checkVehicleCollision(truck1) || checkVehicleCollision(truck2)) {
    resetFrogPosition();
    numOfFrogLives -= 1;
  }
}

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

// var checkWaterLogCollision = function(log) {
//   var distX = Math.abs(frog.x - (log.x+log.width/2));
//   var distY = Math.abs(frog.y - (log.y+log.height/2));

//   if (distX > (log.width/2.5 + frog.radius)) { return false; }
//   if (distY > (log.height/3 + frog.radius)) { return false; }

//   if (distX <= (log.width) && distY <= log.height) {
//     return true;
//   }
// }

// var checkAllWaterLogCollisions = function() {
//   if(checkWaterLogCollision(log1) || checkWaterLogCollision(longLog1)) {
//     return true;
//   }
//   if(checkWaterLogCollision(log2) || checkWaterLogCollision(longLog2)) {
//     return true;
//   }
// }

// var checkJumpInWater = function(){
//   if ((frog.y < waterYLine) && !(checkAllWaterLogCollisions())){
//       return true
//  }
// }

// var checkWaterCollisions = function(){
//   if(checkJumpInWater()){
//     // console.log("water line crossed")
//     // resetFrogPosition()
//   }
//   stage.update();
// }

createjs.Ticker.addEventListener('tick', checkAllVehicleCollisions);
// createjs.Ticker.addEventListener('tick', checkAllLogCollisions);
createjs.Ticker.addEventListener('tick', keepFrogInBounds);
// createjs.Ticker.addEventListener('tick', checkWaterCollisions);
