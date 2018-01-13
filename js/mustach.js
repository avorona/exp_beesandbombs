const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {
  time += 1;
  context.clearRect(0, 0, 600, 800);
  // switch direction
  const clock = -1;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 1690; j += 1) {
      const x = 300 + (i * 20 + 100 + 2 * Math.sin(i * 3.9 + j / 21.9)) * Math.sin(j * 2 * Math.PI / 1690 + clock * time / 500);
      const y = 300 + (i * 20 + 100 + 2 * Math.sin(i * 3.9 + j / 21.9)) * Math.cos(j * 2 * Math.PI / 1690 + clock * time / 500);

      let strokeWidth = 2;
      let strokeHeight = 2;

      for (let k = 0; k < 100; k += 1) {
        strokeHeight = 5 * (Math.cos(j / 20 + 2 * Math.PI));
        strokeWidth = 5 * (Math.cos(j / 20 + 2 * Math.PI));
      }
      context.fillStyle = 'rgba(100,255,0,0.25)';
      context.fillRect(x, y, strokeWidth, strokeHeight);
    }
  }

  window.requestAnimationFrame(draw);
  // console.log(time);
}


draw();
