var playerArray=[];
var Player = function(name, posX, posY, radius, gravatar){
  this.radius = radius
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("red").drawCircle(0, 0, radius);
  this.name = name;
  this.shape.x = posX;
  this.shape.y = posY;
  this.stepSize = 60;
  this.hp = 200;
  this.alive = true;
  var that = this;
  this.stepLeft = function() {
    if((this.shape.x - this.radius) > 0) {
      this.shape.x -= this.stepSize
    }
    if(this.shape.x <= this.radius){
      this.shape.x = this.radius;
    }
  }
  this.stepRight = function() {
    if((this.shape.x + this.radius) < canvas.width) {
      this.shape.x += this.stepSize
    }
    if(this.shape.x >= canvas.width - this.radius){
      this.shape.x = canvas.width - this.radius;
    }
  }
  this.stepUp = function() {
    if((this.shape.y - this.radius) > 0) {
      this.shape.y -= this.stepSize
    }
    if(this.shape.y <= this.radius){
      this.shape.y = this.radius;
    }
  }
  this.stepDown = function() {
    if((this.shape.y + this.radius) < canvas.height) {
      this.shape.y += this.stepSize
    }
    if(this.shape.y >= canvas.height - this.radius){
      this.shape.y = canvas.height - this.radius;
    }
  }
  this.movePlayer = function(event) {
    if (event['keyCode'] === 37) {
      this.stepLeft()
      stage.update();
    }
    if (event['keyCode'] === 39) {
      this.stepRight()
      stage.update();
    }
    if (event['keyCode'] === 38) {
      this.stepUp()
      stage.update();
    }
    if (event['keyCode'] === 40) {
      this.stepDown()
      stage.update();
    }
  }.bind(this)
}

//Currently showing 1 player, multiple player collision works as well
var player1 = new Player("player", 400, 30, 30);

playerArray.push(player1);

stage.addChild(player1.shape);
stage.update();

$(document).on('keydown', player1.movePlayer);
