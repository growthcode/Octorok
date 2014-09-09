var Log = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Log.prototype = new createjs.Sprite(froggerSpriteData, "smLog");
Log.prototype.speed = 5;

// var logs = [];

var logCreator = function() {
  for (var i = 1; i < 6 ; i++) {
    if (i % 2 == 0) { 
      collisionController.logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      collisionController.logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    } else {
      collisionController.logs.push(new Log(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      collisionController.logs.push(new Log(200, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    }
  }
  for (var i in collisionController.logs) {
    stage.addChild(collisionController.logs[i]);
  }
  stage.update();
}

logCreator();

stage.addChild(frog);
stage.update();