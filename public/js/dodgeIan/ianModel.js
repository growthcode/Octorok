WIDTH = canvas.width;
var bulletArray = [];

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
  var fireBullet = function(){
    var bullet = new Bullet(that.shape.x, that.shape.y, Math.random() * 10, Math.random() * -10);
      bulletArray.push(bullet);
    stage.addChild(bullet.shape);
    setInterval(bullet.move,30);
    stage.update();
    var i = 0;
    console.log("count of Bullets")
  }
  this.shoot = function() {
    setInterval(fireBullet, 1000)
  }
}

var bossIan = new Ian();
stage.addChild(bossIan.shape);
stage.update();

createjs.Ticker.addEventListener('tick', bossIan.move)
createjs.Ticker.addEventListener('tick', destroyBullets)

 bossIan.shoot()

