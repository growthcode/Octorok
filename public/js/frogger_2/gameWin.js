// var WinController = function(slotNumber) {
//   this.slotNumber = slotNumber
// }

// WinController.prototype = {
//   checkSlot: function()
// }

var checkWin = function() {
  // console.log('tick')
  if(frog.x > columnWidth && frog.x < columnWidth*2 && frog.y <= rowHeight/2) {
    console.log('you win')
  }
}

createjs.Ticker.addEventListener('tick', checkWin)