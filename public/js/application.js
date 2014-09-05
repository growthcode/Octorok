var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('frog', '../assets/frog.png');
}

var platform;
function create() {
  scale = game.rnd.realInRange(0.2, 0.2);
  frog = game.add.sprite(600, 0,'frog');
  frog.scale.x = scale;
  frog.scale.y = scale;
  game.physics.arcade.enable(frog);

  frog.body.collideWorldBounds = true;
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

