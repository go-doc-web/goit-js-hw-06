const refs = {
  input: document.querySelector("#controls > input"),
  createBtn: document.querySelector("button[ data-create]"),
  destroyBtn: document.querySelector("button[ data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let counter = "";

refs.input.addEventListener("input", (e) => {
  counter = Number(e.currentTarget.value);
});

refs.createBtn.addEventListener("click", onCreateBtnClick);

refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(counter);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
  counter = "";
}

function createBoxes(amount) {
  const arrBoxes = [];
  for (
    let i = 0, width = 30, heigth = 30;
    i < amount;
    i += 1, width += 10, heigth += 10
  ) {
    const box = document.createElement("div");
    box.style.marginTop = "20px";
    box.style.width = width + "px";
    box.style.height = heigth + "px";
    box.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(box);
  }
  refs.boxes.innerHTML = "";
  refs.boxes.append(...arrBoxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
