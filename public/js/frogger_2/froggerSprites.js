var frogSpriteSheetTestMovements = new createjs.SpriteSheet({
  animations: {
                frogJumpRight:[0,1],
                frogJumpLeft:[2,3],
                frogJumpUp:[4,5],
                frogJumpDown:[6,7]
              },
  images: ["../../assets/frogger_2/froggerSprite.png"],
  frames: [
            [13, 334, 17, 23],
            [43, 335, 25, 22],
            [82, 335, 18, 23],
            [112, 338, 25, 22],
            [12, 369, 23, 17],
            [46, 366, 22, 25],
            [80, 369, 23, 17],
            [114, 366, 22, 25]
          ]
});


frogSpriteSheetTestMovements.getAnimation("frogJumpRight").speed = 5;
frogSpriteSheetTestMovements.getAnimation("frogJumpRight").next = "frogJumpRight";
frogSpriteSheetTestMovements.getAnimation("frogJumpRight").next = "frogJumpRight";
frogSpriteSheetTestMovements.getAnimation("frogJumpRight").next = "frogJumpUp";
frogSpriteSheetTestMovements.getAnimation("frogJumpUp").next = "frogJumpUp";
frogSpriteSheetTestMovements.getAnimation("frogJumpUp").next = "frogJumpLeft";
frogSpriteSheetTestMovements.getAnimation("frogJumpLeft").next = "frogJumpLeft";
frogSpriteSheetTestMovements.getAnimation("frogJumpLeft").next = "frogJumpDown";
frogSpriteSheetTestMovements.getAnimation("frogJumpDown").next = "frogJumpDown";
frogSpriteSheetTestMovements.getAnimation("frogJumpDown").next = "frogJumpUp";

var frogSprite = new createjs.Sprite(frogSpriteSheetTestMovements, "frogJumpRight");
frogSprite.scaleY = frogSprite.scaleX = 2;

stage.addChild(frogSprite);


