"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");

const markUpEl = images
  .map(
    (image) => `<li><img src =${image.url} alt =${image.alt}  
width = "300" height = "150" /></li>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", markUpEl);

const picturesEl = document.querySelector(".picture");

galleryListEl.style.display = "flex";
galleryListEl.style.flexWrap = "wrap";
galleryListEl.style.listStyle = "none";
galleryListEl.style.gap = "20px";
galleryListEl.style.justifyContent = "left";
