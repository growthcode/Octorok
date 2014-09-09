var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;
var frogXStart = (canvas.width / 2) - 23 / 2;
var frogYStart = canvas.height - 20.5;

var Frog = function(posX, posY) {
  this.lives = 3
  var that = this;
  this.x = frogXStart;
  this.y = frogYStart;
  this.width = this.getBounds().width;
  this.height = this.getBounds().height;
  this.resetPosition = function() {
    that.x = frogXStart
    that.y = frogYStart
    stage.update();
  }
  this.keepInBounds = function() {
    if (that.x >= (canvas.width - that.width)) {
      that.x = canvas.width - that.width;
    }
    if (that.x <= that.width) {
      that.x = that.width;
    }
    if (that.y >= (canvas.height - that.height)) {
      that.y = canvas.height - that.height;
    }
    if (that.y <= that.height){
      that.y = that.height;
    }
  }
  this.move = function(direction) {
    if (direction == "up") { that.y = that.y - verticalMoveDistance; }
    if (direction == "down") { that.y = that.y + verticalMoveDistance; }
    if (direction == "left") { that.x = that.x - horizontalMoveDistance; }
    if (direction == "right") { that.x = that.x + horizontalMoveDistance; }
  }
}
Frog.prototype = new createjs.Sprite(froggerSpriteData, "frogJumpUp");

function moveFrog(event){
  if (event['keyCode'] === 39 ) {
    console.log(event);
    frog.move("right");
  }
  if (event['keyCode'] === 37 ) {
    frog.move("left");
  }
  if (event['keyCode'] === 40 ) {
    frog.move("down");
  }
  if (event['keyCode'] === 38 ) {
    frog.move("up");
  }
  frog.keepInBounds();
  stage.update();
}

$(document).on('keyup', moveFrog);
