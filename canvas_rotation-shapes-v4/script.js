const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

context.fillStyle = '#999';
context.strokeStyle = '#555';
context.lineWidth = 2;
context.shadowOffsetX = 2;
context.shadowOffsetY = 2;
context.shadowBlur = 20;
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
  }

  context.restore(); // pop in p5js?
  context.closePath();
  context.stroke();
  context.fill();
}

window.addEventListener('mousemove', (e) => {
  drawShape(e.x, e.y, Math.random() * 60, 0.98, 40);
});
