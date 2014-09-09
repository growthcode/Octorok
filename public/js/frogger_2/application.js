var canvas = document.createElement('canvas');
    canvas.id = "game-canvas"
    canvas.width = 690;
    canvas.height = 598;
    canvas.style.border = "1px solid black";
    document.body.appendChild(canvas);
var stage = new createjs.Stage('game-canvas');

var borderWidth=stage.canvas.width;
var borderHeight=stage.canvas.height;
var rowHeight = stage.canvas.height/13
var columnWidth = stage.canvas.width/15

var movingObject = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = rowHeight;
}

movingObject.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");
movingObject.prototype.speed = 10;

var numOfFrogLives = 3;

var checkIfGameLost = function() {
  if (numOfFrogLives == 0) {
    console.log("You Lost...");
    numOfFrogLives = 3;
  }
}

createjs.Ticker.addEventListener('tick', checkIfGameLost);
