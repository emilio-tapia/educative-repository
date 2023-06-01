// $(".paroller, [data-paroller-factor]").paroller({
//     factor: 0.3,            // multiplier for scrolling speed and offset
//     factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
//     factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
//     factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
//     factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
//     type: 'foreground',     // background, foreground
//     direction: 'horizontal', // vertical, horizontal
//     transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
// });

$(document).ready(function () {
  $('[data-paroller-factor]').paroller();
  $('#paroller-example').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.4,
    factorLg: -0.5,
    factorXl: -0.6,
    factor: -0.4,
    type: 'foreground',
    direction: 'horizontal',
    transition: 'transform .3s ease-out',
  });
  $('.text1').paroller({
    factorXs: 0.5,
    factorSm: 0.5,
    factorMd: 1,
    factorLg: 1,
    factorXl: 1,
    factor: 1,
    type: 'foreground',
    direction: 'horizontal',
    transition: 'transform .2s linear',
  });
  $('.img1').paroller({
    factor: 1.2,
  });
  $('.img2').paroller({
    factor: -1,
  });
});
