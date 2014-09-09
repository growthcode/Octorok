var Vehicle = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}

// var giveRandomCar = function () {
//   var cars = ["carSedan", "carRacecar1", "carRacecar2"];
//   var randomNumber = Math.floor(Math.random() * ((cars.length - 1) + 1));
//   return cars[randomNumber];
// }
Vehicle.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");
Vehicle.prototype.speed = 5;
// Vehicle.prototype.setCar = function() {
//   this._animation.name = giveRandomCar();
// }

// var Sedan = function(posX, posY, direction) {
//   Vehicle.prototype.constructor.call(this, posX, posY, direction);
// }

// Sedan.prototype = createjs.Sprite(froggerSpriteData, "carSedan");
// Sedan.prototype.speed = Vehicle.prototype.speed;
