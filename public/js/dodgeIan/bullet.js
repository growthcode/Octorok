WIDTH = canvas.width
HEIGHT = canvas.height
x = 20;
y = 20;
dx = 8;
dy = 2;

var Bullet = function (posX) {
  this.damage = 40;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("green").drawCircle(0,0,10);
  this.shape.x = posX;
  this.shape.y = 100;
  this.velocity = 50;
  var that = this;
  // this.move = function() {
  //   that.shape.y -= that.velocity;
  // }
  this.move = function() {
    that.shape.x = x
    that.shape.y = y
    stage.update()
    if (x + dx > WIDTH || x + dx < 0) {
        dx = -dx;
      }
    if (y + dy > HEIGHT) {
      dy = -dy;
     }
    x += dx;
    y += dy;
  }
  stage.update();
  console.log('move')
}

var sevenSixtyTwo = new Bullet(300);

var fireBullet = function() {
  sevenSixtyTwo.move();
  stage.update();
  console.log('fire');
}

stage.addChild(sevenSixtyTwo.shape);
stage.update();

setInterval(sevenSixtyTwo.move, 30)
// createjs.Ticker.addEventListener('tick', fireBullet);
