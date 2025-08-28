const player = document.getElementById('player');

const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let centerX = 180;
let centerY = 130;
let x = centerX;
let y = centerY;

const step = 20;

function move(direction) {
    switch (direction) {
        case 'up':
            y = Math.max(0, y - step);
            break;
        case 'down':
            y = Math.min(260, y + step);
            break;
        case 'left':
            x = Math.max(0, x - step);
            break;
        case 'right':
            x = Math.min(360, x + step);
            break;
        case 'center':   // сброс на центр
            x = centerX;
            y = centerY;
            break;
    }
    player.style.setProperty(`top`, y + "px");
    player.style.setProperty(`left`, x + "px");
}

btnUp.addEventListener(`click`, () => move('up'));
btnDown.addEventListener(`click`, () => move('down'));
btnLeft.addEventListener(`click`, () => move('left'));
btnRight.addEventListener(`click`, () => move('right'));

document.addEventListener(`keydown`, (e) => {
    switch (e.key) {
        case `ArrowUp`:
            move('up');
            break;
        case 'ArrowDown':
            move('down');
            break;
        case 'ArrowLeft':
            move('left');
            break;
        case 'ArrowRight':
            move('right');
            break;
        case ' ':  // пробел

            move('center');
            break;
    }
});
