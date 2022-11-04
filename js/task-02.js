const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Получаем ссылку на element  <ul id="ingredients"></ul>

const listIngridients = document.querySelector("#ingredients");

// createElementsItem перебирает массив данных и создает колекцию елементов  LI

const createElementsItem = (array) => {
  const itemsElement = array.reduce((acc, item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    liEl.classList.add("item");
    acc.push(liEl);
    return acc;
  }, []);
  return itemsElement;
};

console.log(createElementsItem(ingredients));

//Функция renderItemList рендерит колекцию елементов

const renderItemList = (list, items) => {
  list.append(...items);
};

const liElements = createElementsItem(ingredients);
renderItemList(listIngridients, liElements);
