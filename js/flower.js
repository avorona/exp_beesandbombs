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
  const clock = -1;
  let colorSwitch = 0;

  for (let i = 0; i < 10; i += 1) {
    context.beginPath();
    for (let j = 0; j < 890; j += 1) {
      const x = 300 + (i * (-10) + 150 + 2 * Math.sin((i * 2.8) + j / 6.1)) * Math.sin(j * 2 * Math.PI / 890 + clock * time / 500);
      const y = 300 + (i * (-10) + 150 + 2 * Math.sin((i * 2.8) + j / 6.1)) * Math.cos(j * 2 * Math.PI / 890 + clock * time / 500);

      context.lineTo(x, y);
    }

    context.closePath();
    if (colorSwitch === 0) {
      context.fillStyle = '#daaFFF';
      console.log(context.fillStyle);
      context.fill();
      colorSwitch = 1;
    } else if (colorSwitch === 1) {
      context.fillStyle = '#ffFFdF';
      console.log(context.fillStyle);
      context.fill();
      colorSwitch = 0;
    }
  }

  window.requestAnimationFrame(draw);
}

draw();
