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

var Log = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = rowHeight;
}

Log.prototype = new createjs.Sprite(froggerSpriteData, "medLog");
Log.prototype.speed = 10;

var Vehicle = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = rowHeight;
}

Vehicle.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");
Vehicle.prototype.speed = 10;

var numOfFrogLives = 3;

var checkIfGameLost = function() {
  if (numOfFrogLives == 0) {
    console.log("You Lost...");
    numOfFrogLives = 3;
  }
}

createjs.Ticker.addEventListener('tick', checkIfGameLost);
