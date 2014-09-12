Game = {};

Game.Controller = function(level) {
  that = this;
  this.level = level;
  this.username = "";
  this.score = 0;
  this.vehicles = [];
  this.logs = [];
  this.slots = [];
  this.frogLivesContainer = new createjs.Container();
  this.activeSlotImages = []
  this.waterYLine = frogYStart - (rowHeight * 7);
  this.generateCharacter = function() {
    var frog = new Frog();
    return frog;
  }
  this.character = this.generateCharacter();
}

Game.Controller.prototype.displayLevel = function() {
  this.levelDisplay = new createjs.Text("Level " + this.level, "bold 22px Courier New", "#007600")
  this.levelDisplay.x = canvas.width - this.levelDisplay.getBounds().width - 10
  this.levelDisplay.y = gameBottomStart;
  stage.addChild(this.levelDisplay)
}

Game.Controller.prototype.displayUsernameAndScore = function() {
  var that = this
  $.ajax({
    url: "/users/"+"user.id",
    type: 'get'
  }).done(function(data) {
    var username = data.username
    if(data === "") {username = "Guest"}
    that.username = new createjs.Text(username +":", "bold 22px Courier New", "#007600")
    that.username.x = that.frogLivesContainer.x + that.frogLivesContainer.getBounds().width + 10
    that.username.y = gameBottomStart;
    stage.addChild(that.username);
    that.displayScore();
  })
}

Game.Controller.prototype.displayScore = function() {
  this.scoreDisplay = new createjs.Text(this.score, "bold 22px Courier New", "#007600")
  this.scoreDisplay.x = this.username.x + this.username.getBounds().width + 6
  this.scoreDisplay.y = gameBottomStart;
  stage.addChild(this.scoreDisplay);
}

Game.Controller.prototype.updateScore = function(points) {
  this.score += points;
  stage.removeChild(this.scoreDisplay);
  this.displayScore();
}

Game.Controller.prototype.addLives = function(livesToAdd){
  var lastFrogInContainerIndex = this.frogLivesContainer.getNumChildren() - 1
  var lastFrogInContainer = this.frogLivesContainer.children[lastFrogInContainerIndex]
  var lastFrogPosX = 0
  var lastFrogWidth = 0
  if(this.frogLivesContainer.getNumChildren() > 0) {
    lastFrogPosX = lastFrogInContainer.x;
    lastFrogWidth = lastFrogInContainer.getBounds().width;
  }
  var startPosX = lastFrogPosX + lastFrogWidth;
  for (var i = 0; i < livesToAdd; i++){
    var froggerExtraLife = new createjs.Sprite(froggerSpriteData, "froggerExtraLife");
    froggerExtraLife.x = startPosX
    startPosX += 3 + froggerExtraLife.getBounds().width;
    this.frogLivesContainer.addChild(froggerExtraLife);
  }
}

Game.Controller.prototype.removeLives = function(livesToRemove){
  for(var i = 0; i < livesToRemove; i++) {
    var lastFrogInContainerIndex = this.frogLivesContainer.children.length - 1;
    this.frogLivesContainer.removeChildAt(lastFrogInContainerIndex);
  }
}

Game.Controller.prototype.resetFrogPosition = function() {
  this.character.x = frogXStart;
  this.character.y = frogYStart;
}

Game.Controller.prototype.killFrog = function() {
  this.character.lives -= 1;
  this.removeLives(1);
  this.resetFrogPosition();
}

Game.Controller.prototype.killIfOutOfBounds = function() {
  if(this.character.x < 0 || (this.character.x+this.character.width) > canvas.width) {
    this.killFrog();
    createjs.Sound.play("die");
  }
}

Game.Controller.prototype.rideLog = function(direction, logIndex) {
  if(direction === "left") {
    if (that.level > 2) {
      this.character.x += this.logs[logIndex].speed / 2;
    } else {
      this.character.x -= this.logs[logIndex].speed;
    }
    this.killIfOutOfBounds();
  }
  else if(direction === "right") {
    if (that.level > 2) {
      this.character.x -= this.logs[logIndex].speed / 2;
    } else {
      this.character.x += this.logs[logIndex].speed;
    }
    this.killIfOutOfBounds();
  }
}

