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

var movingObject = function(type, posX, posY, direction) {
  this.direction = direction;
  this.posX = posX;
  this.posY = posY;
  this.height = rowHeight;
  this.shape = new createjs.Shape();
  if (type == "short") {
    this.width = 50;
    this.shape.graphics.beginFill("blue").drawRect(0, 0, this.width, this.height);
  } else if (type == "medium") {
    this.width = 75;
    this.shape.graphics.beginFill("red").drawRect(0, 0, this.width, this.height);
  } else {
    this.width = 100;
    this.shape.graphics.beginFill("green").drawRect(0, 0, this.width, this.height);
  }  
}

// movingObject.prototype = new createjs.()

movingObject.prototype.speed = 10;
var numOfFrogLives = 3;

var checkIfGameLost = function() {
  if (numOfFrogLives == 0) {
    console.log("You Lost...");
    numOfFrogLives = 3;
  }
}

createjs.Ticker.addEventListener('tick', checkIfGameLost);
