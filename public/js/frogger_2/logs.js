var Log = function(posX, posY, direction, speed) {
  this.speed = speed;
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Log.prototype.speed = 2;

var SmallLog = function(posX, posY, direction, speed) {
  Log.prototype.constructor.call(this, posX, posY, direction, speed);
}
SmallLog.prototype = new createjs.Sprite(froggerSpriteData, "smLog");
SmallLog.prototype.speed = Log.prototype.speed;

var MediumLog = function(posX, posY, direction, speed) {
  Log.prototype.constructor.call(this, posX, posY, direction, speed);
}
MediumLog.prototype = new createjs.Sprite(froggerSpriteData, "medLog");
MediumLog.prototype.speed = Log.prototype.speed;

var LargeLog = function(posX, posY, direction, speed) {
  Log.prototype.constructor.call(this, posX, posY, direction, speed);
}
LargeLog.prototype = new createjs.Sprite(froggerSpriteData, "lgLog");
LargeLog.prototype.speed = Log.prototype.speed;
