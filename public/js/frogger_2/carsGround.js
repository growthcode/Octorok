var carWidth=50;
var carHeight=rowHeight - (canvas.height/60);
var truckWidth=75;
var truckHeight=rowHeight - (canvas.height/60);

car1StartXPos=100;
car1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
car2StartXPos=100;
car2StartYPos=borderHeight - rowHeight * 4 + (canvas.height/120);
truck1StartXPos=400;
truck1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
truck2StartXPos=400;
truck2StartYPos=borderHeight - rowHeight * 4 + (canvas.height/120);

var lane1Vel=10;
var lane2Vel=10;
var logLane1Vel=10;
var logLane2Vel=10;

var lane1 = [];
var lane2 = [];

var car1 = new createjs.Shape();
car1.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
car1.x = car1StartXPos;
car1.y = car1StartYPos;

var imageCar1 = new createjs.Bitmap("http://roadincorporated.com/images/uploads/ferrari_250/top.png");
imageCar1.x = car2StartXPos - 10;
imageCar1.y = car2StartYPos -10;
imageCar1.scaleX = 0.15;
imageCar1.scaleY = 0.15;

var imagetruck1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/heruca/Fire_Truck2_SR_hrc.png");
imagetruck1.x = truck2StartXPos -3;
imagetruck1.y = truck2StartYPos - 3;
imagetruck1.scaleX = 0.25;
imagetruck1.scaleY = 0.15;

var imagebus1 = new createjs.Bitmap("http://www.clker.com/cliparts/6/2/7/e/w/Q/blue-bus-180-hi.png");
imagebus1.x = 710;
imagebus1.y = 440;
imagebus1.scaleX = 0.3;
imagebus1.scaleY = 0.3;

var lane3 = [imageCar1, imagetruck1, imagebus1];

var car2 = new createjs.Shape();
car2.graphics.beginFill("white").drawRect(0, 0, carWidth, carHeight);
car2.x = car2StartXPos;
car2.y = car2StartYPos;

var truck1 = new createjs.Shape();
truck1.graphics.beginFill("green").drawRect(0, 0, truckWidth, truckHeight);
truck1.x = truck1StartXPos;
truck1.y = truck1StartYPos;

var truck2 = new createjs.Shape();
truck2.graphics.beginFill("white").drawRect(0, 0, truckWidth, truckHeight);
truck2.x = truck2StartXPos;
truck2.y = truck2StartYPos;

lane1.push(car1, truck1);
lane2.push(car2, truck2);


stage.addChild(car1, car2, truck1, truck2, lane3[0], lane3[1]);
stage.update();

function tick(event) {
  for (var i in lane1) {
    if (lane1[i].x > stage.canvas.width + 100) { lane1[i].x = 0 }
    lane1[i].x += lane1Vel
  }

  for(var i in lane3){
  if(lane3[i].x < 0- 100) {lane3[i].x = 800}
  lane3[i].x -= lane1Vel;
}

  for (var i in lane2) {
    if (lane2[i].x < 0 - 100) { lane2[i].x = 800 }
    lane2[i].x -= lane2Vel
  }
  for (var i in logArray1) {
    if (logArray1[i].x > stage.canvas.width + 100) { logArray1[i].x = 0 }
    logArray1[i].x += logLane1Vel
  }
  for (var i in logArray2) {
    if (logArray2[i].x < 0 - 100) { logArray2[i].x = 800 }
    logArray2[i].x -= logLane2Vel
  }

  stage.update();
}

createjs.Ticker.addEventListener("tick", tick);
