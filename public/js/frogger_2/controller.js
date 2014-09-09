Game = {};

Game.Controller = function(character) {
  this.character = character;
  this.vehicles = [];
  this.logs = [];
}

Game.Controller.prototype.resetFrogPosition = function() {
  this.character.x = frogXStart
  this.character.y = frogYStart
}

Game.Controller.prototype.killFrog = function() {
  this.character.lives -= 1
  this.resetFrogPosition()
}

Game.Controller.prototype.keepFrogInBounds = function() {
  if(this.character.x < 0 || (this.character.x+this.character.width) > canvas.width) {
    this.killFrog();
    console.log('too far...');
  }
}

Game.Controller.prototype.rideLog = function(direction, logIndex) {
  if(direction === "left") {
    this.character.x -= this.logs[logIndex].speed
    this.keepFrogInBounds()
  }
  else if(direction === "right") {
    this.character.x += this.logs[logIndex].speed
    this.keepFrogInBounds()
  }
}

Game.Controller.prototype.checkCollision = function(movingObject) {
  if (this.character.x > movingObject.x + movingObject.width || this.character.x + this.character.width < movingObject.x || this.character.y > movingObject.y + movingObject.height || this.character.y + this.character.height < movingObject.y ) {
    return false
  };
  return true;
}

Game.Controller.prototype.checkAllVehicleCollisions = function() {
  for (var i in this.vehicles) {
    if (this.checkCollision(this.vehicles[i])) {
      console.log('you been hit, son')
      this.killFrog()
    }
  }
}

Game.Controller.prototype.checkAllLogCollisions = function() {
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
    frog.resetPosition();
  }
}

var logCreator = function() {
  for (var i = 1; i < 6 ; i++) {
    if (i % 2 == 0) { 
      gameController.logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      gameController.logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    } else {
      gameController.logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      gameController.logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    }
  }
  for (var i in gameController.logs) {
    stage.addChild(gameController.logs[i]);
  }
  stage.update();
}

var frog = new Frog();
stage.addChild(frog);
stage.update();


var vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i % 2 == 0) {
      gameController.vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      gameController.vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      gameController.vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    } else {
      gameController.vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      gameController.vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      gameController.vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    }
  }
  for (var i in gameController.vehicles) {
    stage.addChild(gameController.vehicles[i]);
  }
  stage.update();
}

var moveObjects = function() {
  for (var i in gameController.logs) {
    if (gameController.logs[i].direction == "right") {
      if (gameController.logs[i].x > stage.canvas.width + 100) { gameController.logs[i].x = -100 }
        gameController.logs[i].x += gameController.logs[i].speed;
    } else {
      if (gameController.logs[i].x < -110) { gameController.logs[i].x = stage.canvas.width + 50 }
        gameController.logs[i].x -= gameController.logs[i].speed;
    }
    stage.update();
  }
  for (var i in gameController.vehicles) {
    if (gameController.vehicles[i].direction == "right") {
      if (gameController.vehicles[i].x > stage.canvas.width + 100) { gameController.vehicles[i].x = -100 }
        gameController.vehicles[i].x += gameController.vehicles[i].speed;
    } else {
      if (gameController.vehicles[i].x < -110) { gameController.vehicles[i].x = stage.canvas.width + 50 }
        gameController.vehicles[i].x -= gameController.vehicles[i].speed;
    }
    stage.update();
  }
}

var gameController = new Game.Controller(frog);
logCreator();
vehicleCreator();

createjs.Ticker.addEventListener('tick', gameController.checkAllVehicleCollisions.bind(gameController));
createjs.Ticker.addEventListener('tick', gameController.checkAllLogCollisions.bind(gameController));
createjs.Ticker.addEventListener("tick", moveObjects);
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
