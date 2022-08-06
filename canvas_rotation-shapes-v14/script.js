const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// context.fillStyle = 'black';
context.shadowOffsetX = 2;
context.shadowOffsetY = 2;
context.shadowBlur = 10;
context.shadowColor = '#0009';
// context.globalCompositeOperation = 'difference';
let hueColor = Math.random() * 150;
let mouseDraw = false;
let angle = 0;
let radius = 30;
let inset = 0.9;

function drawShape(x, y, radius, inset, iterations) {
  // context.translate(canvas.height / 4, canvas.width / 2);
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
    context.lineWidth = 1;

    context.rotate(angle);
    context.strokeStyle = '#0005';
    context.fillStyle = `#fff7`;
    drawShape(0, 0, radius, inset, 6);
    console.log(angle);

    context.rotate(angle);
    context.strokeStyle = '#fff3';
    context.fillStyle = `#0009`;
    drawShape(radius, radius, radius / 6, inset, 6);
    console.log(angle);

    context.rotate(angle);
    context.strokeStyle = '#0006';
    context.fillStyle = `#f007`;
    drawShape(radius, radius, radius / 5, inset + 0.1, 6);
    console.log(angle);

    hueColor += 0.01;
    angle += 0.03;
    context.restore();
  }
});

window.addEventListener('mouseup', (e) => {
  mouseDraw = false;
});
window.addEventListener('mousedown', (e) => {
  mouseDraw = true;
});
