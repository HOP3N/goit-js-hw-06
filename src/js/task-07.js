"use strict";

const fontSizeControlEl = document.getElementById("font-size-control");

let textEl = document.getElementById("text");

fontSizeControlEl.oninput = function () {
  textEl.style.fontSize - fontSizeControlEl.value + "px";
};
