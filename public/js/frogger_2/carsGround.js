var carWidth=100;
var carHeight=rowHeight - (canvas.height/60);
var truckWidth=180;
var truckHeight=rowHeight - (canvas.height/60);

car1StartXPos=100;
car1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
car2StartXPos=100;
car2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);
truck1StartXPos=400;
truck1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
truck2StartXPos=400;
truck2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);

var lane1Vel=10;
var lane2Vel=10;
var logLane1Vel=10;
var logLane2Vel=10;

var lane1 = [];
var lane2 = [];
var imgLane1 = [];
var imgLane2 = [];




var imageCar1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/lingster/817_NYS-impala.png");
imageCar1.x = car1StartXPos - 10;
imageCar1.y = car1StartYPos -10;
imageCar1.scaleX = 0.12;
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
imageCar2.x = car2StartXPos - 10;
imageCar2.y = car2StartYPos -10;
imageCar2.scaleX = 0.15;
imageCar2.scaleY = 0.15;

var imagetruck2 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/heruca/Fire_Truck2_SR_hrc.png");
imagetruck2.x = truck2StartXPos -3;
imagetruck2.y = truck2StartYPos - 3;
imagetruck2.scaleX = 0.25;
imagetruck2.scaleY = 0.15;

var imagebus2 = new createjs.Bitmap("http://www.clker.com/cliparts/6/2/7/e/w/Q/blue-bus-180-hi.png");
imagebus2.x = 710;
imagebus2.y = 440;
imagebus2.scaleX = 0.3;
imagebus2.scaleY = 0.3;

var imgLane1 = [imageCar1, imageTruck1, imageBus1];
var imgLane2 = [imageCar2, imagetruck2, imagebus2];

var car1 = new createjs.Shape();
car1.graphics.beginFill("white").drawRect(0, 0, carWidth, carHeight);
car1.x = car1StartXPos;
car1.y = car1StartYPos;

var car2 = new createjs.Shape();
car2.graphics.beginFill("white").drawRect(0, 0, carWidth, carHeight);
car2.x = car2StartXPos;
car2.y = car2StartYPos;

var truck1 = new createjs.Shape();
truck1.graphics.beginFill("white").drawRect(0, 0, truckWidth, truckHeight);
truck1.x = truck1StartXPos;
truck1.y = truck1StartYPos;

var truck2 = new createjs.Shape();
truck2.graphics.beginFill("white").drawRect(0, 0, truckWidth, truckHeight);
truck2.x = truck2StartXPos;
truck2.y = truck2StartYPos;

lane1.push(car1, truck1);
lane2.push(car2, truck2);


stage.addChild(car1, car2, truck1, truck2, imgLane2[0], imgLane2[1], imgLane1[0],imgLane1[1]);
stage.update();

function tick(event) {
  for (var i in lane1) {
    if (lane1[i].x > stage.canvas.width + 100) { lane1[i].x = -200 }
    lane1[i].x += lane1Vel
  }

  for (var i in imgLane1){
     if (imgLane1[i].x > stage.canvas.width + 100) {imgLane1[i].x = -200}
      imgLane1[i].x += lane1Vel
  }

  for(var i in imgLane2){
    if (imgLane2[i].x < 0- 200) {imgLane2[i].x = 800}
    imgLane2[i].x -= lane1Vel;
  }

  for (var i in lane2) {
    if (lane2[i].x < 0 - 200) { lane2[i].x = 800 }
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
