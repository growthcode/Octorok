Win = {}

Win.Slot = function(id, leftBound, rightBound) {
  this.id = id
  this.leftBound = leftBound;
  this.rightBound = rightBound;
}

Win.Controller = function(frog, slot) {
  this.frog = frog
  this.slot = slot
  this.checkSlot = function() {
    if(this.frog.x > this.slot.leftBound && this.frog.x < this.slot.rightBound && this.frog.y <= rowHeight/2) {
      console.log('Inside Slot '+this.slot.id)
    }
  }.bind(this)
}

slot1 = new Win.Slot(1, columnWidth, (columnWidth*2))
slot2 = new Win.Slot(2, (columnWidth*4), (columnWidth*5))
slot3 = new Win.Slot(3, (columnWidth*7), (columnWidth*8))
slot4 = new Win.Slot(4, (columnWidth*10), (columnWidth*11))
slot5 = new Win.Slot(5, (columnWidth*13), (columnWidth*14))

winController1 = new Win.Controller(frog, slot1)
winController2 = new Win.Controller(frog, slot2)
winController3 = new Win.Controller(frog, slot3)
winController4 = new Win.Controller(frog, slot4)
winController5 = new Win.Controller(frog, slot5)

createjs.Ticker.addEventListener('tick', winController1.checkSlot)
createjs.Ticker.addEventListener('tick', winController2.checkSlot)
createjs.Ticker.addEventListener('tick', winController3.checkSlot)
createjs.Ticker.addEventListener('tick', winController4.checkSlot)
createjs.Ticker.addEventListener('tick', winController5.checkSlot)
