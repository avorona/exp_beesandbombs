const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {

  time += 1;
  context.clearRect(0, 0, 800, 800);
  let clock = -1;
  let colorSwitch = 0;

  for (let i = 0; i <= 16; i++) {
    context.beginPath();

    for (let j = 0; j < 880; j++) {

      let x = 300 + (-9 * i + 200 + 2 * Math.sin(i * 2 + j / 6.1)) * Math.sin(j * 2 * Math.PI / 880 + clock * time / 900);
      let y = 300 + (-9 * i + 200 + 2 * Math.sin(i * 2 + j / 6.1)) * Math.cos(j * 2 * Math.PI / 880 + clock * time / 900);
      context.lineTo(x, y);

    }
    context.closePath();

    let colorFill = "";

    colorFill = (i % 2) ? ("#aaaFFF") : ("#ffFF00");
    context.fillStyle = colorFill
    context.fill();
  }
  window.requestAnimationFrame(draw);
}

draw();