let particles = [];

function setup() {
  createCanvas(800, 600);
  
  // Create particles
  for (let i = 0; i < 1000; i++) {
    let particle = new Particle();
    particles.push(particle);
  }
}

function draw() {
  background(220);
  
  // Update and display particles
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 2;
    this.maxForce = 0.1;
    this.desiredSeparation = 25;
    this.size = random(1, 5);
  }
  
  update() {
    let mouse = createVector(mouseX, mouseY);
    
    // Calculate steering force
    let desired = p5.Vector.sub(mouse, this.position);
    let d = desired.mag();
    
    if (d < this.desiredSeparation) {
      desired.setMag(map(d, 0, this.desiredSeparation, 0, this.maxSpeed));
    } else {
      desired.setMag(this.maxSpeed);
    }
    
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    
    // Apply steering force
    this.acceleration.add(steer);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    
    // Reset acceleration
    this.acceleration.mult(0);
  }
  
  display() {
    noStroke();
    fill(0);
    ellipse(this.position.x, this.position.y, this.size);
  }
}
