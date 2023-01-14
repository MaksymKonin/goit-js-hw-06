const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const spanEl = document.querySelector("#value");
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

let counterValue = 0;

const decrementClick = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);

const incrementClick = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementClick);
