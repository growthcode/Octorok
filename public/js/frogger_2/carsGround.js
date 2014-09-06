var carWidth=50;
var carHeight=rowHeight - 10;
var truckWidth=75;
var truckHeight=rowHeight - 10;

car1StartXPos=100;
car1StartYPos=borderHeight - rowHeight * 2 + 5;
car2StartXPos=100;
car2StartYPos=borderHeight - rowHeight * 4 + 5;
truck1StartXPos=400;
truck1StartYPos=borderHeight - rowHeight * 2 + 5;
truck2StartXPos=400;
truck2StartYPos=borderHeight - rowHeight * 4 + 5;

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

var car2 = new createjs.Shape();
car2.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
car2.x = car2StartXPos;
car2.y = car2StartYPos;

var truck1 = new createjs.Shape();
truck1.graphics.beginFill("green").drawRect(0, 0, truckWidth, truckHeight);
truck1.x = truck1StartXPos;
truck1.y = truck1StartYPos;

var truck2 = new createjs.Shape();
truck2.graphics.beginFill("green").drawRect(0, 0, truckWidth, truckHeight);
truck2.x = truck2StartXPos;
truck2.y = truck2StartYPos;

lane1.push(car1, truck1);
lane2.push(car2, truck2);

stage.addChild(car1, car2, truck1, truck2);
stage.update();

function tick(event) {
  for (var i in lane1) {
    if (lane1[i].x > stage.canvas.width + 100) { lane1[i].x = 0 }
    lane1[i].x += lane1Vel
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
