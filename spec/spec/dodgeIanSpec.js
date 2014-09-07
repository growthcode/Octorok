describe("Dodge Ian Game", function() {
  
  afterEach(function() {
    document.body.removeChild(canvas);
  });
  
  describe("Ian model", function() {
    it("starts at the appropriate position", function() {
      expect(bossIan.shape.x).toEqual(300);
      expect(bossIan.shape.y).toEqual(525);
    });
    it("is redrawn after each move", function() {
      var ian = new Ian();
      spyOn(stage, 'update');
      ian.move();
      expect(stage.update).toHaveBeenCalled();
    });
  });
});
