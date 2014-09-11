// var Snake = function(posX, posY, direction, speed) {
//   Vehicle.prototype.constructor.call(this, posX, posY, direction, speed);
// }
// Snake.prototype = new createjs.Sprite(froggerSpriteData, "snake");

var snakeAnimation = new createjs.Sprite(froggerSpriteData, "snake");
snakeAnimation.x = 200;
snakeAnimation.y = 60;
stage.addChild(snakeAnimation);
snakeAnimation.gotoAndStop("snake")
