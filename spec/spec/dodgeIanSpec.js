describe("Dodge Ian Game", function() {
  
  afterEach(function() {
    document.body.removeChild(canvas);
  });
  
  describe("Ian model", function() {
    
    beforeEach(function() {
      ian = new Ian();
    });
    
    it("starts at the appropriate position", function() {
      expect(ian.shape.x).toEqual(300);
      expect(ian.shape.y).toEqual(525);
    });
    it("is redrawn after each move", function() {
      spyOn(stage, 'update');
      ian.move();
      expect(stage.update).toHaveBeenCalled();
    });
  });
  
  describe("Controller", function() {
    it("_findDistance function returns the correct distance between objects", function() {
      var object1 = new Player("player", 100, 100, 10);
      var object2 = new Bullet(100, 200);
      expect(new Controller(object1, object2)._findDistance()).toEqual(100);
    });
    
    describe("checkForCollision function", function() {
      
      beforeEach(function() {
        player = new Player("player", 100, 100, 10);
        bullet = new Bullet(100, 99);
        controller = new Controller(player, bullet);
      });
      
      it("returns true if the collision occurs", function() {
        expect(controller.checkForCollision()).toEqual(true);
      });
      it("invokes _injurePlayer function with appropriate arguments within its body", function() {
        spyOn(controller, "_injurePlayer");
        controller.checkForCollision();
        expect(controller._injurePlayer).toHaveBeenCalledWith(player, bullet.damage);
      });
      it("invokes _destroyBullet function with appropriate argument within its body", function() {
        spyOn(controller, "_destroyBullet");
        controller.checkForCollision();
        expect(controller._destroyBullet).toHaveBeenCalledWith(bullet);
      });
      it("invokes _checkIfPlayerAlive function with appropriate argument within its body", function() {
        spyOn(controller, "_checkIfPlayerAlive");
        controller.checkForCollision();
        expect(controller._checkIfPlayerAlive).toHaveBeenCalledWith(player);
      });
    });
  });
});
