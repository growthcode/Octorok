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
  
  describe("Controller", function() {
    it("findDistance function returns the correct distance between objects", function() {
      var object1 = new Player("player", 100, 100, 10);
      var object2 = new Bullet(100, 200);
      expect(new CollisionDetector(object1, object2)._findDistance()).toEqual(100);
    });
    
    describe("bulletPlayerCollision", function() {
      it("returns true if the collision occurs", function() {
        var object1 = new Player("player", 100, 100, 10);
        var object2 = new Bullet(100, 99);
        var controller = new CollisionDetector(object1, object2);
        expect(controller.bulletPlayerCollision()).toEqual(true);
      });
    });
  });
});
