const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick(event) {
  let color = getRandomHexColor();
  bodyEl.style.background = `${color}`;
  spanEl.textContent = `${color}`;
  console.log(color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
