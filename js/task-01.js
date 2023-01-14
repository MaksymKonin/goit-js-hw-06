const categoriesEl = document.querySelector("#categories");
const listOfCategories = categoriesEl.querySelectorAll(".item");
console.log("Number of categories: ", listOfCategories.length);

listOfCategories.forEach(function (category) {
  console.log(" ");
  const title = category.querySelector("h2");
  console.log("Category: ", title.textContent);
  const itemEl = category.querySelectorAll("li");
  console.log("Elements: ", itemEl.length);
});
