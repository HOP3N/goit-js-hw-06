"use strict";

// let valueEl = Number(document.querySelector("#value").textContent);
// let valueEl = 0;

let counterValue = 0;

const displayValueEl = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue--;
  displayValueEl.textContent = counterValue;
});

// decrementBtn.addEventListener("click", (event) => {
//   valueEl -= 1;

//   counterValue.innerText = valueEl;
// });

incrementBtn.addEventListener("click", () => {
  counterValue++;
  displayValueEl.textContent = counterValue;
});
