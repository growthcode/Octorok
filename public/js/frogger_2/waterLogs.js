var Log = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Log.prototype = new createjs.Sprite(froggerSpriteData, "smLog");
Log.prototype.speed = 10;

var logs = [];

var logCreator = function() {
  for (var i = 1; i < 6 ; i++) {
    if (i % 2 == 0) { 
      logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    } else {
      logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    }
  }
  for (var i in logs) {
    stage.addChild(logs[i]);
  }
  stage.update();
}

logCreator();