Game.Controller.prototype.checkCollision = function(movingObject) {
  if (this.character.x > movingObject.x + movingObject.width || this.character.x + this.character.width < movingObject.x || this.character.y > movingObject.y + movingObject.height || this.character.y + this.character.height < movingObject.y ) {
    return false;
  };
  return true;
}

Game.Controller.prototype.checkAllVehicleCollisions = function() {
  for (var i in this.vehicles) {
    if (this.checkCollision(this.vehicles[i])) {
      createjs.Sound.play("die");
      this.killFrog();
    }
  }
}

Game.Controller.prototype.checkAllLogCollisions = function() {
  for (var i in this.logs) {
    if (this.checkCollision(this.logs[i])) {
      this.rideLog(this.logs[i].direction, i);
    }
  }
}

Game.Controller.prototype.checkWaterCollision = function() {
  if ((this.character.y < this.waterYLine) && !(this.checkAllWaterLogCollisions())) {
    createjs.Sound.play("die");
    this.killFrog();
  }
}

Game.Controller.prototype.logLandingArea = function(log) {
  var characterLeftSide = this.character.x
  var characterRightSide = this.character.x + this.character.width
  var logLeftSide = log.x
  var logRightSide = log.x + log.width
  var characterTop = this.character.y
  var characterBottom = this.character.y + this.character.height
  var logTop = log.y
  var logBottom = log.y + log.height
  var characterMidX = this.character.width / 2
  if (characterLeftSide >= logLeftSide - characterMidX && characterRightSide <= logRightSide + characterMidX && characterTop >= logTop && characterBottom <= logBottom) {
    return true;
  }
  return false
}

Game.Controller.prototype.checkAllWaterLogCollisions = function() {
  for (var i in this.logs) {
    if (this.logLandingArea(this.logs[i])) {
      return true;
    }
  }
}

Game.Controller.prototype.logCreator = function() {
  for (var i = 1; i < 6 ; i++) {
    var speed = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    if (i % 2 == 0) {
      that.logs.push(new SmallLog(0, finishLineBoundary + (rowHeight * i - rowHeight), "left", speed));
      that.logs.push(new MediumLog(200, finishLineBoundary + (rowHeight * i - rowHeight), "left", speed));
    } else {
      that.logs.push(new SmallLog(0, finishLineBoundary + (rowHeight * i - rowHeight), "right", speed));
      that.logs.push(new LargeLog(200, finishLineBoundary + (rowHeight * i - rowHeight), "right", speed));
    }
  }
  for (var i in that.logs) {
    stage.addChild(that.logs[i]);
  }
}

Game.Controller.prototype.generateVehicles = function() {
  var chooseLeftFacingVehicle = function(rowNumber, speed) {
    var leftFacingVehicles = [
    new Truck(439, finishLineBoundary + rowHeight * rowNumber + (rowHeight - carHeight) / 2, "left", speed),
    new Sedan(439, finishLineBoundary + rowHeight * rowNumber + (rowHeight - carHeight) / 2, "left", speed),
    new Buggatti(439, finishLineBoundary + rowHeight * rowNumber + (rowHeight - carHeight) / 2, "left", speed),
    new Mazzeratti(439, finishLineBoundary + rowHeight * rowNumber + (rowHeight - carHeight) / 2, "left", speed)
    ];
    return leftFacingVehicles[Math.floor(Math.random() * leftFacingVehicles.length)];
  }
  that.vehicles.push(chooseLeftFacingVehicle(11, 5));
  that.vehicles.push(new Ferrari(-50, finishLineBoundary + rowHeight * 10 + (rowHeight - carHeight) / 2, "right", 6));
  that.vehicles.push(chooseLeftFacingVehicle(9, 9));
  that.vehicles.push(new Ferrari(-50, finishLineBoundary + rowHeight * 8 + (rowHeight - carHeight) / 2, "right", 4));
  that.vehicles.push(chooseLeftFacingVehicle(7, 8));

  for (var i in that.vehicles) {
    stage.addChild(that.vehicles[i]);
  }
}

