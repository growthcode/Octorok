var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


var left = 0;
var right = 0;
var down = 0;
var up = 0;
var log = [];
var car = [];
var frog;
var platform;
var carArrayPositionX = []
var logArrayPositionX = []
var l = 0;
var x = 0;

for (var xj = 0; xj < 200; xj ++){
  x += 350;
  carArrayPositionX.push(x);
}

for(var lg = 0; lg <200; lg ++){
  l -= 350;
  logArrayPositionX.push(l);
}

function preload() {
  game.load.image('car', '../assets/car.png');
  game.load.image('log', '../assets/log.png');
  game.load.image('water', '../assets/water.jpg');
  game.load.image('frog', '../assets/frog.png');
}


function create() {
  frogScale = game.rnd.realInRange(0.1,0.1);
  frog = game.add.sprite(360, 600,'frog');

  game.physics.arcade.enable(frog);
  frog.body.collideWorldBounds = true;
  frog.scale.x = frogScale;
  frog.scale.y = frogScale;


  for(var i = 0; i < 200; i ++){
    carScale = game.rnd.realInRange(0.15,0.15);
    car[i] = game.add.sprite(carArrayPositionX[i], 480,'car');
    game.physics.arcade.enable(car);
    car[i].body.collideWorldBounds = false;
    car[i].scale.x = carScale;
    car[i].scale.y = carScale;
  }



  waterScale = game.rnd.realInRange(.5,.5);
  water = game.add.sprite(-170, 0,'water');
  water.scale.x = waterScale*2.2;
  water.scale.y = waterScale;

  for(var i = 0; i < 200; i ++){

  logScale = game.rnd.realInRange(0.2,0.2);
  log[i] = game.add.sprite(logArrayPositionX[i], 200,'log');
  game.physics.arcade.enable(log);
  car[i].body.collideWorldBounds = false;
  log[i].scale.x = logScale;
  log[i].scale.y = logScale;
  }
}

function update() {

  left ++;
  right ++;
  down ++;
  up ++;



  cursors = game.input.keyboard.createCursorKeys();
  frog.body.velocity.x = 0;
  frog.body.velocity.y = 0;

  var collision = function(){
    frog.kill();
    console.log("dead");
  }

  game.physics.arcade.collide(frog, car, collision);

  for(var k = 0; k < 200; k++){
    car[k].body.velocity.x = -100;

  }

 for(var f = 0; f < 200; f ++){
  log[f].body.velocity.x = +100;
 }



  if (cursors.left.isDown){
    if(left % 7 == 0){
      frog.body.position.x -= 20;
      console.log(left);
    }
  }
  if (cursors.right.isDown){
    if(right % 7 == 0){
      frog.body.position.x += 20;
    }
  }
  if (cursors.up.isDown){
    if(down % 7 == 0){
      frog.body.position.y -= 20;
    }
  }
  if (cursors.down.isDown){
    if(up % 7 == 0){
      frog.body.position.y += 20;
    }
  }

}

