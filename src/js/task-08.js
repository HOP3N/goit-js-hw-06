"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`All fields must be filled in, thank you.`);
  }
  const userInfo = { email: email.value, password: password.value };

  console.log(userInfo);
  event.currentTarget.reset();
}
