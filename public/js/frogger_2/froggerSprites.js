var froggerSpriteData = {
     images: ["froggerSprite.png"],
     frames: {width:33, height:9},
     animations: {
                  frogFaceRight:[1,3],
                  frogMoveRight:[4,7],
                  frogFaceLeft:[1,3],
                  frogMoveLeft:[4,8],
                  frogLeft:[10,16]
                  jump:[5,8,"run"]
                }
 };

 var spriteSheet = new createjs.SpriteSheet(data);
 var animation = new createjs.Sprite(spriteSheet, "run");

