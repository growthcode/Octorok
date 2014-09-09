var vehicles = [];

var vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i % 2 == 0) {
      vehicles.push(new movingObject("short", 100, rowHeight * i - rowHeight - 5, "right"));
      vehicles.push(new movingObject("medium", 400, rowHeight * i - rowHeight - 5, "right"));
      vehicles.push(new movingObject("large", 700, rowHeight * i - rowHeight - 5, "right"));
    } else {
      vehicles.push(new movingObject("short", 100, rowHeight * i - rowHeight - 5, "left"));
      vehicles.push(new movingObject("medium", 400, rowHeight * i - rowHeight - 5, "left"));
      vehicles.push(new movingObject("large", 700, rowHeight * i - rowHeight - 5, "left"));
    }
  }
  for (var i in vehicles) {
    if (vehicles[i].size == "short") {
      vehicles[i].shape.x = vehicles[i].posX;
      vehicles[i].shape.y = vehicles[i].posY;
    } else if (vehicles[i].size == "medium") {
      vehicles[i].shape.x = vehicles[i].posX;
      vehicles[i].shape.y = vehicles[i].posY;
    } else {
      vehicles[i].shape.x = vehicles[i].posX;
      vehicles[i].shape.y = vehicles[i].posY;
    }
    stage.addChild(vehicles[i].shape);
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


var froggerStartRoad = new createjs.Bitmap("../assets/frogger_2/road.png");
froggerStartRoad.x = frogStartRoadXPos;
froggerStartRoad.y = frogStartRoadYPos - 50;
froggerStartRoad.scaleX = .74;
froggerStartRoad.scaleY = .3;

var froggerSafeMedian = new createjs.Bitmap("../assets/frogger_2/divider.png");
froggerSafeMedian.x = grassLane6XPos;
froggerSafeMedian.y = grassLane6YPos - 50;
froggerSafeMedian.scaleX = 1;
froggerSafeMedian.scaleY = .45;

var froggerEndGrass = new createjs.Bitmap("../assets/frogger_2/grass.png");
froggerEndGrass.x = frogEndGrassXPos;
froggerEndGrass.y = frogEndGrassYPos-10;
froggerEndGrass.scaleX = .79;
froggerEndGrass.scaleY = .38;


var imageCar1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/lingster/817_NYS-impala.png");
imageCar1.x = car1StartXPos - 10;
imageCar1.y = car1StartYPos -10;
imageCar1.scaleX = 0.13;
imageCar1.scaleY = 0.12;

var imageTruck1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/GroovyDave/2BE_schoolbus_GD.png");
imageTruck1.x = truck1StartXPos - 6;
imageTruck1.y = truck1StartYPos -7;
imageTruck1.scaleX = 0.11;
imageTruck1.scaleY = 0.09;

var imageBus1 = new createjs.Bitmap("http://roadincorporated.com/images/uploads/ferrari_250/top.png");
imageBus1.x = car1StartXPos - 10;
imageBus1.y = car1StartYPos -10;
imageBus1.scaleX = 0.15;
imageBus1.scaleY = 0.15;

var imageCar2 = new createjs.Bitmap("http://roadincorporated.com/images/uploads/ferrari_250/top.png");
imageCar2.x = car2StartXPos - 15;
imageCar2.y = car2StartYPos -10;
imageCar2.scaleX = 0.17;
imageCar2.scaleY = 0.16;

var imagetruck2 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/heruca/Fire_Truck2_SR_hrc.png");
imagetruck2.x = truck2StartXPos -3;
imagetruck2.y = truck2StartYPos - 3;
imagetruck2.scaleX = 0.25;
imagetruck2.scaleY = 0.15;

var imagebus2 = new createjs.Bitmap("http://www.clker.com/cliparts/6/2/7/e/w/Q/blue-bus-180-hi.png");

var lane3Image1 = new createjs.Bitmap("../assets/frogger_2/left_blue_car.png");
lane3Image1.x = carLane3StartXPos + (xDifference *1);
lane3Image1.y = carLane3StartYPos - 3;
lane3Image1.scaleX = .16;
lane3Image1.scaleY = .13;

var lane3Image2 = new createjs.Bitmap("../assets/frogger_2/left_black_car.png");
lane3Image2.x = carLane3StartXPos + (xDifference * 2);
lane3Image2.y = carLane3StartYPos;
lane3Image2.scaleX = .12;
lane3Image2.scaleY = .10;

var lane3Image3 = new createjs.Bitmap("../assets/frogger_2/left_jet.png");
lane3Image3.x = carLane3StartXPos + (xDifference * 3);
lane3Image3.y = carLane3StartYPos;
lane3Image3.scaleX = .11;
lane3Image3.scaleY = .07;

var lane3Image4 = new createjs.Bitmap("../assets/frogger_2/left_tank.png");
lane3Image4.x = carLane3StartXPos + (xDifference * 4 );
lane3Image4.y = carLane3StartYPos;
lane3Image4.scaleX = .22;
lane3Image4.scaleY = .2;

var lane4Image1 = new createjs.Bitmap("../assets/frogger_2/batttt_done.png");
lane4Image1.x = carLane4StartXPos + (xDifference *1);
lane4Image1.y = carLane4StartYPos;
lane4Image1.scaleX = .2;
lane4Image1.scaleY = .3;

var lane4Image2 = new createjs.Bitmap("../assets/frogger_2/right_tank.png");
lane4Image2.x = carLane4StartXPos + (xDifference * 2) - 38;
lane4Image2.y = carLane4StartYPos;
lane4Image2.scaleX = .24;
lane4Image2.scaleY = .2;

var lane4Image3 = new createjs.Bitmap("../assets/frogger_2/launch-d.png");
lane4Image3.x = carLane4StartXPos + (xDifference * 3) ;
lane4Image3.y = carLane4StartYPos;
lane4Image3.scaleX = .11;
lane4Image3.scaleY = .1;

var lane4Image4 = new createjs.Bitmap("../assets/frogger_2/right_bat_man.png");
lane4Image4.x = carLane4StartXPos + (xDifference * 4) -7;
lane4Image4.y = carLane4StartYPos;
lane4Image4.scaleX = .5;
lane4Image4.scaleY = .7;

var lane5Image1 = new createjs.Bitmap("../assets/frogger_2/left_jet.png");
lane5Image1.x = carLane4StartXPos + (xDifference *1);
lane5Image1.y = carLane5StartYPos;
lane5Image1.scaleX = .11;
lane5Image1.scaleY = .07;

var lane5Image2 = new createjs.Bitmap("../assets/frogger_2/left_blue_car.png");
lane5Image2.x = carLane4StartXPos + (xDifference *2) -7;
lane5Image2.y = carLane5StartYPos - 4;
lane5Image2.scaleX = .16;
lane5Image2.scaleY = .13;

var lane5Image3 = new createjs.Bitmap("../assets/frogger_2/left_black_car.png");
lane5Image3.x = carLane4StartXPos + (xDifference *3) - 4;
lane5Image3.y = carLane5StartYPos - 4;
lane5Image3.scaleX = .12;
lane5Image3.scaleY = .10;

var lane5Image4 = new createjs.Bitmap("../assets/frogger_2/left_blue_car.png");
lane5Image4.x = carLane4StartXPos + (xDifference *4);
lane5Image4.y = carLane5StartYPos - 4;
lane5Image4.scaleX = .16;
lane5Image4.scaleY = .13;

imagebus2.x = 710;
imagebus2.y = 440;
imagebus2.scaleX = 0.3;
imagebus2.scaleY = 0.3;


function tick(event) {
  for (var i in vehicles) {
    if (vehicles[i].direction == "right") {
      if (vehicles[i].shape.x > stage.canvas.width + 100) { vehicles[i].shape.x = -100 }
        vehicles[i].shape.x += vehicles[i].speed;
    } else {
      if (vehicles[i].shape.x < -110) { vehicles[i].shape.x = stage.canvas.width + 50 }
        vehicles[i].shape.x -= vehicles[i].speed;
    }
    stage.update();
  }


  for (var i in logs) {
    if (logs[i].direction == "right") {
      if (logs[i].shape.x > stage.canvas.width + 100) { logs[i].shape.x = -100 }
        logs[i].shape.x += logs[i].speed;
    } else {
      if (logs[i].shape.x < -110) { logs[i].shape.x = stage.canvas.width + 50 }
        logs[i].shape.x -= logs[i].speed;
    }
    stage.update();
  }

}

createjs.Ticker.addEventListener("tick", tick);
