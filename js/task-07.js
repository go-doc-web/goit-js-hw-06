const inputRange = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
text.style.fontSize = inputRange.value + "px";
console.log(inputRange.value);

inputRange.addEventListener("input", onInputChangeSizeText);

function onInputChangeSizeText(e) {
  const { value } = e.currentTarget;
  console.log(value);
  text.style.fontSize = value + "px";
}
