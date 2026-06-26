"use strict";

//variables
let counter = 0;
document.querySelectorAll(".btn").forEach((v) => {
  v.addEventListener("click", function () {
    const color = this.dataset.color;
    const name = this.dataset.name;
    document.querySelector(".color-name").textContent = name;
    document.querySelector(".color-box").style.backgroundColor = color;
    counter++;
    document.querySelector(".count").textContent = counter;
  });
});

//hex code
document.querySelector(".btn-apply").addEventListener("click", function () {
  const input = document.querySelector(".hex-input").value;
  if (input.startsWith("#") && input.length === 7) {
    document.querySelector(".message").textContent = "";
    document.querySelector(".color-box").style.backgroundColor = input;
    counter++;
    document.querySelector(".count").textContent = counter;
  } else {
    document.querySelector(".message").textContent = "Invalid Hex⛔";
  }
});
//reset button
document.querySelector(".btn-reset").addEventListener("click", function () {
  counter = 0;
  document.querySelector(".count").textContent = counter;
  document.querySelector(".message").textContent = "";
  document.querySelector(".color-box").style.backgroundColor = "#222";
  document.querySelector(".hex-input").value = "";
});
