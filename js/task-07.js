const inputRange = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inputRange.addEventListener("input", onInputChengeSizeText);

function onInputChengeSizeText(e) {
  const { value } = e.currentTarget;
  console.log(value);
  text.style.fontSize = value + "px";
}
