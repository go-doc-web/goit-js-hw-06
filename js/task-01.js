//count the number of categories

const categoriesEl = document.getElementById("categories");
const itemEl = document.querySelectorAll(".item");

const getAmountCategories = () => {
  const numbersOfCategories = categoriesEl.querySelectorAll(".item").length;
  console.log(`Number of categories: ${numbersOfCategories}`);
};

const getTitleItemAndAmountOfCategories = () => {
  //   itemEl.forEach((item) => {
  //     const titleItem = item.querySelector("h2");
  //     const amountEl = item.querySelectorAll(".item ul li").length;
  //     console.log(`Category: ${titleItem.textContent}`);
  //     console.log(`Elements: ${amountEl}`);
  //   });
  const result = [...itemEl].map((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll(".item ul li").length}`);
  });
};

getAmountCategories();
getTitleItemAndAmountOfCategories();
