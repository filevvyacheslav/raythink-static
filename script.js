"use strict";

const temperature = document.getElementById("temperature");

window.setInterval(() => {
  temperature.textContent = String(Math.floor(Math.random() * 61) + 570);
}, 500);
