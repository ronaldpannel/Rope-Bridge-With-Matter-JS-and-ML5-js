class Ball {
  constructor() {
    this.x = width / 2;
    this.y = 50;
    this.radius = 10;
    this.hue = 0;
    this.done = false;
    this.body = Bodies.circle(this.x, this.y, this.radius, {restitution: 0.6});
    this.velocity = Vector.create(random(-1, 1), random(-1, 1));
    Body.setVelocity(this.body, this.velocity);
    Composite.add(engine.world, this.body);
  }
  display() {
    fill(`hsl(${this.hue}, 100%, 50%)`);
    ellipse(
      this.body.position.x,
      this.body.position.y,
      this.radius * 2,
      this.radius * 2
    );
    if (this.hue < 360) {
      this.hue += 5;
    } else {
      this.hue = 0;
    }
  }
  checkDone() {
    if (this.body.position.y > height + this.radius * 3) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
  removeBalls() {
    Composite.remove(engine.world, this.body);
  }
}
