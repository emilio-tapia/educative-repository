const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');
// context.globalCompositeOperation = 'source-in';

let image1 = load_image('./dark.png');
let image2 = load_image('./planets.png');
let image3 = load_image('./lines.png');

function load_image(url) {
  let image = new Image();
  image.src = url;
  image.onload = draw_image;
  return image;
}

function draw_image() {
  context.drawImage(image1, 0, 0);
  context.drawImage(image2, 0, 0, 650, 600);
  context.drawImage(image3, 0, 0, 1300, 800);
}
