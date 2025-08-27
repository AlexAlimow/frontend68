const box = document.querySelector('.box');
const container = document.querySelector('.container');

let step = 20;
function move(direction) {
    const boxStyles = getComputedStyle(box);
    let left = parseInt(boxStyles.left);
    let top = parseInt(boxStyles.top);

    switch (direction) {
        case 'up':
            if (top - step >= 0) {
                box.style.top = (top - step) + 'px';
            }
            break;
        case 'down':
            if (top + step <= container.clientHeight - box.clientHeight) {
                box.style.top = (top + step) + 'px';
            }
            break;
        case 'left':
            if (left - step >= 0) {
                box.style.left = (left - step) + 'px';
            }
            break;
        case 'right':
            if (left + step <= container.clientWidth - box.clientWidth) {
                box.style.left = (left + step) + 'px';
            }
            break;
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
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
    }
});