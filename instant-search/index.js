import { data } from "./data.js";
const list = document.querySelector("#list");
const search = document.querySelector("#app-search");
// this function is called when the user writes a character and its goal is to remove leading & trailing spaces as well as lower case the string so we can implement a case insensitive search
const cleanupWord = (word) => {
  return word.toLowerCase().trim();
};
// this is the function that will perform the actual search
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
// render on page load
render();
// render as the user types
search.addEventListener("input", () => {
  render(search.value);
});
