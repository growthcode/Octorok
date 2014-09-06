var move_distance = 50
var frog = new createjs.Shape();
frog.graphics.beginFill("red").drawCircle(0, 0, 25);
frog.x = 100;
frog.y = 100;
stage.addChild(frog);
stage.update();


console.log("End of Circle Creation")

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

