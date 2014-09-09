var Vehicle = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}
  
Vehicle.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");
Vehicle.prototype.speed = 5;



