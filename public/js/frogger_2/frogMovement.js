var frogRadius= borderHeight / 26;
var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;
var frogXStart = (canvas.width / 2) - 23 / 2;
var frogYStart = canvas.height - 17;

var frog = new createjs.Sprite(froggerSpriteData, "frogJumpUp");

var Frog = function(posX, posY) {
  var that = this;
  this.x = frogXStart;
  this.y = frogYStart;
  this.width = this.getBounds().width;
  this.height = this.getBounds().height;
  this.resetPosition = function() {
    frog.x = frogXStart
    frog.y = frogYStart
    stage.update();
  }
  this.keepInBounds = function() {
    if (that.x >= (borderWidth - frogRadius)) {
      that.x = borderWidth - frogRadius;
    }
    if (that.x <= frogRadius) {
      that.x = frogRadius;
    }
    if (that.y >= (borderHeight - frogRadius)) {
      that.y = borderHeight - frogRadius;
    }
    if (that.y <= frogRadius){
      that.y = frogRadius;
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
var frog = new Frog()

stage.addChild(frog);
stage.update();

$(document).on('keyup', movefrog);

function movefrog(event){
  if (event['keyCode'] === 39 ) {
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
