// canvas setup

const CANVAS = document.getElementById('canvas1');
const CONTEXT = CANVAS.getContext('2d');
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
let particleArray = [];
const NUMBER_PARTICLES = 80;

// get mouse position

const mouse = {
  x: null,
  y: null,
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  // particleArray = [];
});

setInterval(() => {
  mouse.x = undefined;
  mouse.y = undefined;
}, 200);

// Particle Class = Create particles template
class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }

  draw() {
    CONTEXT.beginPath();
    CONTEXT.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    CONTEXT.fillStyle = this.color;
    CONTEXT.strokeStyle = this.color;
    CONTEXT.shadowColor = this.color;
    CONTEXT.shadowBlur = 10;
    CONTEXT.stroke();
    CONTEXT.fill();
  }

  update() {
    this.size -= 0.5; //DECAY SIZE BALL
    if (this.size < 0) {
      this.x = mouse.x + (Math.random() * 20 - 10);
      this.y = mouse.y + (Math.random() * 20 - 10);
      this.size = Math.random() * 15 + 12; // BALL SIZE
      this.weight = Math.random() * 15 - 0.5; //BALL WEIGHT
    }

    this.y += this.weight;
    this.weight += 0.2; // SPEED BOUNCE BALL

    if (this.y > this.size * (Math.random() * 100)) {
      this.weight *= -0.2; // BOUNCE FRICTION
    }
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < NUMBER_PARTICLES; i++) {
    let x = Math.random() * CANVAS.width * -1;
    let y = Math.random() * CANVAS.height * -1;
    let size = Math.random() * 15 + 10;
    let color = `rgba(
        250,
        250,
        250,
        ${Math.random().toFixed(1)}
        )`;
    // let color = 'white';
    let weight = 1;
    let particleInstance = new Particle(x, y, size, color, weight);
    particleArray.push(particleInstance);
  }
}

function animate() {
  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

  CONTEXT.fillRect(0, 0, CANVAS.weight, CANVAS.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }

  requestAnimationFrame(animate);
}

init();
animate();
