var loadStartScreen = function(){
  startButton.addEventListener("click", startGame);
  function startGame(){
    stage.removeChild(startButton);
    stage.update();
    froggerAlpha();
  }
}





