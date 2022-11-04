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

// const createElementsLi = (array) => {
//   const itemsElement = array.reduce((acc, item) => {
//     const liEl = document.createElement("li");
//     liEl.textContent = item;
//     liEl.classList.add("item");
//     acc.push(liEl);
//     return acc;
//   }, []);
//   return itemsElement;
// };

const createElementsLi = (array) => {
  const itemsElement = array.map((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    liEl.classList.add("item");
    return liEl;
  });
  return itemsElement;
};

//Функция renderItemList рендерит колекцию елементов

const renderItemList = (list, items) => {
  list.append(...items);
};

const liElements = createElementsLi(ingredients);
renderItemList(listIngridients, liElements);
