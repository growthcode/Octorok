var canvas = document.createElement('canvas');
canvas.id = "game-canvas"
canvas.width = 690;
canvas.height = 598;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var stage = new createjs.Stage('game-canvas');

stage.update();

var movementListener = function(event) {
  if (event['keyCode'] === 39) {
    movePlayer("right");
  } else if (event['keyCode'] === 37) {
    movePlayer("left");
  }
}

$(document).on('keyup', movementListener);

