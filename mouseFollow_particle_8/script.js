// canvas setup

const CANVAS = document.getElementById('canvas1');
const CONTEXT = CANVAS.getContext('2d');
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
let particleArray = [];
const NUMBER_PARTICLES = 280;

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

// setInterval(() => {
//   mouse.x = undefined;
//   mouse.y = undefined;
// }, 200);

// Particle Class = Create particles template
class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }

  update() {
    this.size -= 0.05; //DECAY SIZE BALL
    if (this.size < 0) {
      this.x = mouse.x + (Math.random() * 20 - 10);
      this.y = mouse.y + (Math.random() * 20 - 10);
      this.size = Math.random() * 10 + 2; // BALL SIZE
      this.weight = Math.random() * 5 - 0.5; //BALL GRAVITY
    }

    this.y += this.weight;
    this.weight += 0.1; // SPEED BOUNCE BALL

    if (this.y > CANVAS.height / 8 - this.size) {
      this.weight *= -0.2; // BOUNCE FRICTION
    }
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < NUMBER_PARTICLES; i++) {
    let x = Math.random() * CANVAS.width * -2;
    let y = Math.random() * CANVAS.height * -2;
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
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}

init();
animate();

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let distance =
        (particleArray[a].x - particleArray[b].x) *
          (particleArray[a].x - particleArray[b].x) +
        (particleArray[a].y - particleArray[b].y) *
          (particleArray[a].y - particleArray[b].y);

      if (distance < 12000) {
        opacityValue = 1 - distance / 1000000;
        CONTEXT.strokeStyle = `rgba(
          250,
          250,
          250,
          ${opacityValue}
          )`;
        CONTEXT.beginPath();
        CONTEXT.lineWidth = 0.1;
        CONTEXT.moveTo(particleArray[a].x, particleArray[a].y);
        CONTEXT.lineTo(
          particleArray[b].x + (CANVAS.width * 20) / -mouse.x,
          particleArray[b].y + (CANVAS.height * 15) / mouse.y
        );
        CONTEXT.stroke();
      }
    }
  }
}
