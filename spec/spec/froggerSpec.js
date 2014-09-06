describe("Frogger Game", function () {
  describe("car model", function() {
    it("has a width of 50", function() {
      expect(carWidth).toEqual(50);
    });
  });
  describe("frog", function() {
    it("cannot starts game within the horizontal boundaries", function() {
      expect(frog.x).toBeGreaterThan(frogRadius)
      expect(frog.x).toBeLessThan(borderWidth-frogRadius)
    })
    it("cannot starts game within the vertical boundaries", function() {
      expect(frog.y).toBeGreaterThan(frogRadius)
      expect(frog.y).toBeLessThan(borderHeight-frogRadius)
    })
  })
});

