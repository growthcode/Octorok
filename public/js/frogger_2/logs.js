var Log = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Log.prototype.speed = 5;

var SmallLog = function(posX, posY, direction) {
  Log.prototype.constructor.call(this, posX, posY, direction);
}
SmallLog.prototype = new createjs.Sprite(froggerSpriteData, "smLog");
SmallLog.prototype.speed = Log.prototype.speed;

var MediumLog = function(posX, posY, direction) {
  Log.prototype.constructor.call(this, posX, posY, direction);
}
MediumLog.prototype = new createjs.Sprite(froggerSpriteData, "medLog");
MediumLog.prototype.speed = Log.prototype.speed;

var LargeLog = function(posX, posY, direction) {
  Log.prototype.constructor.call(this, posX, posY, direction);
}
LargeLog.prototype = new createjs.Sprite(froggerSpriteData, "lgLog");
LargeLog.prototype.speed = Log.prototype.speed;
