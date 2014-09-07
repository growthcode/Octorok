WIDTH = canvas.width;

var Ian = function() {
  var that = this
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill('red').drawCircle(0,0,50);
  this.shape.x = 300;
  this.shape.y = 525;
  this.shape.radius = 50;
  var that = this;
  this.dx = 10;
  this.move = function() {
    if (that.shape.x + that.dx + 75 > WIDTH || that.shape.x + that.dx - 75 < 0) {
      that.dx = -that.dx;
    }
    that.shape.x += that.dx;
    stage.update();
  }
}


var bossIan = new Ian();
stage.addChild(bossIan.shape);
stage.update();

createjs.Ticker.addEventListener('tick', bossIan.move)
