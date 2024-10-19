class Bridge {
  constructor(num, radius, length) {
    this.bodies = [];
    this.num = num;
    this.radius = radius;
    this.length = length;
    this.init();
  }
  init() {
    for (let i = 0; i < this.num; i++) {
      let x = width / 2 + i * 20;
      let y = random(0, 40);
      
      this.bodies[i] = Bodies.circle(x, y, this.radius);
    }
    this.chains = Composite.create();
    Composite.add(this.chains, this.bodies);
    let options = {
      stiffness: 1,
      damp0ng: 0.1,
      length: this.length,
    };
    Composites.chain(this.chains, 0, 0, 0, 0, options);
    Composite.add(engine.world, [this.chains]);
  }
  display() {
    stroke(0)
    strokeWeight(2)
    for (let i = 0; i < this.bodies.length; i++) {
      let x1 = this.bodies[i].position.x;
      let y1 = this.bodies[i].position.y;
      fill(255);
      ellipse(x1, y1, this.radius, this.radius);

      let x2;
      let y2;
      if (i < this.bodies.length - 1) {
        x2 = this.bodies[i + 1].position.x;
        y2 = this.bodies[i + 1].position.y;
        line(x1, y1, x2, y2);
        
      }
    }
  }
}
