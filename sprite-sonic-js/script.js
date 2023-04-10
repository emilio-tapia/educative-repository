const sprite = document.querySelector('.sprite');

const frameWidth = sprite.offsetWidth;
const frameTotal = 11;
let frameCount = 0;
const time = 2;

setInterval(() => {
  let newX = frameWidth * frameCount * -1;

  sprite.style.backgroundPosition = `${newX}px 0px`;

  if (frameCount < frameTotal - 1) return frameCount++;

  return (frameCount = 0);
}, (time * 1000) / frameTotal);
