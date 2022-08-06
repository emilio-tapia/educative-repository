const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

let height = (canvas.height = window.innerHeight);
let width = (canvas.width = window.innerWidth);

function drawShape(radius) {
  context.beginPath;
  context.save(); // push in p5js
  context.translate(width / 2, height / 2);
  //   context.moveTo(0, 0);
  const rotateHexagon = () => {
    context.lineTo(0, 0 - radius);
    context.rotate(Math.PI / 3);
  };
  rotateHexagon();
  rotateHexagon();
  rotateHexagon();
  rotateHexagon();
  rotateHexagon();
  rotateHexagon();
  rotateHexagon();
  context.restore(); // pop in p5js?
  context.closePath;
  context.stroke();
}

drawShape(100);
