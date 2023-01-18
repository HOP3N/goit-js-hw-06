function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnEl = document.querySelector("button.change-color");
const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector("span.color");

changeBtnEl.addEventListener("click", (e) => {
  let colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  spanColorEl.textContent = colorEl;
});
