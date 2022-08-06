const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// context.fillStyle = 'black';
context.strokeStyle = 'black';
context.lineWidth = 0;
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.shadowColor = 'black';
// context.globalCompositeOperation = 'difference';
let hueColor = Math.random() * 150;
let mouseDraw = false;
let angle = 0;

function drawShape(x, y, radius, inset, iterations) {
  // context.translate(canvas.height / 4, canvas.width / 2);
  context.fillStyle = `hsl(${hueColor}, 100%, 50%)`;
  context.beginPath();
  context.save(); // push in p5js
  context.translate(x, y);
  context.moveTo(0, 0 - radius);

  const rotateHexagon = () => {
    context.rotate(Math.PI / iterations);
    context.lineTo(0, 0 - radius * inset);
    context.rotate(Math.PI / iterations);
    context.lineTo(0, 0 - radius);
  };

  for (let i = 0; i < iterations; i++) {
    rotateHexagon(radius, iterations, inset);
    indexIteration = i;
  }

  context.restore(); // pop in p5js?
  context.closePath();
  context.stroke();
  context.fill();
}

window.addEventListener('mousemove', (e) => {
  if (mouseDraw) {
    context.save();
    context.translate(e.x, e.y);
    context.rotate(angle);
    hueColor += 0.4;
    angle += 0.1;
    drawShape(0, 0, 100, 0.5, 50);
    context.restore();
  }
});

window.addEventListener('mouseup', (e) => {
  mouseDraw = false;
});
window.addEventListener('mousedown', (e) => {
  mouseDraw = true;
});
