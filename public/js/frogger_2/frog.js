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
    if (that.y >= (gameBottomStart - that.height)) {
      that.y = gameBottomStart - that.height - 1;
    }
    if (that.y <= that.height){
      that.y = that.height;
    }
  };
  this.move = function(direction) {
    if (direction == "up") { that.y = that.y - verticalMoveDistance; }
    if (direction == "down") { that.y = that.y + verticalMoveDistance; }
    if (direction == "left") { that.x = that.x - horizontalMoveDistance; }
    if (direction == "right") { that.x = that.x + horizontalMoveDistance; }
  };
  this.on('animationend', function(){
  switch (this.currentAnimation){
      case "frogJumpUp":
        this.gotoAndStop("frogJumpUp");
        break;
      case "frogJumpDown":
        this.gotoAndStop("frogJumpDown");
        break;
      case "frogJumpLeft":
        this.gotoAndStop("frogJumpLeft");
        break; 
      case "frogJumpRight":
        this.gotoAndStop("frogJumpRight");
        break;
    }
  })
}
Frog.prototype = new createjs.Sprite(froggerSpriteData, "frogJumpUp");

Frog.prototype.moveFrog = function(event){
  if (event['keyCode'] === 38 ) {
    this.move("up");
    this.gotoAndPlay("frogJumpUp");
  }
  if (event['keyCode'] === 40 ) {
    this.move("down");
    this.gotoAndPlay("frogJumpDown");

  }
  if (event['keyCode'] === 37 ) {
    this.move("left");
    this.gotoAndPlay("frogJumpLeft");
  }
  if (event['keyCode'] === 39 ) {
    this.move("right");
    this.gotoAndPlay("frogJumpRight");
  }
  createjs.Sound.play("marioJump");
  frog.keepInBounds();
  stage.update();
}
