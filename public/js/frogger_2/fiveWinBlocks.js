var winBlockWidth = 35;
var winBlockHeight = 45;
var rightDifference = 10;

var farLeftBlock = new createjs.Shape();
farLeftBlock.graphics.beginFill("green").drawRect(0, 0, winBlockWidth, winBlockHeight);
farLeftBlock.x = 99;
farLeftBlock.y = 0;

var midLeftBlock = new createjs.Shape();
midLeftBlock.graphics.beginFill("green").drawRect(0, 0, winBlockWidth, winBlockHeight);
midLeftBlock.x = 198;
midLeftBlock.y = 0;

var midBlock = new createjs.Shape();
midBlock.graphics.beginFill("green").drawRect(0, 0, winBlockWidth, winBlockHeight);
midBlock.x = 297;
midBlock.y = 0

var midRigtBlock = new createjs.Shape();
midRigtBlock.graphics.beginFill("green").drawRect(0, 0, winBlockWidth, winBlockHeight);
midRigtBlock.x = 396;
midRigtBlock.y = 0;

var farRightBlock = new createjs.Shape();
farRightBlock.graphics.beginFill("green").drawRect(0, 0, winBlockWidth, winBlockHeight);
farRightBlock.x = 495;
farRightBlock.y = 0;

stage.addChild(farLeftBlock, midLeftBlock, midBlock, midRigtBlock, farRightBlock);
stage.update();

var slotWidth = 35;
var leftBorder = 10;
var rightBorder = 15;
