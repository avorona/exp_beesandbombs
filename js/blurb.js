const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {
    time++;
    context.clearRect(0, 0, 800, 800);
    // switch direction
    let clock = -1;
    let colorSwitch = 0;

    for (let i = 0; i < 10; i++) {

        context.beginPath();

        for (let j = 0; j < 690; j++) {

            let x = 300 + (i * (-10) + 150 + 2 * Math.sin(i * 2.8 + j / 6.1)) * Math.sin(j * 2 * Math.PI / 690 + clock * time / 500);
            let y = 300 + (i * (-10) + 150 + 2 * Math.sin(i * 2.8 + j / 6.1)) * Math.cos(j * 2 * Math.PI / 690 + clock * time / 500);

            context.lineTo(x, y);

        }

        context.closePath();

        if (colorSwitch === 0) {

            context.fillStyle = "#FaaFFa";
            context.fill();
            colorSwitch = 1;

        } else if (colorSwitch === 1) {

            context.fillStyle = "#aFFFFF";
            context.fill();
            colorSwitch = 0;
        }

    }
    window.requestAnimationFrame(draw);

}


draw();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}