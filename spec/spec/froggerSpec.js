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
      var frog = new Frog(100, 100);
    });
    
    it("starts game with 3 lives", function() {
      expect(frog.lives).toEqual(3);
    });
    it("is reset to the correct starting point", function() {
      frog.resetPosition();
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
    xit("with a car reset the frog's position to starting point", function() {
      
    });
    xit("log moves the frog along with the log", function() {
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

