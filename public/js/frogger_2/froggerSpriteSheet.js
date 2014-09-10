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
                froggerExtraLife:[19],
              },
  images: ["../../assets/frogger_2/froggerSprite.png"],
  frames: [
            [13, 334, 26, 26], // frog right 1
            [43, 335, 26, 26], // frog right 2
            [82, 335, 26, 26], // frog left 1
            [112, 338, 26, 26],  // frog left 2
            [12, 369, 26, 26],  // frog up 1
            [46, 366, 26, 26],  // frog up 2
            [80, 369, 26, 26],  // frog down 1
            [114, 366, 26, 26],  // frog down 2
            [7, 230, 85, 28], // small log
            [7, 197, 117, 28], // med log
            [7, 165, 178, 28], // large Log
            [156, 373,89,26], //log like aligator
            [10, 267, 28, 26], // car1 normal
            [46, 265, 28, 26], // car2 racecar
            [82, 264, 24, 26], // car3 racecar
            [116, 271, 32, 26], // beaver
            [0, 119, 339, 34], // water
            [0, 55, 399, 54], // winning grass
            [15, 12, 318, 32], // frogger logo
            [12, 369, 23, 17],  // frog up 1
          ]
});










