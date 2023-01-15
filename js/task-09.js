const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick(event) {
  let bcolor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${bcolor}`;
  spanEl.textContent = `${bcolor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
