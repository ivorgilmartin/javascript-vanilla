import { data } from "./data.js";
const list = document.querySelector("#list");
const search = document.querySelector("#app-search");

const cleanupWord = (word) => {
  return word.toLowerCase().trim();
};

const filterData = (word) => {
  return data.filter((item) => {
    return item.spacecraft.toLowerCase().includes(word);
  });
};

const render = (word = "") => {
  list.innerHTML = "";

  word = cleanupWord(word);

  const filtered = filterData(word);
  filtered.forEach((item) => {
    list.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`);
  });
};

render();

search.addEventListener("input", () => {
  render(search.value);
});
