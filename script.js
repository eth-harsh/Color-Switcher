"use strict";

//variables
let counter = 0;
document.querySelectorAll(".btn").forEach((b) => {
  b.addEventListener("click", function () {
    const name = this.dataset.name;
    const color = this.dataset.color;
    document.querySelector(".message").textContent = "";
    document.querySelector(".hex-input").value = "";
    document.querySelector(".color-name").textContent = name;
    document.querySelector(".color-box").style.backgroundColor = color;
    counter++;
    document.querySelector(".count").textContent = counter;
  });
});

//input hex
document.querySelector(".btn-apply").addEventListener("click", function () {
  document.querySelector(".message").textContent = "";
  let input = document.querySelector(".hex-input").value;
  if (input.startsWith("#") && input.length === 7) {
    document.querySelector(".color-box").style.backgroundColor = input;
    document.querySelector(".color-name").textContent = input;
    counter++;
    document.querySelector(".count").textContent = counter;
  } else {
    document.querySelector(".message").textContent = "Invalid hex code⛔";
  }
});

//reset
document.querySelector(".btn-reset").addEventListener("click", function () {
  counter = 0;
  document.querySelector(".message").textContent = "";
  document.querySelector(".hex-input").value = "";
  document.querySelector(".color-box").style.backgroundColor = "#222";
  document.querySelector(".color-name").textContent = '';
});
