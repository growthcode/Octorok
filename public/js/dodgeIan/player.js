var playerArray=[];
var Player = function(name, posX, posY, radius, gravatar){
  this.radius = radius
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("red").drawCircle(0, 0, radius);
  this.name = name;
  this.shape.x = posX;
  this.shape.y = posY;
  this.stepSize = 10;
  this.hp = 100;
  this.alive = true;
  var that = this;
  this.step = function(direction) {
    if (direction == "left") {
      that.shape.x -= this.stepSize;
    } else {
      that.shape.x += this.stepSize;
    }
  }
}

//Currently showing 1 player, multiple player collision works as well
var player1 = new Player("player", 400, 30, 30);

playerArray.push(player1);

stage.addChild(player1.shape);
stage.update();

var movePlayer = function(event) {
  if (event['keyCode'] === 39 ) {
    player1.step("right");
    stage.update();
  }
  if (event['keyCode'] === 37 ) {
    player1.step("left");
    stage.update();
  }
}

$(document).on('keydown', movePlayer);

createjs.Ticker.addEventListener('tick', movePlayer);
