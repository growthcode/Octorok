var Ian = function() {
  this.shape = new createjs.Shape()
  this.shape.graphics.beginFill('red').drawCircle(0,0,50);
  this.shape.x = 300;
  this.shape.y = 525;
}

var bossIan = new Ian();
stage.addChild(bossIan.shape);
stage.update();