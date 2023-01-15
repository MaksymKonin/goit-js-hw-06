const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const divEl = document.querySelector("#boxes");

createBtn.addEventListener("click", onTargetCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function onTargetCreateBtnClick(event) {
  const amount = Number(inputEl.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Не вірно вказана кількість. Задайте число в діапазоні від 1 до 100");
  }
}

function createBoxes(amount) {
  let widthZeroDiv = 30;
  let heightZeroDiv = 30;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();
    const itemEl = document.createElement("div");
    let width = widthZeroDiv + i * 10;
    itemEl.style.width = `${width}px`;
    let height = heightZeroDiv + i * 10;
    itemEl.style.height = `${height}px`;
    itemEl.style.backgroundColor = `${color}`;
    elements.push(itemEl);
  }
  divEl.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  divEl.innerHTML = "";
}
