var frogRadius= borderHeight / 26;
var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;
var frogXStart=borderWidth/2;
var frogYStart=borderHeight - frogRadius;

var frog = new createjs.Sprite(froggerSpriteData, "frogJumpUp");

var Frog = function(posX, posY) {
  this.x = frogXStart;
  this.y = frogYStart;
  this.width = this.getBounds().width;
  this.height = this.getBounds().height;
}
Frog.prototype = new createjs.Sprite(froggerSpriteData, "frogJumpUp");
var frog = new Frog()


stage.addChild(frog);
stage.update();

$(document).on('keyup', movefrog);

function movefrog(event){

  if (event['keyCode'] === 39 ) {
    frog.x = frog.x + horizontalMoveDistance;
    if(frog.x >= (borderWidth-frogRadius)){
      frog.x = borderWidth-frogRadius;
    }
  }
  if (event['keyCode'] === 37 ) {
    frog.x = frog.x - horizontalMoveDistance;
    if(frog.x <= frogRadius){
      frog.x = frogRadius;
    }
  }
  if (event['keyCode'] === 40 ) {
    frog.y = frog.y + verticalMoveDistance;
    if(frog.y >= (borderHeight - frogRadius)){
      frog.y = borderHeight - frogRadius;
    }
  }
  if (event['keyCode'] === 38 ) {
    frog.y = frog.y - verticalMoveDistance;
    if(frog.y <= frogRadius){
      frog.y = frogRadius;
    }
  }
  stage.update();
}
