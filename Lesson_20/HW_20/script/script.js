const dogImage = document.getElementById('dogImage');
const nextDogBtn = document.getElementById('nextDog');
const startAutoBtn = document.getElementById('startAuto');
const stopAutoBtn = document.getElementById('stopAuto');
const fasterBtn = document.getElementById('faster');
const slowerBtn = document.getElementById('slower');
const speedDisplay = document.getElementById('speed');

let interval = null;
let delay = 3000; // 3 секунды по дефолту

// функция загрузки картинки 
async function loadDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImage.src = data.message;
    } catch (error) {
        console.error('Ошибка загрузки картинки:', error);
    }
};

// кнопка следующей картинки

nextDogBtn.addEventListener('click', loadDogImage);

// aвтоматическая загрузка картинки

startAutoBtn.addEventListener('click', () => {
    if (!interval) {
        loadDogImage();
        interval = setInterval(loadDogImage, delay);
    }
});

// остановка автоматической загрузки

stopAutoBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});


// кнопка ускорения
function restrartInterval() {
    if (interval) {
    clearInterval(interval);
    interval = setInterval(loadDogImage, delay);
}
updateSpeed();
}

function updateSpeed() {
  speedDisplay.textContent = `Скорость: ${(delay / 1000).toFixed(1)} сек`;
}


fasterBtn.addEventListener('click', () => {
    if (delay > 500) {
        delay -= 500;
        restrartInterval();
    }
});


// кнопка замедления

slowerBtn.addEventListener('click', () => {
    delay += 500;
    restrartInterval();
});


loadDogImage(); // загрузка картинки при старте страницы
updateSpeed(); // вывод скорости на экране
