const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

context.fillStyle = '#999';
context.strokeStyle = '#555';
context.lineWidth = 2;
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.shadowColor = '#555';

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
  drawShape(e.x, e.y, 100, 0.2, 4);
});
