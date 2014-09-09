var landFinish = new createjs.Sprite(froggerSpriteData, "winningGrass");
landFinish.x = 0;
landFinish.y = 0;

var canvas = document.createElement('canvas');
    canvas.id = "game-canvas"
    canvas.width = landFinish.getBounds().width;
    canvas.height = 327;
    canvas.style.border = "1px solid black";
    document.body.appendChild(canvas);
var stage = new createjs.Stage('game-canvas');

stage.addChild(landFinish);
stage.update();

var finishLineBoundary = landFinish.getBounds().height;
var rowHeight = (canvas.height - finishLineBoundary) / 13;
var columnWidth = canvas.width / 16;

var Vehicle = function(posX, posY, direction) {
  this.direction = direction;
  this.x = posX;
  this.y = posY;
  this.height = this.getBounds().height;
  this.width = this.getBounds().width;
}
  
Vehicle.prototype = new createjs.Sprite(froggerSpriteData, "carSedan");
Vehicle.prototype.speed = 5;

var numOfFrogLives = 3;

var checkIfGameLost = function() {
  if (numOfFrogLives == 0) {
    console.log("You Lost...");
    numOfFrogLives = 3;
  }
}

createjs.Ticker.addEventListener('tick', checkIfGameLost);
