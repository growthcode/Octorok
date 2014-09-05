var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('frog', '../assets/frog.png');
  // game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

var platform;
function create() {
  game.add.sprite(0, 0,'frog', 32, 48);
}

function update() {
}

