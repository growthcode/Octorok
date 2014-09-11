var Snake = function(posX, posY, direction, speed) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction, speed);
}
Snake.prototype = new createjs.Sprite(froggerSpriteData, "snake");
