'use strict';

const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);

const categoriesArr = [...allCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArr);

//  Animals
//  4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
