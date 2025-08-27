document.addEventListener("DOMContentLoaded", () => {
    const curtain = document.getElementById("curtain");

    let currentTop = 0;            // стартовое положение
    const step = 10;               // на сколько % опускаем за шаг
    const interval = 1000;         // каждая секунда

    const timer = setInterval(() => {
        currentTop += step;
        if (currentTop >= 100) {
            currentTop = 100;
            clearInterval(timer);
        }
        curtain.style.top = currentTop + "%";
    }, interval);
});
