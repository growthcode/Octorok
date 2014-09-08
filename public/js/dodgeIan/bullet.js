var BULLET_MIN_SIZE = 6,
    BULLET_RADIUS = Math.random() * 10 + BULLET_MIN_SIZE,
    DAMAGE_MULTIPLIER = 2,
    BULLET_COLOR = "green",
    BULLET_RELATIVE_ORIGIN_X = 0, // should not change
    BULLET_RELATIVE_ORIGIN_Y = 0; // should not change




var Bullet = function (positionX, positionY, velocityX, velocityY) {
  this.radius = BULLET_RADIUS;
  this.damage = this.radius * DAMAGE_MULTIPLIER;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill(BULLET_COLOR).drawCircle(BULLET_RELATIVE_ORIGIN_X, BULLET_RELATIVE_ORIGIN_Y, this.radius);
  this.shape.x = positionX;
  this.shape.y = positionY;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.alive = true;
  var that = this;
  this.move = function() {
    if (that.shape.x + velocityX > canvas.width || that.shape.x + velocityX < 0) {
        velocityX = -velocityX;
      }
    if (that.shape.y + velocityY > canvas.height) {
      velocityY = -velocityY;
     }
    that.shape.x += velocityX;
    that.shape.y += velocityY;
  }
}
