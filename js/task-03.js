import images from "./data/data-task-03.js";

const refs = {
  gallaryEl: document.querySelector(".gallery"),
  container: document.createElement("div"),
  ancorToMenu: document.querySelector("p"),
  titleGallary: document.createElement("h2"),
};

const createImgTemplate = (url, alt) => {
  return `      
      <li class="list-item">
        <img src="${url}" alt="${alt}" />
      </li>`;
};

const renderGallary = (list, itemEl) => {
  list.insertAdjacentHTML("beforeend", itemEl);
};

const imgEl = images
  .map(({ url, alt }) => createImgTemplate(url, alt))
  .join("");

renderGallary(refs.gallaryEl, imgEl);

//----------------------Немного добавил магии -----------------------

refs.gallaryEl.classList.add("list");

refs.container.classList.add("container");
refs.container.append(refs.gallaryEl);
refs.ancorToMenu.after(refs.container);

refs.titleGallary.textContent = "animals";
refs.titleGallary.style.textTransform = "uppercase";

refs.container.prepend(refs.titleGallary);
refs.titleGallary.style.textTransform = "uppercase";
