var background = new createjs.Bitmap("../assets/frogger_2/froggerBackgroundNew.png");
background.x = 0;
background.y = 0;
var landFinish = new createjs.Sprite(froggerSpriteData, "winningGrass");
landFinish.x = 0;
landFinish.y = 0;


var canvas = document.createElement('canvas');
canvas.id = "frogger-2-game-canvas"
canvas.width = landFinish.getBounds().width;
canvas.height = 445;

var gameBottomStart = 418; // canvas.height former size before game boundaries
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var stage = new createjs.Stage('frogger-2-game-canvas');
stage.addChild(background);
stage.addChild(landFinish);

var backgroundDirtBottom = new createjs.Bitmap("../assets/frogger_2/brown.png");
backgroundDirtBottom.x = 0;
backgroundDirtBottom.y = gameBottomStart;
stage.addChild(backgroundDirtBottom);
stage.update();

var finishLineBoundary = landFinish.getBounds().height;
var rowHeight = (gameBottomStart - finishLineBoundary) / 13;
var columnWidth = canvas.width / 16;

var verticalMoveDistance = rowHeight;
var horizontalMoveDistance = columnWidth;

var gameBoundaryHeight = canvas.height - finishLineBoundary;
var carHeight = 26;

var frogWidth = 26;
var frogHeight = 26;
var frogXStart = (canvas.width / 2) - frogWidth / 2;
var frogYStart = (gameBottomStart - rowHeight) + (rowHeight - 26)/2;



