manifest = [
  {src:"../assets/frogger_2/froggerSprite.png", id:"spriteSheet"},
  {src:"../js/frogger_2/application.js", id:"application"},
  {src:"../js/frogger_2/cars.js", id:"cars"},
  {src:"../js/frogger_2/logs.js", id:"logs"},
  {src:"../js/frogger_2/frog.js", id:"frog"},
  // {src:"../js/frogger_2/controller.js", id:"controller"},
  {src:"../js/frogger_2/froggerSpriteSheet.js", id:"froggerSpriteSheet"}
]

  var preload = new createjs.LoadQueue(true);
  preload.installPlugin(createjs.Sound);

  var startPreload = function() {
    preload.on("progress", handleProgress);
    preload.on("complete", handleComplete);
    preload.on("fileload", handleFileLoad);
    preload.loadManifest(manifest, true);
  }

  var loadingMessage = new createjs.Text('Loading', 'bold 24px Helvetica', '#FFFFFF');
  loadingMessage.x= 125
  loadingMessage.y= 223

  var handleProgress = function(event){
    loadingMessage.text = Math.floor(event.progress*100) + "% LOADED"
    stage.addChild(loadingMessage)
    // stage.update();
  }

  var handleComplete = function(){
    setInterval(function(){loadingMessage.text = ""},1000);
    qwerty();

    // stage.update();
  }

  var handleFileLoad = function(event){
    // console.log(event.progress)
    // console.log("handling file load")
  }
    startPreload();
// froggerPreload();

// OOJS
// var Preload = function(){
//   this.installPlugin(createjs.Sound);
// }
// Preload.prototype = new createjs.LoadQueue(true);
// Preload.prototype.startPreload = function(){
//   this.on("progress", this.handleProgress);
//   this.on("complete", this.handleComplete);
//   this.on("fileload", handleFileLoad);
//   this.loadManifest(manifest, true);
// }

