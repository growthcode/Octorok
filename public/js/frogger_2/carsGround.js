var carWidth=100;
var carHeight=rowHeight - (canvas.height/60);
var truckWidth=180;
var truckHeight=rowHeight - (canvas.height/60);

xDifference = 300;
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

var lane1Vel=10;
var lane2Vel=10;
var logLane1Vel=10;
var logLane2Vel=10;

var lane1 = [];
var lane2 = [];
var lane3 = [];
var lane4 = [];
var imgLane1 = [];
var imgLane2 = [];



var froggerSafeGrass = new createjs.Bitmap("http://www.colourbox.com/preview/3694639-208698-top-view-of-green-grass-andflowers-background.jpg");
froggerSafeGrass.x = grassLane6XPos;
froggerSafeGrass.y = grassLane6YPos - 50;
froggerSafeGrass.scaleX = 1;
froggerSafeGrass.scaleY = 0.08;

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

var car4 = new createjs.Shape();
car4.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
car4.x = carLane3StartXPos + (xDifference *1);
car4.y = carLane3StartYPos;

var car5 = new createjs.Shape();
car5.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
car5.x = carLane3StartXPos + (xDifference * 2);
car5.y = carLane3StartYPos;

var car6 = new createjs.Shape();
car6.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
car6.x = carLane3StartXPos + (xDifference * 3);
car6.y = carLane3StartYPos;

var car7 = new createjs.Shape();
car7.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
car7.x = carLane3StartXPos + (xDifference * 4 );
car7.y = carLane3StartYPos;

var car8 = new createjs.Shape();
car8.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
car8.x = carLane4StartXPos + (xDifference *1);
car8.y = carLane4StartYPos;

var car9 = new createjs.Shape();
car9.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
car9.x = carLane4StartXPos + (xDifference * 2);
car9.y = carLane4StartYPos;

var car10 = new createjs.Shape();
car10.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
car10.x = carLane4StartXPos + (xDifference * 3);
car10.y = carLane4StartYPos;

var car11 = new createjs.Shape();
car11.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
car11.x = carLane4StartXPos + (xDifference * 4 );
car11.y = carLane4StartYPos;





var car12 = new createjs.Shape();
car12.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
car12.x = carLane4StartXPos + (xDifference *1);
car12.y = carLane5StartYPos;

var car13 = new createjs.Shape();
car13.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
car13.x = carLane4StartXPos + (xDifference * 2);
car13.y = carLane5StartYPos;

var car14 = new createjs.Shape();
car14.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
car14.x = carLane4StartXPos + (xDifference * 3);
car14.y = carLane5StartYPos;

var car15 = new createjs.Shape();
car15.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
car15.x = carLane4StartXPos + (xDifference * 4 );
car15.y = carLane5StartYPos;

lane1.push(car1, truck1);
lane2.push(car2, truck2);
lane3 = [car4, car5, car6, car7];
lane4 = [car8, car9, car10, car11];
lane5 = [car12, car13, car14, car15];

var vehicles = [car1,truck1,car2,truck2,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15]

stage.addChild(car1, car2, truck1, truck2, imgLane2[0], imgLane2[1], imgLane1[0],imgLane1[1], car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, froggerSafeGrass);

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

  for (var i in lane3){
    if (lane3[i].x > stage.canvas.width + 450){lane3[i].x = -200}
      lane3[i].x += lane1Vel
  }

  for (var i in lane4){
    if (lane4[i].x < 0 - 300) { lane4[i].x = 800}
      lane4[i].x -= lane2Vel
  }

  for (var i in lane5){
    if (lane5[i].x > stage.canvas.width + 450){lane5[i].x = -200}
      lane5[i].x += lane1Vel
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
