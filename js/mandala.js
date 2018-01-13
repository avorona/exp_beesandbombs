const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {
  time += 1;
  context.clearRect(0, 0, 600, 800);
  // switch direction
  let clock = -1;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 500; j += 1) {
      const x = 300 + (i * 20 + 50 + 30 * Math.sin(j / 15.8974)) * Math.sin(j * 2 * Math.PI / 500 + clock * time / 1000);
      const y = 300 + (i * 20 + 50 + 30 * Math.sin(j / 15.8974)) * Math.cos(j * 2 * Math.PI / 500 + clock * time / 1000);


      // context.fillStyle=colors[colorSwitch];
      context.beginPath();
      context.moveTo(300, 300);
      context.lineTo(x, y);
      context.strokeStyle = 'rgba(155,55,80,0.25)';
      context.stroke();
    }

    if (clock === -1) {
      clock = 1;
    } else if (clock === 1) {
      clock = -1;
    }
  }


  window.requestAnimationFrame(draw);
  // console.log(time);
}


draw();
