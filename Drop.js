class createDrop {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
    }

    this.radius=5;
    this.body = Bodies.circle(x, y, 5 , options);
    World.add(world, this.body);
  }
}