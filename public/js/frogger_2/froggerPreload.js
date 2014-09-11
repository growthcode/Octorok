manifest = [
  {src:"../assets/frogger_2/froggerSprite.png", id:"spriteSheet"},
  {src:"../js/frogger_2/cars.js", id:"cars"},
  {src:"../js/frogger_2/logs.js", id:"logs"},
  {src:"../js/frogger_2/controller.js", id:"controller"},
  {src:"../js/frogger_2/loadingScreens.js", id:"loadScreens"},
  {src:"../js/frogger_2/froggerSpriteSheet.js", id:"froggerSpriteSheet"}
]

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
  }

  var handleComplete = function(){
    console.log("here")
    loadStartScreen();
    setInterval(function(){loadingMessage.text = ""},1000);
  }
startPreload();

