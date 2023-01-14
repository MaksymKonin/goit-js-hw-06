const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

output.textContent = "Anonymous";
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
