function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const nameBgc = document.querySelector(".color");
const background = document.querySelector("body");
function onChangeColor() {
  const bgColor = getRandomHexColor();
  background.setAttribute("style", `background-color: ${bgColor}`);
  nameBgc.textContent = bgColor;
}
changeColorBtn.addEventListener("click", onChangeColor);
