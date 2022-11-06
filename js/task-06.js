// Решил попробовать а что если не учитывать пробеллы, и так увлекся что назад переделывать не было сил

const refs = {
  input: document.querySelector("#validation-input"),
};

const defaultSymbolInInput = Number(refs.input.dataset.length);

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  const currentSymbolInInput = checkForSpace(e).length;

  if (currentSymbolInInput <= defaultSymbolInInput) {
    refs.input.classList.add("valid");
    delClass(refs.input, "invalid");
  } else if (currentSymbolInInput > defaultSymbolInInput) {
    refs.input.classList.add("invalid");
    delClass(refs.input, "valid");
  }

  removeClasses(currentSymbolInInput);
}

// Функция ищет пробелы если есть и удаляет их из Input

function checkForSpace(e) {
  const currentStr = e.currentTarget.value
    .split("")
    .filter((item) => item !== " ")
    .join("");

  e.currentTarget.value = currentStr; // выводит значение без проблелов
  return currentStr;
}

function delClass(variable, currentClass) {
  variable.classList.remove(currentClass);
}

function removeClasses(currentSymbol) {
  if (currentSymbol === 0) {
    delClass(refs.input, "valid");

    delClass(refs.input, "invalid");
  }
}
