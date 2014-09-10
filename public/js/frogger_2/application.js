var landFinish = new createjs.Sprite(froggerSpriteData, "winningGrass");
landFinish.x = 0;
landFinish.y = 0;

var canvas = document.createElement('canvas');
canvas.id = "frogger-2-game-canvas"
canvas.width = landFinish.getBounds().width;
canvas.height = 503;

var gameBottomStart = 473; // canvas.height former size before game boundaries
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var stage = new createjs.Stage('frogger-2-game-canvas');
stage.addChild(landFinish);
stage.update();

var finishLineBoundary = landFinish.getBounds().height;
var rowHeight = (gameBottomStart - finishLineBoundary) / 13;
var columnWidth = canvas.width / 16;

var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;

var gameBoundaryHeight = gameBottomStart - finishLineBoundary

var frogWidth = 26;
var frogHeight = 26;
var frogXStart = (canvas.width / 2) - frogWidth / 2;
var frogYStart = (gameBottomStart - gameBoundaryHeight / 13) - (rowHeight - 26)/2;
