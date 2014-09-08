var movingObject = function(type, posX, posY, direction) {
  this.direction = direction;
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

movingObject.prototype.speed = 10;

var logs = [];
// var movingObjectMovingRight = [];

var logCreator = function() {
  for (var i = 2; i < 7 ; i++) {
    if (i % 2 == 0) {
      logs.push(new movingObject("short", 100, rowHeight * i - rowHeight, "left"));
      logs.push(new movingObject("medium", 400, rowHeight * i - rowHeight, "left"));
      logs.push(new movingObject("large", 700, rowHeight * i - rowHeight, "left"));
    } else {
      logs.push(new movingObject("short", 100, rowHeight * i - rowHeight, "right"));
      logs.push(new movingObject("medium", 400, rowHeight * i - rowHeight, "right"));
      logs.push(new movingObject("large", 700, rowHeight * i - rowHeight, "right"));
    }
  }
  for (var i in logs) {
    if (logs[i].type == "short") {
      logs[i].shape.x = logs[i].posX;
      logs[i].shape.y = logs[i].posY;
    } else if (logs[i].type == "medium") {
      logs[i].shape.x = logs[i].posX;
      logs[i].shape.y = logs[i].posY;
    } else {
      logs[i].shape.x = logs[i].posX;
      logs[i].shape.y = logs[i].posY;
    }
    stage.addChild(logs[i].shape);
  }
  stage.update();
}

logCreator();
