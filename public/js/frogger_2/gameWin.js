Win = {}

Win.Slot = function(id, leftBound, rightBound) {
  this.id = id
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

slot1 = new Win.Slot(1, columnWidth, (columnWidth*2));
slot2 = new Win.Slot(2, (columnWidth*4), (columnWidth*5));
slot3 = new Win.Slot(3, (columnWidth*7), (columnWidth*8));
slot4 = new Win.Slot(4, (columnWidth*10), (columnWidth*11));
slot5 = new Win.Slot(5, (columnWidth*13), (columnWidth*14));

var slots = [slot1, slot2, slot3, slot4, slot5];
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
