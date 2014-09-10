describe("Frogger Game: ", function () {
  
  describe("Vehicle model", function() {
    it("is instantiated at the correct coordinates", function() {
      var car = new Vehicle(10, 20, "right");
      expect(car.x).toEqual(10);
      expect(car.y).toEqual(20);
    });
  });
  
  describe("Frog", function() {
    
    beforeEach(function() {
      frog = new Frog(100, 100);
    });
    
    it("starts game with 3 lives", function() {
      expect(frog.lives).toEqual(3);
    });
    it("is reset to the correct starting point", function() {
      gameController.resetFrogPosition();
      expect(frog.x).toEqual(frogXStart);
      expect(frog.y).toEqual(frogYStart);
    });
    it("is not able to step outside of canvas boundaries", function() {
      spyOn(frog, "keepInBounds");
      moveFrog("right");
      expect(frog.keepInBounds).toHaveBeenCalled();
    });
  });

  describe("Collisions", function() {
    
    beforeEach(function() {
      gameController.vehicles.push(new Vehicle(100, 100, "right"));
      gameController.logs.push(log = new Log(100, 100, "right"));
      frog.x = 99;
      frog.y = 99;
    });
    
    it("with a car reset the frog's position to starting point", function() {
      spyOn(gameController, "killFrog").and.callThrough();
      spyOn(gameController, "resetFrogPosition").and.callThrough();
      gameController.checkAllVehicleCollisions();
      expect(gameController.killFrog).toHaveBeenCalled();
      expect(gameController.resetFrogPosition).toHaveBeenCalled();
      expect(frog.x).toEqual(frogXStart);
      expect(frog.y).toEqual(frogYStart);
    });
    it("with a log moves the frog along with the log", function() {
      spyOn(gameController, "rideLog").and.callThrough();
      gameController.checkAllLogCollisions();
      expect(gameController.rideLog).toHaveBeenCalled();
    });
    xit("with the boundaries while being carried by log kills the frog", function() {
      frog.x = 376;
      var log = new Log(313, 100, "right");
      spyOn(gameController, "killFrog");
      spyOn(gameController, "killIfOutOfBounds").and.callThrough();
      // gameController.checkAllLogCollisions();
      // gameController.moveObjects();
      expect(gameController.killFrog).toHaveBeenCalled();
    });
  });

  describe("Ticker", function() {
    xit("checks for car collisions", function() {
    });
    xit("checks for log collisions", function() {
    });
    xit("checks that frog is within canvas boundaries", function() {
    });
    xit("is listening for key presses", function() {
    });
  });

  describe("Keypress: ", function() {
    xit("left, moves frog to the left", function() {
    });
    xit("up, moves frog up", function() {
    });
  });
});

