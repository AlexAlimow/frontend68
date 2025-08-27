const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");
// const textBlock2 = document.getElementsByClassName("text"); // Один элемент
const textBlock = document.querySelectorAll(".text"); // Массив из элементов


/*
btnBig.onclick = () => {
    textBlock.style.fontSize = "2em";
}

btnNormal.onclick = () => {
    textBlock.style.fontSize = "1em";
}
    */

// btnBig.onclick = () => {
//     textBlock.forEach(b => b.style.setProperty("font-size", "2em"));
// }

// btnNormal.onclick = () => {
//     textBlock.forEach(b => b.style.setProperty("font-size", "1em"));
// }

// console.log(textBlock[0].className); свойство class элемента

console.log(textBlock[0].classList); // список классов элемента

/*
btnBig.onclick = () => {
    textBlock.forEach(b => b.classList.add("big")); // добавляем класс big ко всем элементам с классом text
}

btnNormal.onclick = () => {
    textBlock.forEach(b => b.classList.remove("big")); // удаляем класс big ко всем элементам с классом text
}

*/

btnBig.addEventListener("click", () => {
    textBlock.forEach(b => b.classList.add("big"))

}
); // навешиваем обработчик события click на кнопку btnBig



btnNormal.addEventListener("click", () => {
    textBlock.forEach(b => b.classList.remove("big"))

}
); // навешиваем обработчик события click на кнопку btnNormal


btnBig.addEventListener("click", () => {
    console.log("Нажали на кнопку");
}
); // навешиваем обработчик события click на кнопку btnBig

const textBlock2 = document.getElementById("text");

textBlock2.addEventListener("dblclick", () => {
    console.log("Двойной клик по тексту");});