const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {
  time += 1;
  context.clearRect(0, 0, 600, 800);
  const settings = {

    clock: 1,
    initialRadius: 190,
    center: 300,
    dots: 690,
    shaper: () => 0.00376 * this.dots,

  };

  for (let i = 0; i < 16; i += 1) {
    context.beginPath();

    for (let j = 0; j < 201; j += 1) {
      const x = settings.center + (i * (-10) + settings.initialRadius + 2 * Math.sin((j + 5) / 2.98)) * Math.sin(j * 2 * Math.PI / 200 + settings.clock * (time / 600));
      const y = settings.center + (i * (-10) + settings.initialRadius + 2 * Math.sin((j + 5) / 2.98)) * Math.cos(j * 2 * Math.PI / 200 + settings.clock * (time / 600));

      context.lineTo(x, y);
    }

    context.closePath();

    const colorPath = (i % 2) ? '#FFFFFF' : '#000000';

    context.fillStyle = colorPath;

    context.fill();
  }
  window.requestAnimationFrame(draw);
}

draw();
