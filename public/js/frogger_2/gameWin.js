Win = {}

Win.Slot = function(leftBound, rightBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
}

Win.Controller = function(frog, slot) {
  this.frog = frog
  this.slot = slot
  this.checkSlot = function() {
    if(this.frog.x > this.slot.leftBound && this.frog.x < this.slot.rightBound && this.frog.y <= rowHeight/2) {
      console.log('you win')
    }
  }.bind(this)
}

slot1 = new Win.Slot(columnWidth, (columnWidth*2))
winController1 = new Win.Controller(frog, slot1)
createjs.Ticker.addEventListener('tick', winController1.checkSlot)