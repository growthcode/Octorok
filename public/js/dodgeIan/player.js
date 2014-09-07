var Player = function(name, posX, posY, radius, gravatar){
  this.radius=radius
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("red").drawCircle(100,100,radius);
  this.name = name;
  this.shape.x = posX;
  this.shape.y = posY;
  this.stepSize = 10; //pixels
  this.hp = 100;
  var that = this;
  this.step = function(direction) {
    if (direction == "left") {
      that.shape.x -= this.stepSize;
    } else {
      that.shape.x += this.stepSize;
    }
  }
}

var antonio = new Player("Antonio", 100, 200, 30);
var xang = new Player("Xang", 200, 200, 30);

stage.addChild(antonio.shape);
stage.addChild(xang.shape);
stage.update();

var movePlayer = function(direction) {
  if (direction == "right") {
    antonio.step("right");
    xang.step("right");
    console.log("right");
    stage.update();
    // stage.update();
    // if(frog.x >= (borderWidth-frogRadius)){
    //   frog.x = borderWidth-frogRadius;
    // }
  } else {
    antonio.step("left");
    xang.step("left");
    console.log("left");
    stage.update();
    // stage.update();
    // if(frog.x <= frogRadius){
    //   frog.x = frogRadius;
    // }
  }
}
