var WinController = function(frog, slotNumber) {
  this.frog = frog
  this.slotNumber = slotNumber
}

WinController.prototype = {
  checkWin: function() {
  // console.log('tick')
    if(this.frog.x > columnWidth && this.frog.x < columnWidth*2 && this.frog.y <= rowHeight/2) {
      console.log('you win')
    }
  }
}

winController = new WinController(frog, 1)
createjs.Ticker.addEventListener('tick', winController.checkWin)