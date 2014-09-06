var froggerSpriteData = new createjs.SpriteSheet({
  animations: {
                frogJumpRight:[0,1],
                frogJumpLeft:[2,3],
                frogJumpUp:[4,5],
                frogJumpDown:[6,7],
                smLog:[8],
                medLog:[9],
                lgLog:[10],
                gatorLog:[11],
                carSedan:[12],
                carRacecar1:[13],
                carRacecar2:[14],
                beaver:[15],
                water:[16],
                winningGrass:[17],
                froggerLogo:[18],
              },
  images: ["../../assets/frogger_2/froggerSprite.png"],
  frames: [
            [13, 334, 17, 23], // frog right 1
            [43, 335, 25, 22], // frog right 2
            [82, 335, 18, 23], // frog left 1
            [112, 338, 25, 22],  // frog left 2
            [12, 369, 23, 17],  // frog up 1
            [46, 366, 22, 25],  // frog up 2
            [80, 369, 23, 17],  // frog down 1
            [114, 366, 22, 25],  // frog down 2
            [7, 230, 85, 21], // small log
            [7, 197, 117, 21], // med log
            [7, 165, 178, 21], // large Log
            [156, 373,89,22], //log like aligator
            [10, 267, 28, 20], // car1 normal
            [46, 265, 28, 24], // car2 racecar
            [82, 264, 24, 26], // car3 racecar
            [116, 271, 32, 18], // beaver
            [0, 119, 339, 34], // water
            [15, 12, 318, 32], // winning grass
          ]
});










