var vehicles = [];

var vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i % 2 == 0) {
      vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    } else {
      vehicles.push(new Vehicle(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      vehicles.push(new Vehicle(140, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      vehicles.push(new Vehicle(280, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    }
  }
  for (var i in vehicles) {
    stage.addChild(vehicles[i]);
  }
  stage.update();
}

vehicleCreator();

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
  for (var i in logs) {
    if (logs[i].direction == "right") {
      if (logs[i].x > stage.canvas.width + 100) { logs[i].x = -100 }
        logs[i].x += logs[i].speed;
    } else {
      if (logs[i].x < -110) { logs[i].x = stage.canvas.width + 50 }
        logs[i].x -= logs[i].speed;
    }
    stage.update();
  }
  for (var i in vehicles) {
    if (vehicles[i].direction == "right") {
      if (vehicles[i].x > stage.canvas.width + 100) { vehicles[i].x = -100 }
        vehicles[i].x += vehicles[i].speed;
    } else {
      if (vehicles[i].x < -110) { vehicles[i].x = stage.canvas.width + 50 }
        vehicles[i].x -= vehicles[i].speed;
    }
    stage.update();
  }
}

createjs.Ticker.addEventListener("tick", moveObjects);
