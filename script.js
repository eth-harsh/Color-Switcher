"use strict";
let count = 0;
document.querySelector(".btn-crimson").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#dc143c";
  document.querySelector(".color-name").textContent = "Crimson";
  count++;
  document.querySelector('.count').textContent = count;
});
document.querySelector(".btn-ocean  ").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#0077b6";
  document.querySelector(".color-name").textContent = "Ocean";
  count++;
  document.querySelector('.count').textContent = count;
});
document.querySelector(".btn-forest").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#2d6a4f";
  document.querySelector(".color-name").textContent = "Forest";
  count++;
  document.querySelector('.count').textContent = count;
});
document.querySelector(".btn-amber").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#f4a261";
  document.querySelector(".color-name").textContent = "Amber";
  count++;
  document.querySelector('.count').textContent = count;
});
document.querySelector(".btn-violet").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#7b2d8b";
  document.querySelector(".color-name").textContent = "Violet";
  count++;
  document.querySelector('.count').textContent = count;
});

//by input

document.querySelector(".btn-apply").addEventListener("click", function () {
  const guess = document.querySelector(".hex-input").value;
  if (guess.startsWith("#") && guess.length === 7) {
    document.querySelector(".message").textContent = "";
    document.querySelector(".color-box").style.backgroundColor = guess;
    document.querySelector(".color-name").textContent = guess;
  } else {
    document.querySelector(".message").textContent = "Invalid hex code ⛔";
  }
});

//reset logic
document.querySelector(".btn-reset").addEventListener("click", function () {
  document.querySelector(".color-box").style.backgroundColor = "#000";
  document.querySelector(".color-name").textContent = "No Color Selected";
  document.querySelector(".message").textContent = "";
  document.querySelector(".hex-input").value = "";
});
