const audioBeep = document.getElementById('beep');
const allkeys = document.querySelectorAll('span');

for (let i = 0; i < allkeys.length; i++) {
  allkeys[i].addEventListener('mousedown', () => {
    audioBeep.pause();
    audioBeep.currentTime = 0;
    audioBeep.play();
  });
}
