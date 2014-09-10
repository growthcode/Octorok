var Vehicle = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

Vehicle.prototype.speed = 5;

var Sedan = function(posX, posY, direction) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction);
}
Sedan.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");

var Ferrari = function(posX, posY, direction) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction);
}
Ferrari.prototype = new createjs.Sprite(froggerSpriteData, "carRacecar1");

var Mazzeratti = function(posX, posY, direction) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction);
}
Mazzeratti.prototype = new createjs.Sprite(froggerSpriteData, "carRacecar2");

var Buggatti = function(posX, posY, direction) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction);
}
Buggatti.prototype = new createjs.Sprite(froggerSpriteData, "carRacecar3");

var Truck = function(posX, posY, direction) {
  Vehicle.prototype.constructor.call(this, posX, posY, direction);
}
Truck.prototype = new createjs.Sprite(froggerSpriteData, "truck");

Sedan.prototype.speed = Vehicle.prototype.speed;
Ferrari.prototype.speed = Vehicle.prototype.speed;
Mazzeratti.prototype.speed = Vehicle.prototype.speed;
Truck.prototype.speed = Vehicle.prototype.speed;
Buggatti.prototype.speed = Vehicle.prototype.speed;

