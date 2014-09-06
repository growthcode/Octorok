frog['radius'] = 25
car1['radius'] = 40
car2['radius'] = 40
truck1['radius'] = 40
truck2['radius'] = 40


var checkVehicleCollission = function(vehicle) {
  var xDist = frog.x - vehicle.x
  var yDist = frog.y - vehicle.y
  var distance = Math.sqrt(xDist*xDist + yDist*yDist);
  if (distance < frog.radius + vehicle.radius) {
    return true
  }
}

var checkAllVehicleCollissions = function() {
  if(checkVehicleCollission(car1) || checkVehicleCollission(car2) || checkVehicleCollission(truck1) || checkVehicleCollission(truck2)) {
    console.log('FROG WAS HIT!')
  }
}

createjs.Ticker.addEventListener('tick', checkAllVehicleCollissions)