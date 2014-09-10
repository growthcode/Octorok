var landFinish = new createjs.Sprite(froggerSpriteData, "winningGrass");
landFinish.x = 0;
landFinish.y = 0;

var canvas = document.createElement('canvas');
canvas.id = "frogger-2-game-canvas"
canvas.width = landFinish.getBounds().width;
canvas.height = 360;

var gameBottomStart = 327; // canvas.height former size before game boundaries
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var stage = new createjs.Stage('frogger-2-game-canvas');
stage.addChild(landFinish);
stage.update();

var finishLineBoundary = landFinish.getBounds().height;
var rowHeight = (gameBottomStart - finishLineBoundary) / 13;
var columnWidth = canvas.width / 16;


