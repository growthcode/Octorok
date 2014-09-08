Win = {}

Win.Factory = function() {
  this.slots = [];
  this.createSlots = function() {
    for(var i = 1; i < 14; i += 3) {
      var slot = new Win.Slot((columnWidth*i), (columnWidth*(i+1)))
      this.slots.push(slot)
    }
  };
  this.createControllers = function() {
    for (var i in this.slots) {
      var controller = new Win.Controller(frog, this.slots[i])
      createjs.Ticker.addEventListener('tick', controller.checkSlot)
    }
  }.bind(this)
}

Win.Slot = function(leftBound, rightBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
  this.active = false
}

Win.Controller = function(frog, slot) {
  this.frog = frog
  this.slot = slot
  this.checkSlot = function() {
    if(this.frog.x > this.slot.leftBound && this.frog.x < this.slot.rightBound && this.frog.y <= rowHeight/2) {
      this.slot.active = true
      // removeSlot(slots, this.slot.id)
      console.log('Inside Slot '+slot.active)
    }
  }.bind(this)
}

factory = new Win.Factory();
factory.createSlots();
factory.createControllers();


var findSlotById = function(array, slotId) {
  slot = $.grep(array, function(slot){
    return slot.id === slotId;
  })
  return slot
};

var removeSlot = function(array, slotId) {
  // slot = findSlotById(array, slotId)
  var index = array.indexOf(slotId)
  array.splice(index, 1)
}
