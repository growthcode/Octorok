var Bullet = function (posX, posY, radius, dx, dy) {
  this.radius = radius;
  this.damage = 40;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("green").drawCircle(0,0,radius);
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

var fireBullet = function(bullet) {
  bullet.move();
  stage.update();
  console.log('fire');
}
