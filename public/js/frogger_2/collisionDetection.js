Controller = {}

Controller.Collision = function(character) {
  this.character = character;
  this.vehicles = [];
  this.logs = [];
}

Controller.Collision.prototype.resetFrogPosition = function() {
  this.character.x = frogXStart
  this.character.y = frogYStart
}

Controller.Collision.prototype.killFrog = function() {
  this.character.lives -= 1
  this.resetFrogPosition()
}

Controller.Collision.prototype.keepFrogInBounds = function() {
  if(this.character.x < 0 || (this.character.x+this.character.width) > borderWidth) {
    this.killFrog()
    console.log('too far...')

var checkAllVehicleCollisions = function () {
 return $.grep(vehicles, function(value) {
    return checkVehicleCollision(value) === true
  }).length > 0
}

var killFrogIfHitByVehicle = function() {
  if(checkAllVehicleCollisions()) {
    frog.resetPosition();
    numOfFrogLives -= 1;
  }
}

Controller.Collision.prototype.rideLog = function(direction, logIndex) {
  if(direction === "left") {
    this.character.x -= this.logs[logIndex].speed
    this.keepFrogInBounds()
  }
  else if(direction === "right") {
    this.character.x += this.logs[logIndex].speed
    this.keepFrogInBounds()
  }
}

Controller.Collision.prototype.checkCollision = function(movingObject) {
  if (this.character.x > movingObject.x + movingObject.width || this.character.x + this.character.width < movingObject.x || this.character.y > movingObject.y + movingObject.height || this.character.y + this.character.height < movingObject.y ) {
    return false
  };
  return true;
}

Controller.Collision.prototype.checkAllVehicleCollisions = function() {
  for (var i in this.vehicles) {
    if (this.checkCollision(this.vehicles[i])) {
      console.log('you been hit, son')
      this.killFrog()
    }
  }
}

Controller.Collision.prototype.checkAllLogCollisions = function() {
  for (var i in this.logs) {
    if (this.checkCollision(this.logs[i])) {
      this.rideLog(this.logs[i].direction, i)
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
    frog.resetPosition()
    numOfFrogLives -= 1
  }
}

var collisionController = new Controller.Collision(frog)


var waterYLine = (stage.canvas.height*6/13).toFixed(2);
// var waterYLine = (stage.canvas.height*6/13).toFixed(2)

// var resetFrogPosition = function() {
//   frog.x = frogXStart
//   frog.y = frogYStart
//   stage.update
// }

// var keepFrogInBounds = function() {
//   if((frog.x-frog.radius) < 0 || (frog.x+frog.radius) > borderWidth) {
//     resetFrogPosition();
//     numOfFrogLives -= 1;
//   }
// }

// var checkVehicleCollision = function(vehicle) {
//   var distX = Math.abs(frog.x - (vehicle.x + vehicle.width/2));
//   var distY = Math.abs(frog.y - (vehicle.y + vehicle.height/2));

//   if (distX > (vehicle.width / 2 + frog.radius)) { return false; }
//   if (distY > (vehicle.height / 2 + frog.radius)) { return false; }

//   if (distX <= (vehicle.width / 2)) { return true; }
//   if (distY <= (vehicle.height / 2)) { return true; }

//   var dx = distX - vehicle.width / 2;
//   var dy = distY - vehicle.height / 2;
//   return (dx * dx + dy * dy <= (frog.radius * frog.radius));
// }

// var checkAllVehicleCollisions = function () {
//  return $.grep(vehicles, function(value) {
//     return checkVehicleCollision(value) === true
//   }).length > 0
// }

// var killFrogIfHitByVehicle = function() {
//   if(checkAllVehicleCollisions()) {
//     resetFrogPosition();
//     numOfFrogLives -= 1;
//   }
// }

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
//   for (var i in logs) {
//     if (logs[i].direction == "right") {
//       if (checkLogCollision(logs[i])) {
//         frog.x += logs[i].speed;
//       }
//     } else {
//       if (checkLogCollision(logs[i]))  {
//         frog.x -= logs[i].speed;
//       }
//     }
//     stage.update();
//   }
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
//   for (var i in logs) {
//     if (checkWaterLogCollision(logs[i])) {
//       return true;
//     }
//   }
// }

// var checkJumpInWater = function() {
//   if ((frog.y < waterYLine) && !(checkAllWaterLogCollisions())) {
//     return true
//  }
// }

// var checkWaterCollisions = function() {
//   if (checkJumpInWater()) {
//     console.log("water line crossed")
//     resetFrogPosition()
//     numOfFrogLives -= 1
//   }
//   stage.update();
// }
