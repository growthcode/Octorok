describe("Frogger Game", function () {
  describe("cars", function() {
    it("has a width of 50", function() {
      expect(carWidth).toEqual(50);
    });
  });
  describe("frog", function() {
    it("cannot leave left bound", function() {
      expect(frog.x).toBeGreaterThan(frogRadius)
    })
    it("cannot leave right bound", function() {
      expect(frog.x).toBeLessThan(borderWidth-frogRadius)
    })
    console.log(borderWidth)
  })
});

