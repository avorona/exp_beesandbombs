import {
    getRandomInt,
} from './helpers';

const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
let time = 0;

function draw() {

    time++;
    context.clearRect(0, 0, 600, 800);
    // switch direction

    let settings = {
        clock: 1,
        initialRadius: 190,
        center: 300,

    }

    for (let i = 0; i < 16; i++) {

        context.beginPath();

        for (let j = 0; j < 690; j++) {

            let x = settings.center + (i * (-13) + settings.initialRadius + (i * 5 + i / 16) + 2 * Math.sin(i * 15.1 + j / 8.4)) * Math.sin(j * 2 * Math.PI / 690 + settings.clock * (time / 600));
            let y = settings.center + (i * (-13) + settings.initialRadius + (i * 5 + i / 16) + 2 * Math.sin(i * 15.1 + j / 8.4)) * Math.cos(j * 2 * Math.PI / 690 + settings.clock * (time / 600));

            context.lineTo(x, y);

        }

        context.closePath();

        let colorPath;

        (i % 2) ? colorPath = "#FFFFFF": colorPath = "#000000"

        context.fillStyle = colorPath;

        context.fill();

    }

    window.requestAnimationFrame(draw);

}

draw();



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}