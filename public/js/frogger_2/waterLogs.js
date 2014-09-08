var movingObject = function(type, posX, posY, speed) {
  this.speed = speed
  this.posX = posX;
  this.posY = posY;
  this.height = rowHeight;
  this.shape = new createjs.Shape();
  if (type == "short") {
    this.width = 50;
    this.shape.graphics.beginFill("blue").drawRect(0, 0, this.width, this.height);
  } else if (type == "medium") {
    this.width = 75;
    this.shape.graphics.beginFill("red").drawRect(0, 0, this.width, this.height);
  } else {
    this.width = 100;
    this.shape.graphics.beginFill("green").drawRect(0, 0, this.width, this.height);
  }  
}

var movingObjectMovingLeft = [];
var movingObjectMovingRight = [];

var logCreator = function() {
  for (var i = 2; i < 7 ; i++) {
    if (i % 2 == 0) {
      movingObjectMovingLeft.push(new movingObject("short", 100, rowHeight * i - rowHeight));
      movingObjectMovingLeft.push(new movingObject("medium", 400, rowHeight * i - rowHeight));
      movingObjectMovingLeft.push(new movingObject("large", 700, rowHeight * i - rowHeight));
    } else {
      movingObjectMovingRight.push(new movingObject("short", 100, rowHeight * i - rowHeight));
      movingObjectMovingRight.push(new movingObject("medium", 400, rowHeight * i - rowHeight));
      movingObjectMovingRight.push(new movingObject("large", 700, rowHeight * i - rowHeight));
    }
  }
  for (var i in movingObjectMovingLeft) {
    if (movingObjectMovingLeft[i].type == "short") {
      movingObjectMovingLeft[i].shape.x = movingObjectMovingLeft[i].posX;
      movingObjectMovingLeft[i].shape.y = movingObjectMovingLeft[i].posY;
    } else if (movingObjectMovingLeft[i].type == "medium") {
      movingObjectMovingLeft[i].shape.x = movingObjectMovingLeft[i].posX;
      movingObjectMovingLeft[i].shape.y = movingObjectMovingLeft[i].posY;
    } else {
      movingObjectMovingLeft[i].shape.x = movingObjectMovingLeft[i].posX;
      movingObjectMovingLeft[i].shape.y = movingObjectMovingLeft[i].posY;
    }
    stage.addChild(movingObjectMovingLeft[i].shape);
  }
  for (var i in movingObjectMovingRight) {
    if (movingObjectMovingRight[i].type == "short") {
      movingObjectMovingRight[i].shape.x = movingObjectMovingRight[i].posX;
      movingObjectMovingRight[i].shape.y = movingObjectMovingRight[i].posY;
    } else if (movingObjectMovingRight[i].type == "medium") {
      movingObjectMovingRight[i].shape.x = movingObjectMovingRight[i].posX;
      movingObjectMovingRight[i].shape.y = movingObjectMovingRight[i].posY;
    } else {
      movingObjectMovingRight[i].shape.x = movingObjectMovingRight[i].posX;
      movingObjectMovingRight[i].shape.y = movingObjectMovingRight[i].posY;
    }
    stage.addChild(movingObjectMovingRight[i].shape);
  }
  stage.update();
}
logCreator();

// var logWidth=50;
// var logHeight=rowHeight;
// var longLogWidth=75;
// var longLogHeight=rowHeight;

// var log1StartXPos=100;
// var log1StartYPos=rowHeight;
// var log2StartXPos=100;
// var log2StartYPos=rowHeight * 2;
// var longLog1StartXPos=400;
// var longLog1StartYPos=rowHeight;
// var longLog2StartXPos=400;
// var longLog2StartYPos=rowHeight * 2;

// var logArray1 = [];
// var logArray2 = [];

// var log1 = new createjs.Shape();
// log1.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
// log1.x = log1StartXPos;
// log1.y = log1StartYPos;

// var log2 = new createjs.Shape();
// log2.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
// log2.x = log2StartXPos;
// log2.y = log2StartYPos;

// var longLog1 = new createjs.Shape();
// longLog1.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
// longLog1.x = longLog1StartXPos;
// longLog1.y = longLog1StartYPos;

// var longLog2 = new createjs.Shape();
// longLog2.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
// longLog2.x = longLog2StartXPos;
// longLog2.y = longLog2StartYPos;

// logArray1.push(log1, longLog1);
// logArray2.push(log2, longLog2);

// stage.addChild(log1, log2, longLog1, longLog2);
// stage.update();
