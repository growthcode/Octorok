var logArray1 = [];
var logArray2 = [];

var log1 = new createjs.Shape();
log1.graphics.beginFill("red").drawCircle(0, 0, 20);
log1.x = 100;
log1.y = 100;

var log2 = new createjs.Shape();
log2.graphics.beginFill("red").drawCircle(0, 0, 20);
log2.x = 100;
log2.y = 200;

var long1 = new createjs.Shape();
long1.graphics.beginFill("red").drawCircle(0, 0, 20);
long1.x = 400;
long1.y = 100;

var long2 = new createjs.Shape();
long2.graphics.beginFill("red").drawCircle(0, 0, 20);
long2.x = 400;
long2.y = 200;

logArray1.push(log1, long1);
logArray2.push(log2, long2);

stage.addChild(log1, log2, long1, long2);
stage.update();
