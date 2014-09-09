var CANVAS_WIDTH = canvas.width,
    IAN_RELATIVE_ORIGIN_X = 0, // should not change
    IAN_RELATIVE_ORIGIN_Y = 0, // should not change
    IAN_RELATIVE_RADIUS = 50,
    IAN_START_POS_X = 300,
    IAN_START_POS_Y = 525,
    IAN_RADIUS = IAN_RELATIVE_RADIUS,
    IAN_DX = 10; // velocity of X

var BULLET_SPEED = 30,
    BULLET_FIRE_RATE = 1000;

var bulletArray = [];

var Ian = function() {
  var that = this;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill('red').drawCircle(IAN_RELATIVE_ORIGIN_X, IAN_RELATIVE_ORIGIN_Y, IAN_RELATIVE_RADIUS);
  this.shape.x = IAN_START_POS_X;
  this.shape.y = IAN_START_POS_Y;
  this.shape.radius = IAN_RADIUS;
  this.dx = IAN_DX;
  this.move = function() {
    if (that.shape.x + that.dx + 75 > CANVAS_WIDTH || that.shape.x + that.dx - 75 < 0) {
      that.dx = -that.dx;
    }
    that.shape.x += that.dx;
    stage.update();
  }
  this.fireBullet = function(){
    var bullet = new Bullet(that.shape.x, that.shape.y, Math.random() * 20 - 10, Math.random() * - 10 - 2);
    bulletArray.push(bullet);
    stage.addChild(bullet.shape);
    setInterval(bullet.move, BULLET_SPEED);
    stage.update();
    console.log("count of Bullets");
  }
  this.shoot = function() {
    setInterval(that.fireBullet, BULLET_FIRE_RATE);
  }
}

var bossIan = new Ian();
stage.addChild(bossIan.shape);
stage.update();

createjs.Ticker.addEventListener('tick', bossIan.move);
bossIan.shoot();
