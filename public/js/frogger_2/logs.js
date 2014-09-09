var Log = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Log.prototype = new createjs.Sprite(froggerSpriteData, "smLog");
Log.prototype.speed = 5;
