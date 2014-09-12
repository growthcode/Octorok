manifest = [
  {src:"../assets/frogger_2/froggerSprite.png", id:"spriteSheet"},
  {src:"../js/frogger_2/cars.js", id:"cars"},
  {src:"../js/frogger_2/logs.js", id:"logs"},
  {src:"../js/frogger_2/controller.js", id:"controller"},
  {src:"../js/frogger_2/loadingScreens.js", id:"loadScreens"},
  {src:"../js/frogger_2/froggerSpriteSheet.js", id:"froggerSpriteSheet"},
  {id: "die", src: "../assets/frogger_2/Frog_die.mp3"},
  {id: "marioJump", src: "../assets/frogger_2/frog_hop.mp3"},
  {id: "jumpInSlot", src: "../assets/frogger_2/frog_get_to_top.mp3"},
  {id: "menuSong", src: "../assets/frogger_2/froggerMenuSong.mp3"},
  {id: "playingSong", src: "../assets/frogger_2/playingSong.mp3"},
  {id: "gameOverSong", src: "../assets/frogger_2/frogger_end_song.mp3"}
];

  var preload = new createjs.LoadQueue(true);
  preload.installPlugin(createjs.Sound);

  var startPreload = function() {
    preload.on("progress", handleProgress);
    preload.on("complete", handleComplete);
    preload.loadManifest(manifest, true);
  }

  var loadingMessage = new createjs.Text('Loading', 'bold 24px Helvetica', '#FFFFFF');
  loadingMessage.x= 125
  loadingMessage.y= 223

  var handleProgress = function(event){
    loadingMessage.text = Math.floor(event.progress*100) + "% LOADED"
    stage.addChild(loadingMessage)
    stage.update();
  }

  var handleComplete = function(event){
    startButton.graphics.beginFill("black").drawCircle(0,0, 500);
    startButton.addEventListener("click", playSong);
    startButton.x = canvas.width/2;
    startButton.y = canvas.height/2;
    stage.addChild(startButton);
    stage.update();

    welcomeText.x = 30;
    welcomeText.y = 100;
    stage.addChild(welcomeText);
    stage.update();

    clickToPlayText.x = canvas.width/4 ;
    clickToPlayText.y = 250;
    stage.addChild(clickToPlayText);
    stage.update();

    console.log("here")
    createjs.Sound.play("menuSong");
    console.log("Preloaded:", "menuSong", "../assets/frogger_2/froggerMenuSong.mp3");
    loadStartScreen();
    setInterval(function(){loadingMessage.text = ""},1000);
  }
startPreload();
