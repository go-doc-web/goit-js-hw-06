const refs = {
  input: document.querySelector("#validation-input"),
  // amountSymbolInInput: document.querySelector('input[data-length="6"]'),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  const defaultSymbolInInput = refs.input.dataset.length;
  const currentSymbolInInput = e.currentTarget.value.length;

  console.log(currentSymbolInInput);

  if (currentSymbolInInput <= defaultSymbolInInput) {
    refs.input.classList.add("valid");
  } else if (currentSymbolInInput > defaultSymbolInInput) {
    refs.input.classList.replace("valid", "invalid");
  }

  if (e.currentTarget.value === "") {
    refs.input.classList.remove("valid");
    refs.input.classList.remove("invalid");
  }
}
