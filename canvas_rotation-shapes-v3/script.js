const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
let height = (canvas.height = window.innerHeight);
let width = (canvas.width = window.innerWidth);

context.fillStyle = 'purple';
context.lineWidth = 5;

function drawShape(radius, iterations, inset) {
  context.beginPath;
  context.save(); // push in p5js
  context.translate(width / 2, height / 2);
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

drawShape(100, 8, 0.8);
