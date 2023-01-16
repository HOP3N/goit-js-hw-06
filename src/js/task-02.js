'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.getElementById('ingredients');
const theseIngredients = [...ingredients].forEach((ingredient) => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  list.append(items);
  parent.append(...items);
});

console.log(theseIngredients);
