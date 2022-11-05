const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputHandler);

function onInputHandler(e) {
  if (e.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = e.currentTarget.value;
  }
}
