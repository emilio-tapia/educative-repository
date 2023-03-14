const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');
myCanvas.height = innerHeight;
myCanvas.width = innerWidth;
let isBouncing = true;

let velocity1 = 1;
let velocity2 = 1;
let gravity = 0.2;
let radius1 = innerWidth / 7;
let radius2 = innerWidth / 12;
let y1 = -100;
let y2 = 100;

function draw() {
  // RESET
  context.clearRect(0, 0, innerWidth, innerHeight);

  // FILTER
  context.globalCompositeOperation = 'exclusion';

  // BACKGROUND
  context.fillStyle = 'silver';
  context.fillRect(0, 0, innerWidth, innerHeight);

  // GRADIENT

  let grad1 = context.createLinearGradient(0, innerHeight, 0, 0);
  grad1.addColorStop(1, 'rgb(10,10,40)');
  grad1.addColorStop(0, 'silver');

  let grad2 = context.createLinearGradient(0, innerHeight, 0, 0);
  grad2.addColorStop(1, 'gold');
  grad2.addColorStop(0, 'silver');

  // CIRCLE
  context.fillStyle = grad1;
  context.beginPath();
  context.arc(innerWidth / 2, y1, radius1, 0, Math.PI * 2);
  context.fill();
  context.closePath();

  // CIRCLE
  context.fillStyle = grad2;
  context.beginPath();
  context.arc(innerWidth / 2, y2, radius2, 0, Math.PI * 2);
  context.fill();
  context.closePath();

  context.shadowOffsetX = 0;
  context.shadowOffsetY = y1 * 0.09;
  context.shadowColor = 'rgba(10,10,40,0.3)';
  context.shadowBlur = 35;

  if (y1 > innerHeight - radius1) {
    velocity1 = velocity1 * -1;
    setTimeout(() => {
      radius1 += 4;
    }, 200);
  } else {
    velocity1 += gravity;
  }

  if (y2 > innerHeight - radius2) {
    velocity2 = velocity2 * -1;
    setTimeout(() => {
      radius2 += 3;
    }, 200);
  } else {
    velocity2 += gravity;
  }

  y1 += velocity1;
  y2 += velocity2;

  gravity += 0.005;

  if (radius1 > innerWidth / 2) {
    radius1 = 20;
  }
  if (radius2 > innerWidth / 2) {
    radius2 = 20;
  }

  if (gravity > 2) {
    gravity -= 0.5;
  }

  if (!isBouncing) {
    cancelAnimationFrame(draw);
  } else {
    requestAnimationFrame(draw);
  }
}

myCanvas.addEventListener('click', () => {
  if (!isBouncing) {
    isBouncing = true;
    draw(); // called every time bouncing changes states
  } else {
    isBouncing = false;
  }
});

draw(); // function called once -- don't use IIFE cause animationFrame
