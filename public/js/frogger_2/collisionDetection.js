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

Controller = {}

Controller.Collision = function(character) {
  this.character = character;
  this.vehicles = [];
  this.logs
}

Controller.Collision.prototype.checkIntersection = function(vehicle) {
  if (this.character.x > vehicle.x + vehicle.width || this.character.x + this.character.width < vehicle.x || this.character.y > vehicle.y + vehicle.height || this.character.y + this.character.height < vehicle.y ) {
    return false
  };
  return true;
}

Controller.Collision.prototype.checkAllVehicleCollisions = function() {
  for (var i in this.vehicles) {
    if (this.checkIntersection(this.vehicles[i])) {
      console.log('you been hit')
    }
    else {console.log('you safe')}
  }

  // return $(this.vehicles).each(function(index, value) {
  //   return value
  // })
  // this.checkIntersection()
}



//test data//
var car1 = {
  x: 100,
  y: 100,
  width: 20,
  height: 20
}

var car2 = {
  x: 200,
  y: 200,
  width: 20,
  height: 20
}

var froggy = {
  x: 110,
  y: 110,
  width: 20,
  height: 20
}

var controller = new Controller.Collision(froggy)
controller.vehicles.push(car1)
controller.vehicles.push(car2)
//

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

// createjs.Ticker.addEventListener('tick', checkAllVehicleCollisions);
// createjs.Ticker.addEventListener('tick', checkAllLogCollisions);

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

// createjs.Ticker.addEventListener('tick', killFrogIfHitByVehicle);
// createjs.Ticker.addEventListener('tick', checkAllLogCollisions);
// createjs.Ticker.addEventListener('tick', keepFrogInBounds);
// createjs.Ticker.addEventListener('tick', checkWaterCollisions);
