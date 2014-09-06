var move_distance = 50

var frog = new createjs.Shape();
frog.graphics.beginFill("red").drawCircle(0, 0, 20);
frog.x = 400;
frog.y = 565;
stage.addChild(frog);
stage.update();

$(document).on('keyup', movefrog)

function movefrog(event){
  if(event['keyCode'] === 39 ){
    frog.x = frog.x + move_distance
    stage.update()
  }
  if(event['keyCode'] === 37 ){
    frog.x = frog.x - move_distance
    stage.update()
  }
  if(event['keyCode'] === 40 ){
    frog.y = frog.y + move_distance
    stage.update()
  }
  if(event['keyCode'] === 38 ){
    frog.y = frog.y - move_distance
    stage.update()
  }
  console.log("keycode pressed: " + event['keyCode'])
}

