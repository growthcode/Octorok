var logWidth=50;
var logHeight=25;
var longLogWidth=75;
var longLogHeight=25;
var log1StartXPos=100;

var logArray1 = [];
var logArray2 = [];



var log1 = new createjs.Shape();
log1.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log1.x = 100;
log1.y = 100;

var log2 = new createjs.Shape();
log2.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log2.x = 100;
log2.y = 200;

var longLog1 = new createjs.Shape();
longLog1.graphics.beginFill("red").drawRect(0, longLogWidth, longLogHeight);
longLog1.x = 400;
longLog1.y = 100;

var longLog2 = new createjs.Shape();
longLog2.graphics.beginFill("red").drawRect(0, longLogWidth, longLogHeight);
longLog2.x = 400;
longLog2.y = 200;

logArray1.push(log1, longLog1);
logArray2.push(log2, longLog2);

stage.addChild(log1, log2, longLog1, longLog2);
stage.update();
