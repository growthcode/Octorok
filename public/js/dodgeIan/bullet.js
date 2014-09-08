var BULLET_MIN_SIZE = 6,
    DAMAGE_MULTIPLIER = 2,
    BULLET_COLOR = "green",
    BULLET_RELATIVE_ORIGIN_X = 0, // should not change
    BULLET_RELATIVE_ORIGIN_Y = 0; // should not change




var Bullet = function (positionX, positionY, dx, dy) {
  this.radius = Math.random() * 10 + BULLET_MIN_SIZE;
  this.damage = this.radius * DAMAGE_MULTIPLIER;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill(BULLET_COLOR).drawCircle(BULLET_RELATIVE_ORIGIN_X, BULLET_RELATIVE_ORIGIN_Y, this.radius);
  this.shape.x = positionX;
  this.shape.y = positionY;
  this.dx = dx;
  this.dy = dy;
  this.alive = true;
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
