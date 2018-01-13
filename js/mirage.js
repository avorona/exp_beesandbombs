import {
  getRandomInt,
} from './helpers';

const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {
  time += 1;
  context.clearRect(0, 0, 800, 800);
  // switch direction
  let clock = -1;

  for (let i = 0; i <= 16; i += 1) {
    context.beginPath();

    // context.moveTo(800,800);


    for (let j = 0; j < 880; j += 1) {
      const x = 300 + (-9 * i + 200 + 2 * Math.sin(i * 2 + j / 6.1)) * Math.sin(j * 2 * Math.PI / 880 + clock * time / 900 + i * 2000);
      const y = 300 + (-9 * i + 200 + 2 * Math.sin(i * 2 + j / 6.1)) * Math.cos(j * 2 * Math.PI / 880 + clock * time / 900 + i * 2000);

      context.lineTo(x, y);
    }


    context.closePath();

    let colorFill = '';

    colorFill = (i % 2) ? ('#aaaFFF') : ('#ffFF00');
    context.fillStyle = colorFill;
    context.fill();


    if (clock === -1) {
      clock = 1;
    } else if (clock === 1) {
      clock = -1;
    }
  }

  window.requestAnimationFrame(draw);
}

draw();
