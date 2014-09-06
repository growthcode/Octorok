frog['radius'] = 25
car1['width'] = carWidth
car1['height'] = carHeight
car2['width'] = carWidth
car2['height'] = carHeight
truck1['width'] = truckWidth
truck1['height'] = truckHeight
truck2['width'] = truckWidth
truck2['height'] = truckHeight

var vehicleCenter = function(vehicle) {
  xCenter = vehicle.x + (vehicle.width / 2)
  yCenter = vehicle.y + (vehicle.height / 2)
}


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