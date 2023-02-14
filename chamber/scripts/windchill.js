const temperature = document.querySelector("#temperature");
let windSpeed = document.querySelector("#windSpeed");
let windChill = document.querySelector("#windChill");
const t = Number(temperature.textContent);
const s = Number(windSpeed.textContent);

const factor = Math.round(
  35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16
);
windChill.textContent(factor);
