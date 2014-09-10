var queue;
queue = new createjs.LoadQueue();
queue.installPlugin(createjs.Sound);
queue.loadManifest([
  {id: "carHit", src: "../assets/frogger_2/carHitFrog.mp3"},
  {id: "marioJump", src: "../assets/frogger_2/mario.mp3"},
  {id: "jumpInSlot", src: "../assets/frogger_2/frog_get_to_top.mp3"}]);

var Frog = function(posX, posY) {
  this.lives = 3
  var that = this;
  this.x = frogXStart;
  this.y = frogYStart;
  this.width = this.getBounds().width;
  this.height = this.getBounds().height;
  this.keepInBounds = function() {
    if (that.x >= (canvas.width - that.width)) {
      that.x = canvas.width - that.width;
    }
    if (that.x <= that.width) {
      that.x = that.width;
    }
    if (that.y >= (canvas.height - that.height)) {
      that.y = frogYStart;
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
    frog.move("right");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 37 ) {
    frog.move("left");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 40 ) {
    frog.move("down");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 38 ) {
    frog.move("up");
    createjs.Sound.play("marioJump");
  }
  frog.keepInBounds();
  stage.update();
}

$(document).on('keyup', moveFrog);
