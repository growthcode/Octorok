var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('frog', '../assets/frog.png');
  game.load.image('car', '../assets/car.png');
  game.load.image('log', '../assets/log.png');
  game.load.image('water', '../assets/water.jpg');
}

var platform;
function create() {
  frogScale = game.rnd.realInRange(0.1,0.1);
  frog=game.add.sprite(0, 540,'frog');
  game.physics.arcade.enable(frog);
  frog.body.collideWorldBounds = true;
  frog.scale.x = frogScale;
  frog.scale.y = frogScale;
  carScale = game.rnd.realInRange(0.15,0.15);
  car=game.add.sprite(0, 500,'car');
  car.scale.x = carScale;
  car.scale.y = carScale;
  waterScale = game.rnd.realInRange(.5,.5);
  water=game.add.sprite(-170, 65,'water');
  water.scale.x = waterScale*2.2;
  water.scale.y = waterScale;
  logScale = game.rnd.realInRange(0.2,0.2);
  log=game.add.sprite(0, 200,'log');
  log.scale.x = logScale;
  log.scale.y = logScale;
  water.style.height="50px"

}

function update() {
  // game.physics.arcade.collide(player, cars);
  // game.physics.arcade.collide(player, logs);

  cursors = game.input.keyboard.createCursorKeys();
  frog.body.velocity.x = 0;
  frog.body.velocity.y = 0;


  if (cursors.left.isDown){
    frog.body.velocity.x -= 50;
  }
  if (cursors.right.isDown){
    frog.body.velocity.x = 150;
  }
  if (cursors.up.isDown){
    frog.body.velocity.y = -150;
  }
  if (cursors.down.isDown){
    frog.body.velocity.y = 150;
  }
}

