const fontSizeInput = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeInput.addEventListener("input", onSliderChangeInput);

function onSliderChangeInput(event) {
  spanEl.style.fontSize = `${event.currentTarget.value + "px"}`;
}
