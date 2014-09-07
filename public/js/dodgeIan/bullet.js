var Bullet = function (posX,posY,dx,dy) {
  this.damage = 40;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("green").drawCircle(0,0,5);
  this.shape.x = posX;
  this.shape.y = posY;
  this.dx = dx;
  this.dy = dy;
  var that = this;
  this.move = function() {
    if (that.shape.x + dx > canvas.width || that.shape.x + dx < 0) {
        dx = -dx;
      }
    if (that.shape.y + dy > canvas.height) {
      dy = -dy;
     }
    that.shape.x += dx;
    that.shape.y += dy;
  }
}

var sevenSixtyTwo = new Bullet(bossIan.shape.x, bossIan.shape.y, 16, -4);

var fireBullet = function() {
  sevenSixtyTwo.move();
  stage.update();
  console.log('fire');
}

stage.addChild(sevenSixtyTwo.shape);
stage.update();

setInterval(sevenSixtyTwo.move, 30)
