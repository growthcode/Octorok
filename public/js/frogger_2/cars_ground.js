var lane1 = [];
var lane2 = [];

var car1 = new createjs.Shape();
car1.graphics.beginFill("red").drawCircle(0, 0, 20);
car1.x = 100;
car1.y = 400;

var car2 = new createjs.Shape();
car2.graphics.beginFill("red").drawCircle(0, 0, 20);
car2.x = 100;
car2.y = 500;

var truck1 = new createjs.Shape();
truck1.graphics.beginFill("green").drawCircle(0, 0, 20);
truck1.x = 400;
truck1.y = 400;

var truck2 = new createjs.Shape();
truck2.graphics.beginFill("green").drawCircle(0, 0, 20);
truck2.x = 400;
truck2.y = 500;



lane1.push(car1, truck1);
lane2.push(car2, truck2);

stage.addChild(car1, car2, truck1, truck2);
stage.update();

function tick(event) {
  for (var i in lane1) {
    if (lane1[i].x > stage.canvas.width + 100) { lane1[i].x = 0 }
    lane1[i].x += 10
  }
  for (var i in lane2) {
    if (lane2[i].x < 0 - 100) { lane2[i].x = 800 }
    lane2[i].x -= 10
  }
  for (var i in logArray1) {
    if (logArray1[i].x > stage.canvas.width + 100) { logArray1[i].x = 0 }
    logArray1[i].x += 10
  }
  for (var i in logArray2) {
    if (logArray2[i].x < 0 - 100) { logArray2[i].x = 800 }
    logArray2[i].x -= 10
  }
  stage.update();
}

createjs.Ticker.addEventListener("tick", tick);
