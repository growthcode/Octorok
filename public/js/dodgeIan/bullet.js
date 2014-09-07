var Bullet = function (posX) {
  this.damage = 40;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("green").drawCircle(0,0,2);
  this.shape.x = posX;
  this.shape.y = stage.canvas.height - 10;
  this.velocity = 50;
  var that = this;
  this.move = function() {
    that.shape.y -= that.velocity;
  }
}

var sevenSixtyTwo = new Bullet(300);

var fireBullet = function() {
  sevenSixtyTwo.move();
  stage.update();
  console.log('fire');
}

stage.addChild(sevenSixtyTwo.shape);
stage.update();
