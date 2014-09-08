var Log = function(type, image, posX, posY) {
  if (type == "short") {
    this.width = 50;
  } else if (type == "medium") {
    this.width = 75;
  } else {
    this.width = 100;
  }
  this.height = rowHeight;
  
}

logImgArray = [];

for (var i = 2; i < 7 ; i++){
  new Log("short", imgArray[0], 100, rowHeight * i - rowHeight);
  new Log("medium", imgArray[1], 400, rowHeight * i - rowHeight);
  new Log("large", imgArray[2], 700, rowHeight * i - rowHeight);
}

var logWidth=50;
var logHeight=rowHeight;
var longLogWidth=75;
var longLogHeight=rowHeight;

var log1StartXPos=100;
var log1StartYPos=rowHeight;
var log2StartXPos=100;
var log2StartYPos=rowHeight * 2;
var longLog1StartXPos=400;
var longLog1StartYPos=rowHeight;
var longLog2StartXPos=400;
var longLog2StartYPos=rowHeight * 2;

var logArray1 = [];
var logArray2 = [];

var log1 = new createjs.Shape();
log1.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log1.x = log1StartXPos;
log1.y = log1StartYPos;

var log2 = new createjs.Shape();
log2.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log2.x = log2StartXPos;
log2.y = log2StartYPos;

var longLog1 = new createjs.Shape();
longLog1.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
longLog1.x = longLog1StartXPos;
longLog1.y = longLog1StartYPos;

var longLog2 = new createjs.Shape();
longLog2.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
longLog2.x = longLog2StartXPos;
longLog2.y = longLog2StartYPos;

logArray1.push(log1, longLog1);
logArray2.push(log2, longLog2);

stage.addChild(log1, log2, longLog1, longLog2);
stage.update();
