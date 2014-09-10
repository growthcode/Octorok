Game = {};

Game.Controller = function(character) {
  this.character = character || frog;
  this.vehicles = [];
  this.logs = [];
  this.slots = [];
  this.frogLivesContainer = new createjs.Container();
  this.waterYLine = 140;
}

Game.Controller.prototype.resetFrogPosition = function() {
  this.character.x = frogXStart;
  this.character.y = frogYStart;
}

Game.Controller.prototype.killFrog = function() {
  this.character.lives -= 1;
  this.resetFrogPosition();
}

Game.Controller.prototype.killIfOutOfBounds = function() {
  if(this.character.x < 0 || (this.character.x+this.character.width) > canvas.width) {
    this.killFrog();
    console.log('too far...');
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
      console.log('you been hit, son')
      createjs.Sound.play("carHit");
      this.killFrog()
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
    console.log("died in the water");
    this.killFrog();
  }
}

Game.Controller.prototype.logLandingArea = function(log) {
  var distX = Math.abs(frog.x - (log.x+log.width/2));
  var distY = Math.abs(frog.y - (log.y+log.height/2));

  if (distX > (log.width/2.5 + frog.width / 2)) { return false; }
  if (distY > (log.height/3 + frog.width / 2)) { return false; }

  if (distX <= (log.width) && distY <= log.height) {
    console.log("i'm on the log");
    return true;
  }
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
  stage.update();
}

Game.Controller.prototype.vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i == 12) {
      this.vehicles.push(new Sedan(0, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
      this.vehicles.push(new Sedan(140, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
      this.vehicles.push(new Sedan(280, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
    } else if (i % 2 == 0) {
      this.vehicles.push(new Mazzeratti(0, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
      this.vehicles.push(new Sedan(140, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
      this.vehicles.push(new Mazzeratti(280, 5 * i + (rowHeight * i - (rowHeight + 7)), "left"));
    } else {
      this.vehicles.push(new Ferrari(0, 5 * i + (rowHeight * i - (rowHeight + 7)), "right"));
      this.vehicles.push(new Ferrari(140, 5 * i + (rowHeight * i - (rowHeight + 7)), "right"));
      this.vehicles.push(new Ferrari(280, 5 * i + (rowHeight * i - (rowHeight + 7)), "right"));
    }
  }
  for (var i in this.vehicles) {
    stage.addChild(this.vehicles[i]);
  }
  stage.update();
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
    stage.update();
  }
  for (var i in this.vehicles) {
    if (this.vehicles[i].direction == "right") {
      if (this.vehicles[i].x > stage.canvas.width + 100) { this.vehicles[i].x = -100 }
        this.vehicles[i].x += this.vehicles[i].speed;
    } else {
      if (this.vehicles[i].x < -110) { this.vehicles[i].x = stage.canvas.width + 50 }
        this.vehicles[i].x -= this.vehicles[i].speed;
    }
    stage.update();
  }
}

Game.Controller.prototype.checkIfGameLost = function() {
  if (this.character.lives === 0) {
    console.log("You Lost...");
    // temporary: set lives back to 3 to avoid infinite console.log
    this.character.lives += 3
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
  if (this.character.x > slot.leftBound && this.character.x < slot.rightBound && this.character.y <= finishLineBoundary - rowHeight + 0.5) {
    if (slot.active === false) {
      slot.active = true;
      console.log('You Hit A Slot!');
    }
    else if (slot.active === true) {
      this.killFrog()
      console.log('You Already Hit This Slot...')
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
    // temporary: set active slots back to false to avoid infinite console.log
    $.each(activeSlots, function(index, slot) {
      slot.active = false
    })
  }
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

Game.Controller.prototype.gameSceneSetup = function(){
  this.frogLivesContainer.x = 5;
  this.frogLivesContainer.y = gameBottomStart;
  this.addLives(5);
  stage.addChild(this.frogLivesContainer);
  this.logCreator();
  this.vehicleCreator();
  this.createSlots(5);
  stage.addChild(this.character);
  stage.update();
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
gameController.gameSceneSetup();

createjs.Ticker.addEventListener('tick', gameController.checkAllSlots.bind(gameController))
createjs.Ticker.addEventListener('tick', gameController.checkAllVehicleCollisions.bind(gameController));
createjs.Ticker.addEventListener('tick', gameController.checkAllLogCollisions.bind(gameController));
createjs.Ticker.addEventListener("tick", gameController.moveObjects.bind(gameController));
createjs.Ticker.addEventListener('tick', gameController.checkIfGameLost.bind(gameController));
createjs.Ticker.addEventListener('tick', gameController.checkWaterCollision.bind(gameController));

