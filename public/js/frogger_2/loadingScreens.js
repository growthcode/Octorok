var loadStartScreen = function(){
  startButton.addEventListener("click", startGame);
  function startGame(){
    stage.removeChild(clickToPlayText, welcomeText ,startButton);
    stage.update();
    froggerAlpha();
  }
}





