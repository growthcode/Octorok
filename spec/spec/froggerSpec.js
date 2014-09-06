describe("Frogger Game: ", function () {

  describe("Car model", function() {
    it("has a width of 50", function() {
      expect(carWidth).toEqual(50);
    });
  });

  describe("Frog", function() {
    xit("cannot starts game within the horizontal boundaries", function() {
      expect(frog.x).toBeGreaterThan(frogRadius)
      expect(frog.x).toBeLessThan(borderWidth-frogRadius)
    });
    xit("cannot starts game within the vertical boundaries", function() {
      expect(frog.y).toBeGreaterThan(frogRadius)
      expect(frog.y).toBeLessThan(borderHeight-frogRadius)
    });
    xit("is reset to the correct starting point", function() {
      resetFrogPosition();
      expect(frog.x).toEqual(400);
      expect(frog.y).toEqual(565);
    });
  });

  describe("Collision with", function() {
    xit("car resets the frog's position to starting point", function() {
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

