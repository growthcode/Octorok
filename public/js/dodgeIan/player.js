var PLAYER_NAME = "Player",
    PLAYER_RELATIVE_ORIGIN_X = 0, // should not change
    PLAYER_RELATIVE_ORIGIN_Y = 0, // should not change
    PLAYER_RELATIVE_RADIUS = 30,
    PLAYER_START_POS_X = 400,
    PLAYER_START_POS_Y = 30,
    PLAYER_RADIUS = PLAYER_RELATIVE_RADIUS,
    PLAYER_STEP_SIZE = 60,
    PLAYER_HEALTH_POINTS = 100,
    PLAYER_MOVE_LEFT_KEY = 37,
    PLAYER_MOVE_RIGHT_KEY = 39,
    PLAYER_MOVE_UP_KEY = 38,
    PLAYER_MOVE_DOWN_KEY = 40;

var CANVAS_X_MIN = 0,
    CANVAS_Y_MIN = 0,
    CANVAS_X_MAX = canvas.width,
    CANVAS_Y_MAX = canvas.height;

var playerArray=[];

var Player = function(){
  var that = this;
  this.radius = PLAYER_RADIUS
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("red").drawCircle(PLAYER_RELATIVE_ORIGIN_X, PLAYER_RELATIVE_ORIGIN_Y, PLAYER_RELATIVE_RADIUS);
  this.name = PLAYER_NAME;
  this.shape.x = PLAYER_START_POS_X;
  this.shape.y = PLAYER_START_POS_Y;
  this.stepSize = PLAYER_STEP_SIZE;
  this.hp = PLAYER_HEALTH_POINTS;
  this.alive = true;
  this.stepLeft = function() {
    if((this.shape.x - this.radius) > CANVAS_X_MIN) {
      this.shape.x -= this.stepSize
    }
    if(this.shape.x <= this.radius){
      this.shape.x = this.radius;
    }
  }
  this.stepRight = function() {
    if((this.shape.x + this.radius) < CANVAS_X_MAX) {
      this.shape.x += this.stepSize
    }
    if(this.shape.x >= CANVAS_X_MAX - this.radius){
      this.shape.x = CANVAS_X_MAX - this.radius;
    }
  }
  this.stepUp = function() {
    if((this.shape.y - this.radius) > CANVAS_Y_MIN) {
      this.shape.y -= this.stepSize
    }
    if(this.shape.y <= this.radius){
      this.shape.y = this.radius;
    }
  }
  this.stepDown = function() {
    if((this.shape.y + this.radius) < CANVAS_Y_MAX) {
      this.shape.y += this.stepSize
    }
    if(this.shape.y >= CANVAS_Y_MAX - this.radius){
      this.shape.y = CANVAS_Y_MAX - this.radius;
    }
  }

  this.movePlayer = function(event) {
    if (event['keyCode'] === PLAYER_MOVE_LEFT_KEY) {
      this.stepLeft()
      stage.update();
    }
    if (event['keyCode'] === PLAYER_MOVE_RIGHT_KEY) {
      this.stepRight()
      stage.update();
    }
    if (event['keyCode'] === PLAYER_MOVE_UP_KEY) {
      this.stepUp()
      stage.update();
    }
    if (event['keyCode'] === PLAYER_MOVE_DOWN_KEY) {
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
