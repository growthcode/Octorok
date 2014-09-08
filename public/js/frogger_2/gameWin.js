Win = {}

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
      console.log('Inside Slot '+this.slot.id+', '+slot.active)
    }
  }.bind(this)
}

var slots = []
for(var i = 1; i < 14; i += 3) {
  var slot = new Win.Slot((columnWidth*i), (columnWidth*(i+1)))
  slots.push(slot)
}

for (var i in slots) {
  var winController = new Win.Controller(frog, slots[i])
  createjs.Ticker.addEventListener('tick', winController.checkSlot)
}

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
