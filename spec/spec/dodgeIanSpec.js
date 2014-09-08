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
      expect(new Controller(object1, object2)._findDistance()).toEqual(100);
    });
    
    describe("checkForCollision function", function() {
      it("returns true if the collision occurs", function() {
        var object1 = new Player("player", 100, 100, 10);
        var object2 = new Bullet(100, 99);
        var controller = new Controller(object1, object2);
        expect(controller.checkForCollision()).toEqual(true);
      });
      it("invokes _injurePlayer function with appropriate arguments within its body", function() {
        var player = new Player("player", 100, 100, 10);
        var bullet = new Bullet(100, 99, 10, 5);
        var controller = new Controller(player, bullet);
        spyOn(controller, "_injurePlayer");
        controller.checkForCollision();
        expect(controller._injurePlayer).toHaveBeenCalledWith(player, bullet.damage);
      });
      it("invokes destroyBullet function with appropriate argument within its body", function() {
        var player = new Player("player", 100, 100, 10);
        var bullet = new Bullet(100, 99, 10, 5);
        var controller = new Controller(player, bullet);
        spyOn(controller, "_destroyBullet");
        controller.checkForCollision();
        expect(controller._destroyBullet).toHaveBeenCalledWith(bullet);
      });
    });
  });
});
