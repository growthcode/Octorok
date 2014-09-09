var logs = [];

var logCreator = function() {
  for (var i = 2; i < 7 ; i++) {
    if (i % 2 == 0) {
      logs.push(new Log(100, rowHeight * i - rowHeight, "left"));
      logs.push(new Log(400, rowHeight * i - rowHeight, "left"));
      logs.push(new Log(700, rowHeight * i - rowHeight, "left"));
    } else {
      logs.push(new Log(100, rowHeight * i - rowHeight, "right"));
      logs.push(new Log(400, rowHeight * i - rowHeight, "right"));
      logs.push(new Log(700, rowHeight * i - rowHeight, "right"));
    }
  }
  for (var i in logs) {
    stage.addChild(logs[i]);
    logs[i].width = logs[i].getBounds().width;
    logs[i].height = logs[i].getBounds().width;
  }
  stage.update();
}

logCreator();
