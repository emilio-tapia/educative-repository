const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

let height = (canvas.height = window.innerHeight);
let width = (canvas.width = window.innerWidth);

context.beginPath(); // begin Vector Path
context.moveTo(width / 2, height / 2); // first coordinates - does NOT translate origin point
context.lineTo(50, 50); // second coordinates
context.closePath(); // end vector path
context.stroke(); // add stroke property
