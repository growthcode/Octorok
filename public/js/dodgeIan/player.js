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


var player1 = new Player("player", 400, 30, 30);
var player2 = new Player("player2", 400, 30, 30);
var player3 = new Player("player2", 400, 30, 30);

playerArray.push(player1,player2, player3);//should show 3 players

stage.addChild(player1.shape);
stage.addChild(player2.shape);
stage.addChild(player3.shape);
stage.update();

var movePlayer = function(event) {
  if (event['keyCode'] === 39 ) {
    player1.step("right");
    player2.step("right");
    player3.step("right");
    console.log("right");
    stage.update();
  }
  if (event['keyCode'] === 37 ) {
    player1.step("left");
    player2.step("left");
    player3.step("left");

    console.log("left");
    stage.update();
  }
}

$(document).on('keydown', movePlayer);

createjs.Ticker.addEventListener('tick', movePlayer);
