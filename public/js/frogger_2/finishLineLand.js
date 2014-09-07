var finishLine = new createjs.SpriteSheet({
  animations: {
                finishLanding:[0,1],
              },
  images: ["../../assets/frogger_2/froggerSprite.png"],
  frames: [

            [0, 55, 399, 54]

          ]
});

var landFinish = new createjs.Sprite(finishLine, "finishLanding");
stage.addChild(landFinish);
stage.update();