Game.Controller.prototype.generateSnake = function() {
  that.vehicles.push(new Snake(435, finishLineBoundary + rowHeight * 5 + (rowHeight - carHeight) / 2, "left", 20));
  stage.addChild(that.vehicles[that.vehicles.length - 1]);
}

Game.Controller.prototype.moveObjects = function() {
  for (var i in this.logs) {
    if (this.logs[i].direction == "right") {
      if (this.logs[i].x > stage.canvas.width + 180) { this.logs[i].x = -180 }
        this.logs[i].x += this.logs[i].speed;
    } else {
      if (this.logs[i].x < -180) { this.logs[i].x = stage.canvas.width }
        this.logs[i].x -= this.logs[i].speed;
    }

  }
  for (var i in this.vehicles) {
    if (this.vehicles[i].direction == "right") {
      if (this.vehicles[i].x > stage.canvas.width + 100) {
        stage.removeChild(this.vehicles[i]);
        this.vehicles[i] = null;
        this.vehicles.splice(i, 1);
      } else {
        this.vehicles[i].x += this.vehicles[i].speed;
      }
    } else {
      if (this.vehicles[i].x < -100) {
        stage.removeChild(this.vehicles[i]);
        this.vehicles[i] = null;
        this.vehicles.splice(i, 1);
      } else {
        this.vehicles[i].x -= this.vehicles[i].speed;
      }
    }
  }
}

Game.Controller.prototype.checkIfGameLost = function() {
  if (this.character.lives === 0) {
    console.log("You Lost...");
    this.updateScore(-this.score);
    $.each(activeSlots, function(index, slot) {
      slot.active = false
    })
    this.removeAllActiveSlotImages();
    this.character.lives = 3;
    // this.addLives(3);
    // temporary: set lives back to 3 to avoid infinite console.log
    Game.masterController.level = 0;
    Game.masterController.changeLevel();
  }
}

Game.Controller.prototype.addActiveSlotImage = function(slot) {
  var frogActiveSlot = new createjs.Bitmap("../../assets/frogger_2/frog_active_slot.png")
  frogActiveSlot.x = slot.leftBound + 2
  frogActiveSlot.y = gameBottomStart - (rowHeight * 14)
  frogActiveSlot.scaleX = 0.4;
  frogActiveSlot.scaleY = 0.4;
  stage.addChild(frogActiveSlot);
  this.activeSlotImages.push(frogActiveSlot)
}

Game.Controller.prototype.removeActiveSlotIamge = function(activeSlotImage) {
  window.setTimeout(function() {
    stage.removeChild(activeSlotImage)
  }, 200)
}

Game.Controller.prototype.removeAllActiveSlotImages = function() {
  for(var i in this.activeSlotImages) {
    this.removeActiveSlotIamge(this.activeSlotImages[i])
  }
}

Game.Controller.prototype.createSlots = function(numberOfSlots) {
  var leftBound = (11/399) * canvas.width;
  var rightBound;
  for(var i=0; i < numberOfSlots; i++) {
    rightBound = leftBound + ((32/399) * canvas.width);
    this.slots.push(new Game.Slot(leftBound, rightBound));
    leftBound += (84.5/399)*canvas.width;
  }
}

Game.Controller.prototype.checkSlot = function(slot) {
  if (this.character.x > slot.leftBound && this.character.x < slot.rightBound && this.character.y <= gameBottomStart - (rowHeight * 13)) {
    if (slot.active === false) {
      slot.active = true;
      this.addActiveSlotImage(slot);
      this.updateScore(1000);
    }
    else if (slot.active === true) {
      this.killFrog()
      createjs.play.Sound("die");
    }
    this.resetFrogPosition()
  }
}

