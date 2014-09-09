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
var logLane1Vel=10;
var logLane2Vel=10;

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

var froggerSafeGrass = new createjs.Bitmap("http://www.colourbox.com/preview/3694639-208698-top-view-of-green-grass-andflowers-background.jpg");
froggerSafeGrass.x = grassLane6XPos;
froggerSafeGrass.y = grassLane6YPos - 50;
froggerSafeGrass.scaleX = 1;
froggerSafeGrass.scaleY = 0.08;

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

var imgLane1 = [imageCar1, imageTruck1, imageBus1];
var imgLane2 = [imageCar2, imagetruck2, imagebus2];
var imgLane3 = [lane3Image1, lane3Image2, lane3Image3, lane3Image4];
var imgLane4 = [lane4Image1, lane4Image2, lane4Image3, lane4Image4];
var imgLane5 = [lane5Image1, lane5Image2, lane5Image3, lane5Image4]

var car1 = new createjs.Shape();
car1.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car1.x = car1StartXPos;
car1.y = car1StartYPos;

var car2 = new createjs.Shape();
car2.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car2.x = car2StartXPos;
car2.y = car2StartYPos;

var truck1 = new createjs.Shape();
truck1.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, truckWidth, truckHeight);
truck1.x = truck1StartXPos;
truck1.y = truck1StartYPos;

var truck2 = new createjs.Shape();
truck2.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, truckWidth, truckHeight);
truck2.x = truck2StartXPos;
truck2.y = truck2StartYPos;

var car4 = new createjs.Shape();
car4.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car4.x = carLane3StartXPos + (xDifference *1);
car4.y = carLane3StartYPos;

var car5 = new createjs.Shape();
car5.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car5.x = carLane3StartXPos + (xDifference * 2);
car5.y = carLane3StartYPos;

var car6 = new createjs.Shape();
car6.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car6.x = carLane3StartXPos + (xDifference * 3);
car6.y = carLane3StartYPos;

var car7 = new createjs.Shape();
car7.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car7.x = carLane3StartXPos + (xDifference * 4 );
car7.y = carLane3StartYPos;

var car8 = new createjs.Shape();
car8.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car8.x = carLane4StartXPos + (xDifference *1);
car8.y = carLane4StartYPos;

var car9 = new createjs.Shape();
car9.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car9.x = carLane4StartXPos + (xDifference * 2);
car9.y = carLane4StartYPos;

var car10 = new createjs.Shape();
car10.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car10.x = carLane4StartXPos + (xDifference * 3);
car10.y = carLane4StartYPos;

var car11 = new createjs.Shape();
car11.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car11.x = carLane4StartXPos + (xDifference * 4 );
car11.y = carLane4StartYPos;

var car12 = new createjs.Shape();
car12.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car12.x = carLane4StartXPos + (xDifference *1);
car12.y = carLane5StartYPos;

var car13 = new createjs.Shape();
car13.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car13.x = carLane4StartXPos + (xDifference * 2);
car13.y = carLane5StartYPos;

var car14 = new createjs.Shape();
car14.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car14.x = carLane4StartXPos + (xDifference * 3);
car14.y = carLane5StartYPos;

var car15 = new createjs.Shape();
car15.graphics.beginFill("rgba(255,255,255,0)").drawRect(0, 0, carWidth, carHeight);
car15.x = carLane4StartXPos + (xDifference * 4 );
car15.y = carLane5StartYPos;

lane1.push(car1, truck1);
lane2.push(car2, truck2);
lane3 = [car4, car5, car6, car7];
lane4 = [car8, car9, car10, car11];
lane5 = [car12, car13, car14, car15];

var vehicles = [car1,truck1,car2,truck2,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15]

stage.addChild(car1, car2, truck1, truck2, imgLane2[0], imgLane2[1], imgLane1[0],imgLane1[1], car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, lane3Image1, lane3Image2, lane3Image3, lane3Image4, lane4Image1, lane4Image2, lane4Image3, lane4Image4, lane5Image1, lane5Image2, lane5Image3, lane5Image4, froggerSafeMedian, froggerStartRoad, froggerEndGrass);
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
    imgLane2[i].x -= lane1Vel
  }

  for (var i in imgLane3){
    if (imgLane3[i].x > stage.canvas.width + 450){imgLane3[i].x = -200}
      imgLane3[i].x += lane1Vel
  }

  for (var i in imgLane4){
    if (imgLane4[i].x < 0 -300){imgLane4[i].x = 800}
      imgLane4[i].x -= lane1Vel
  }

   for (var i in imgLane5){
    if (imgLane5[i].x > stage.canvas.width + 450){imgLane5[i].x = -200}
      imgLane5[i].x += lane1Vel
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
