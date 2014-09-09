var frogRadius= borderHeight / 26;
var moveDistance = borderHeight / 13
var frogXStart=borderWidth/2;
var frogYStart=borderHeight - frogRadius;

var frog = new createjs.Sprite(froggerSpriteData);
stage.addChild(frog);
stage.update();

$(document).on('keyup', movefrog);

function movefrog(event){

  if (event['keyCode'] === 39 ) {
    frog.x += moveDistance
    if(frog.x >= (borderWidth-frogRadius)){
      frog.x = borderWidth-frogRadius;
    }
    frog.gotoAndPlay("frogJumpRight");
  }
  if (event['keyCode'] === 37 ) {
    frog.x -= moveDistance
    if(frog.x <= frogRadius){
      frog.x = frogRadius;
    }
    frog.gotoAndPlay("frogJumpLeft");
  }
  if (event['keyCode'] === 40 ) {
    frog.y += moveDistance
    if(frog.y >= (borderHeight - frogRadius)){
      frog.y = borderHeight - frogRadius;
    }
    frog.gotoAndPlay("frogJumpDown");
  }
  if (event['keyCode'] === 38 ) {
    frog.y -= moveDistance
    if(frog.y <= frogRadius){
      frog.y = frogRadius;
    }
    frog.gotoAndPlay("frogJumpUp");
  }
}
