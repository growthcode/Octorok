var landFinish = new createjs.Sprite(froggerSpriteData, "winningGrass");
landFinish.x = 0;
landFinish.y = 0;

var canvas = document.createElement('canvas');
canvas.id = "frogger-2-game-canvas"
canvas.width = landFinish.getBounds().width;
canvas.height = 327;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var stage = new createjs.Stage('frogger-2-game-canvas');
stage.addChild(landFinish);
stage.update();

var finishLineBoundary = landFinish.getBounds().height;
var rowHeight = (canvas.height - finishLineBoundary) / 13;
var columnWidth = canvas.width / 16;

var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;
var frogXStart = (canvas.width / 2) - 23 / 2;
var frogYStart = canvas.height - 20.5;
