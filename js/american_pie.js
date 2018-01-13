import {
    getRandomInt
} from './helpers'

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

            let x = 300 + (i * (-1) + 150 + 2 * Math.sin(i * 2.8 + j / 6.1)) * Math.sin(j * 2 * Math.PI / 690 + clock * time / 500);
            let y = 300 + (i * (-1) + 150 + 2 * Math.sin(i * 2.8 + j / 6.1)) * Math.cos(j * 2 * Math.PI / 690 + clock * time / 500);

            context.lineTo(x, y);
        }

        context.closePath();

        if (colorSwitch === 0) {

            context.fillStyle = "#daaFFF";
            context.fill();
            colorSwitch = 1;

        } else if (colorSwitch === 1) {

            context.fillStyle = "#ffFFdF";
            context.fill();
            colorSwitch = 0;
        }

    }

    window.requestAnimationFrame(draw);


}

draw();