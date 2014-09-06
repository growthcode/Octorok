frog['radius'] = 25
car1['radius'] = 40
car2['radius'] = 40
truck1['radius'] = 40
truck2['radius'] = 40


var checkCollissionWithVehicle = function(vehicle) {
  var xDist = frog.x - vehicle.x
  var yDist = frog.y - vehicle.y
  var distance = Math.sqrt(xDist*xDist + yDist*yDist);
  if (distance < frog.radius + vehicle.radius) {
    return true
  }
}

var checkAllCollissions = function() {
  if(checkCollissionWithVehicle(car1) || checkCollissionWithVehicle(car2) || checkCollissionWithVehicle(truck1) || checkCollissionWithVehicle(truck2)) {
    console.log('FROG WAS HIT!')
  }
}

createjs.Ticker.addEventListener('tick', checkAllCollissions)