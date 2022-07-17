const textAnimationSlider = document.getElementById('textAnimationSlider');
const nav = document.getElementById('nav');
const textAnimationSpan = document.getElementById('textAnimation');
const blurAnimationSlider = document.getElementById('blurAnimationSlider');
const blurAnimationSpan = document.getElementById('blurAnimation');
const title = document.querySelectorAll('.box h2');

title[0].style.animation = `
 animateText 1.2s ease-in-out infinite,
 animateBlur 0.1s linear infinite`;
title[1].style.animation = `
 animateText 1.2s ease-in-out infinite,
 animateBlur 0.1s linear infinite`;

let valueText, valueBlur;

textAnimationSlider.addEventListener('mousedown', (e) => {
  textAnimationSlider.addEventListener('mousemove', (e) => {
    valueText = +e.target.value;
    textAnimationSpan.textContent = valueText.toFixed(1);
  });
});

blurAnimationSlider.addEventListener('mousedown', (e) => {
  blurAnimationSlider.addEventListener('mousemove', (e) => {
    valueBlur = +e.target.value;
    blurAnimationSpan.textContent = valueBlur.toFixed(1);
  });
});

nav.addEventListener('mousemove', (e) => {
  valueText = valueText == undefined ? 1.2 : valueText;
  valueBlur = valueBlur == undefined ? 0.1 : valueBlur;

  title[0].style.animation = `
    animateText ${valueText}s ease-in-out infinite,
    animateBlur ${valueBlur}s linear infinite`;
  title[1].style.animation = `
    animateText ${valueText}s ease-in-out infinite,
    animateBlur ${valueBlur}s linear infinite`;
});
