var move_distance = 50
var borderWidth=800;
var borderHeight=600;
var frogRadius=20;

var frogXStart=400;
var frogYStart=565;

var frog = new createjs.Sprite(froggerSpriteData, "frogJumpUp");



stage.addChild(frog);

stage.update();

$(document).on('keyup', movefrog)


function movefrog(event){

  if (event['keyCode'] === 39 ) {
    frog.x = frog.x + move_distance
    if(frog.x >= (borderWidth-frogRadius)){
      frog.x = borderWidth-frogRadius;
    }
  }
  if (event['keyCode'] === 37 ) {
    frog.x = frog.x - move_distance
    if(frog.x <= frogRadius){
      frog.x = frogRadius;
    }
  }
  if (event['keyCode'] === 40 ) {
    frog.y = frog.y + move_distance
    if(frog.y >= (borderHeight - frogRadius)){
      frog.y = borderHeight - frogRadius;
    }
  }
  if (event['keyCode'] === 38 ) {
    frog.y = frog.y - move_distance
    if(frog.y <= frogRadius){
      frog.y = frogRadius;
    }
  }
  stage.update()
}

