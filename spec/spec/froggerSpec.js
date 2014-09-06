describe("Frogger Game", function () {
  describe("car model", function() {
    it("has a width of 50", function() {
      expect(carWidth).toEqual(50);
    });
  });
  describe("Frog", function() {
    it("cannot starts game within the horizontal boundaries", function() {
      expect(frog.x).toBeGreaterThan(frogRadius)
      expect(frog.x).toBeLessThan(borderWidth-frogRadius)
    });
    it("cannot starts game within the vertical boundaries", function() {
      expect(frog.y).toBeGreaterThan(frogRadius)
      expect(frog.y).toBeLessThan(borderHeight-frogRadius)
    });
    it("is reset to the correct starting point", function() {
      resetFrogPosition();
      expect(frog.x).toEqual(400);
      expect(frog.y).toEqual(565);
    });
  });
});

