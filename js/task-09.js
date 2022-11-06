//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
const refs = {
  body: document.querySelector("body"),
  colorText: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

console.log(refs.colorText.textContent);

refs.changeColorBtn.addEventListener("click", onChangeColorBodyClick);

function onChangeColorBodyClick(e) {
  const randomColor = getRandomHexColor();
  // console.log(randomColor);
  refs.body.style.backgroundColor = randomColor;
  refs.colorText.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
