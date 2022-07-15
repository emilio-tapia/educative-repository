const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault;
  btn.classList.toggle('active');

  if (btn.classList.contains('active')) {
    document.body.style.backgroundColor = `#333`;
  } else {
    document.body.style.backgroundColor = `#222`;
  }
});
