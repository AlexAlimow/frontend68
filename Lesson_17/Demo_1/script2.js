const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");
// const textBlock2 = document.getElementsByClassName("text");
const textBlock = document.querySelector(".text");

btnBig.onclick = () => {
    textBlock.style.fontSize = "2em";
}
btnNormal.onclick = () => {
    textBlock.style.fontSize = "1em";
}