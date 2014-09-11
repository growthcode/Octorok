Game = {};

Game.Controller = function(character) {
  this.username = ""
  this.score = 0
  this.character = character || frog;
  this.vehicles = [];
  this.logs = [];
  this.slots = [];
  this.frogLivesContainer = new createjs.Container();
  this.activeSlotImages = []
  this.waterYLine = frogYStart - (rowHeight * 7);
}

Game.Controller.prototype.displayUsernameAndScore = function() {
  var that = this
  $.ajax({
    url: "/users/"+"user.id",
    type: 'get'
  }).done(function(data) {
    that.username = new createjs.Text(data.username +":", "bold 22px Courier New", "#007600")
    that.username.x = that.frogLivesContainer.x + that.frogLivesContainer.getBounds().width + 10
    that.username.y = canvas.height - 26
    stage.addChild(that.username);
    that.displayScore();
  })
}

Game.Controller.prototype.displayScore = function() {
  this.scoreDisplay = new createjs.Text(this.score, "bold 22px Courier New", "#007600")
  this.scoreDisplay.x = this.username.x + this.username.getBounds().width + 6
  this.scoreDisplay.y = canvas.height - 26
  stage.addChild(this.scoreDisplay)
}

Game.Controller.prototype.updateScore = function(points) {
  this.score += points;
  stage.removeChild(this.scoreDisplay)
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
    this.frogLivesContainer.addChild(froggerExtraLife)
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
  this.removeLives(1)
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
    this.character.x -= this.logs[logIndex].speed;
    this.killIfOutOfBounds();
  }
  else if(direction === "right") {
    this.character.x += this.logs[logIndex].speed;
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
    if (i % 2 == 0) {
      this.logs.push(new SmallLog(0, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
      this.logs.push(new MediumLog(200, finishLineBoundary + (rowHeight * i - rowHeight), "left"));
    } else {
      this.logs.push(new SmallLog(0, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
      this.logs.push(new LargeLog(200, finishLineBoundary + (rowHeight * i - rowHeight), "right"));
    }
  }
  for (var i in this.logs) {
    stage.addChild(this.logs[i]);
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

  this.vehicles.push(chooseLeftFacingVehicle(11, 5));
  this.vehicles.push(new Ferrari(-50, finishLineBoundary + rowHeight * 10 + (rowHeight - carHeight) / 2, "right", 6));
  this.vehicles.push(chooseLeftFacingVehicle(9, 9));
  this.vehicles.push(new Ferrari(-50, finishLineBoundary + rowHeight * 8 + (rowHeight - carHeight) / 2, "right", 4));
  this.vehicles.push(chooseLeftFacingVehicle(7, 8));

  for (var i in this.vehicles) {
    stage.addChild(this.vehicles[i]);
  }
}

Game.Controller.prototype.generateSnake = function() {
  this.vehicles.push(new Snake(435, finishLineBoundary + rowHeight * 5 + (rowHeight - carHeight) / 2, "left", 20));
  stage.addChild(this.vehicles[this.vehicles.length - 1]);
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
    // temporary: set lives back to 3 to avoid infinite console.log
    this.character.lives += 3
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
  }, 2000)
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
};

Game.Controller.prototype.checkSlot = function(slot) {
  if (this.character.x > slot.leftBound && this.character.x < slot.rightBound && this.character.y <= gameBottomStart - (rowHeight * 13)) {
    if (slot.active === false) {
      slot.active = true;
      this.addActiveSlotImage(slot);
      this.updateScore(1);
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
    this.checkSlot(this.slots[i])
  }
  activeSlots = $.grep(this.slots, function(slot){
    return slot.active === true;
  })
  if (activeSlots.length === this.slots.length) {
    console.log('YOU WIN!')
    this.removeAllActiveSlotImages()
    // temporary: set active slots back to false to avoid infinite console.log
    $.each(activeSlots, function(index, slot) {
      slot.active = false
    })
  }
}

Game.Controller.prototype.startGame = function() {
  this.checkAllSlots();
  this.checkAllVehicleCollisions();
  this.checkAllLogCollisions();
  this.moveObjects();
  this.checkIfGameLost();
  this.checkWaterCollision();
}

Game.Controller.prototype.gameSceneSetup = function() {
  this.frogLivesContainer.x = 5;
  this.frogLivesContainer.y = gameBottomStart + 5;
  this.addLives(3);
  stage.addChild(this.frogLivesContainer);
  this.displayUsernameAndScore();
  this.logCreator();
  this.createSlots(5);
  stage.addChild(this.character);
}

Game.Slot = function(leftBound, rightBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
  this.active = false
}

var frog = new Frog();
$(document).on('keyup', frog.moveFrog.bind(frog));
$(document).on('keydown', function(){
  event.preventDefault();
});

var gameController = new Game.Controller();

setInterval(gameController.generateVehicles.bind(gameController), 2000);
setInterval(gameController.generateSnake.bind(gameController), 3000);

gameController.gameSceneSetup();

createjs.Ticker.addEventListener('tick', gameController.startGame.bind(gameController));
createjs.Ticker.addEventListener('tick', function() { stage.update() });
