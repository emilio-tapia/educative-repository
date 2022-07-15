const hourDOM = document.getElementById('hr');
const minuteDOM = document.getElementById('mn');
const secondDOM = document.getElementById('sc');
const deg = 6;

setInterval(() => {
  let date = new Date();
  let hour = date.getHours() * 30;
  let minute = date.getMinutes() * deg;
  let second = date.getSeconds() * deg;

  hourDOM.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteDOM.style.transform = `rotateZ(${minute}deg)`;
  secondDOM.style.transform = `rotateZ(${second}deg)`;
});
