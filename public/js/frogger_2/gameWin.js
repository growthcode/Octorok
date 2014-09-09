Win = {}

Win.Factory = function(character) {
  this.character = character;
  this.slots = [];
  // this.createSlots = function(numberOfSlots) {
  //   var limit = (numberOfSlots * 3) - 1;
  //   for(var i = 1; i < limit; i += 3) {
  //     var slot = new Win.Slot((columnWidth*i), (columnWidth*(i+1)))
  //     this.slots.push(slot)
  //   }
  // };
  this.createSlots = function(numberOfSlots) {
      var leftBound = (11/399) * canvas.width;
      var rightBound;
    for(var i=0; i < numberOfSlots; i++) {
      rightBound = leftBound + ((32/399) * canvas.width);
      this.slots.push(new Win.Slot(leftBound, rightBound));
      leftBound += (84.5/399)*canvas.width;
    }
  };
  this.createControllers = function() {
    for (var i in this.slots) {
      var controller = new Win.Controller(this.character, this.slots[i])
      createjs.Ticker.addEventListener('tick', controller.checkSlot)
    }
  };
  this.checkAllSlots = function() {
    activeSlots = $.grep(this.slots, function(slot){
      return slot.active === true;
    })
    if (activeSlots.length === this.slots.length) {
      console.log('YOU WIN!')
      createjs.Ticker.removeEventListener('tick', factory.checkAllSlots)
    }
  }.bind(this);
}

Win.Slot = function(leftBound, rightBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
  this.active = false
}

Win.Controller = function(character, slot) {
  this.character = character
  this.slot = slot
  this.checkSlot = function() {
    if (this.character.x > this.slot.leftBound && this.character.x < this.slot.rightBound && this.character.y <= finishLineBoundary - rowHeight -.5) {
      if (this.slot.active === false) {
        this.slot.active = true;
        console.log('You Hit A Slot!');
      }
      else if (this.slot.active === true) {
        numOfFrogLives -= 1
        console.log('You Already Hit This Slot...')
      }
      frog.resetPosition();
    }
  }.bind(this)
}

// slots = []
// var createSlot = function(numberOfSlots) {
//     var leftBound = (11/399) * canvas.width;
//     var rightBound;
//   for(var i=0; i < numberOfSlots; i++) {
//     rightBound = leftBound + ((32/399) * canvas.width);
//     slots.push(new Win.Slot(leftBound, rightBound));
//     leftBound += (84.5/399)*canvas.width;
//   }
// }

factory = new Win.Factory(frog);
factory.createSlots(5);
factory.createControllers();
createjs.Ticker.addEventListener('tick', factory.checkAllSlots)
