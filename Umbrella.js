class Umbrella {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }

      this.radius=radius;
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0, 0, this.radius , this.radius);
      pop();
    }
    
  }