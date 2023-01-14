const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.dataset.length;
let counterValue = 0;

inputEl.addEventListener("blur", onTargetInputBlur);

function onTargetInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputLength)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
}