Game.Controller.prototype.checkAllSlots = function() {
  for (var i in this.slots) {
    this.checkSlot(that.slots[i])
  }
  activeSlots = $.grep(that.slots, function(slot){
    return slot.active === true;
  })
  if (activeSlots.length === that.slots.length) {
    console.log('YOU WIN!');
    that.removeAllActiveSlotImages();
    // temporary: set active slots back to false to avoid infinite console.log
    $.each(activeSlots, function(index, slot) {
      slot.active = false
    })
    Game.masterController.changeLevel();
  }
}

Game.Controller.prototype.startGame = function() {
  that.checkAllSlots();
  that.checkAllVehicleCollisions();
  that.checkAllLogCollisions();
  that.moveObjects();
  that.checkIfGameLost();
  that.checkWaterCollision();
}

Game.Controller.prototype.gameSceneSetup = function() {
  that.frogLivesContainer.x = 5;
  that.frogLivesContainer.y = gameBottomStart + 5;
  that.removeLives(that.frogLivesContainer.children.length);
  that.character.lives = 3
  that.addLives(3);
  stage.addChild(that.frogLivesContainer);
  that.displayUsernameAndScore();
  that.displayLevel();
  that.logCreator();
  that.createSlots(5);
  stage.addChild(that.character);
}

Game.Controller.prototype.initiateEnemies = function() {
  carInterval = setInterval(that.generateVehicles, 2000);
  if (that.level > 1) {
    snakeInterval = setInterval(that.generateSnake, 3000);
  }
}

Game.Controller.prototype.clearEnemies = function() {
  that.vehicles = [];
  that.logs = [];
  that.slots = [];
}

Game.Controller.prototype.arrowKeyListener = function(event){
  if (event['keyCode'] === 38 ) {
    that.character.move("up");
    that.character.gotoAndPlay("frogJumpUp");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 40 ) {
    that.character.move("down");
    that.character.gotoAndPlay("frogJumpDown");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 37 ) {
    that.character.move("left");
    that.character.gotoAndPlay("frogJumpLeft");
    createjs.Sound.play("marioJump");
  }
  if (event['keyCode'] === 39 ) {
    that.character.move("right");
    that.character.gotoAndPlay("frogJumpRight");
    createjs.Sound.play("marioJump");
  }
  that.character.keepInBounds();
}

Game.Controller.prototype.pauseListener = function(event){
  if (event['keyCode'] === 80 ) {
    Game.masterController.stopTicker();
  }
}

Game.Controller.prototype.resumeListener = function(event){
  if (event['keyCode'] === 82 ) {
    Game.masterController.startTicker();
  }
}

Game.Slot = function(leftBound, rightBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
  this.active = false
}

Game.masterController = {
  level : 1,
  beginArcade : function() {
    this.setupScene();
    this.startTicker();
  },
  changeLevel : function() {
    this.stopTicker();
    this.clearStage();
    gameController.clearEnemies();
    this.level ++;
    gameController.level = this.level;
    stage.addChild(background);
    stage.addChild(landFinish);
    stage.addChild(backgroundDirtBottom);
    this.beginArcade();
  },
  setupScene : function() {
    gameController.gameSceneSetup.bind(gameController)();
  },
  startTicker : function() {
    createjs.Ticker.addEventListener('tick', gameController.startGame);
    createjs.Ticker.addEventListener('tick', function() { stage.update() });
    $(document).on('keyup', that.arrowKeyListener);
    gameController.initiateEnemies();
    $(document).off('keyup', that.resumeListener);
  },
  stopTicker : function() {
    createjs.Ticker.removeAllEventListeners();
    clearInterval(carInterval);
    if (that.level > 1) {
      clearInterval(snakeInterval);
    } 
    $(document).off('keyup', that.arrowKeyListener);
    $(document).on('keyup', that.resumeListener);
  },
  clearStage : function() {
    stage.removeAllChildren();
  }
}

gameController = new Game.Controller(1);
$(document).on('keyup', that.pauseListener);
$(document).on('keydown', function(){
  event.preventDefault();
});

var froggerAlpha = function (){
  Game.masterController.beginArcade();
}
