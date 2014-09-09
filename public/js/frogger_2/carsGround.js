Controller = {}

Controller.Collision = function(character) {
  this.character = character;
  this.vehicles = [];
  this.logs = [];
}

Controller.Collision.prototype.rideLog = function(direction, logIndex) {
  if(direction === "left") {
    this.character.x -= this.logs[logIndex].speed
  }
  else if(direction === "right") {
    this.character.x += this.logs[logIndex].speed
  }
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
      console.log('you been hit, son')
      // resetFrogPosition();
      numOfFrogLives -= 1
    }
  }
}

Controller.Collision.prototype.checkAllLogCollisions = function() {
  for (var i in this.logs) {
    if (this.checkIntersection(this.logs[i])) {
      this.rideLog(this.logs[i].direction, i)
    }
  }
}

var collisionController = new Controller.Collision(frog)


var vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i % 2 == 0) {
      collisionController.vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      collisionController.vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      collisionController.vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    } else {
      collisionController.vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      collisionController.vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      collisionController.vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    }
  }
  for (var i in collisionController.vehicles) {
    stage.addChild(collisionController.vehicles[i]);
  }
  stage.update();
}

vehicleCreator();
createjs.Ticker.addEventListener('tick', collisionController.checkAllVehicleCollisions.bind(collisionController))
createjs.Ticker.addEventListener('tick', collisionController.checkAllLogCollisions.bind(collisionController))

var carWidth=100;
var carHeight=rowHeight - (canvas.height/60);
var truckWidth=180;
var truckHeight=rowHeight - (canvas.height/60);

xDifference = 300;
frogStartRoadXPos=0;
frogStartRoadYPos=borderHeight - rowHeight * 0 + (canvas.height/120);
car1StartXPos=100;
car1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
car2StartXPos=100;
car2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);
carLane3StartXPos= 0;
carLane3StartYPos=borderHeight - rowHeight * 4 + (canvas.height/120);
carLane4StartXPos= 0;
carLane4StartYPos=borderHeight - rowHeight * 5 + (canvas.height/120);
carLane5StartXPos= 0;
carLane5StartYPos=borderHeight - rowHeight * 6 + (canvas.height/120);
grassLane6XPos= 0;
grassLane6YPos=borderHeight - rowHeight * 6 + (canvas.height/120);
truck1StartXPos=400;
truck1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
truck2StartXPos=400;
truck2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);
frogEndGrassXPos=0
frogEndGrassYPos=borderHeight - rowHeight * 13 + (canvas.height/120);


var lane1Vel=10;
var lane2Vel=10;

var lane1 = [];
var lane2 = [];
var lane3 = [];
var lane4 = [];
var imgLane1 = [];
var imgLane2 = [];


var froggerStartRoad = new createjs.Bitmap("../assets/frogger_2/road.jpg");
froggerStartRoad.x = frogStartRoadXPos;
froggerStartRoad.y = frogStartRoadYPos - 50;
froggerStartRoad.scaleX = 2.5;
froggerStartRoad.scaleY = 1;

var froggerSafeMedian = new createjs.Bitmap("../assets/frogger_2/divider.jpg");
froggerSafeMedian.x = grassLane6XPos;
froggerSafeMedian.y = grassLane6YPos - 50;
froggerSafeMedian.scaleX = 2.5;
froggerSafeMedian.scaleY = .5;

var froggerEndGrass = new createjs.Bitmap("../assets/frogger_2/grass.png");
froggerEndGrass.x = frogEndGrassXPos;
froggerEndGrass.y = frogEndGrassYPos-10;
froggerEndGrass.scaleX = 2.3;
froggerEndGrass.scaleY = .7;

var moveObjects = function() {
  for (var i in collisionController.logs) {
    if (collisionController.logs[i].direction == "right") {
      if (collisionController.logs[i].x > stage.canvas.width + 100) { collisionController.logs[i].x = -100 }
        collisionController.logs[i].x += collisionController.logs[i].speed;
    } else {
      if (collisionController.logs[i].x < -110) { collisionController.logs[i].x = stage.canvas.width + 50 }
        collisionController.logs[i].x -= collisionController.logs[i].speed;
    }
    stage.update();
  }
  for (var i in collisionController.vehicles) {
    if (collisionController.vehicles[i].direction == "right") {
      if (collisionController.vehicles[i].x > stage.canvas.width + 100) { collisionController.vehicles[i].x = -100 }
        collisionController.vehicles[i].x += collisionController.vehicles[i].speed;
    } else {
      if (collisionController.vehicles[i].x < -110) { collisionController.vehicles[i].x = stage.canvas.width + 50 }
        collisionController.vehicles[i].x -= collisionController.vehicles[i].speed;
    }
    stage.update();
  }
}

createjs.Ticker.addEventListener("tick", moveObjects);
