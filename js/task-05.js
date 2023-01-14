const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", onTargetTextInput);

function onTargetTextInput(event) {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
