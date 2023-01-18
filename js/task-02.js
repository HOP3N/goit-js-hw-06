"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// let list = document.querySelectorAll("ingredients");
// const theseIngredients = ingredients.forEach((ingredient) => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   list.append(items);
//   parent.append(...items);
  

// });

// console.log(theseIngredients);
const ulEl = document.querySelector('#ingredients');
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');


ulEl.innerHTML = list;