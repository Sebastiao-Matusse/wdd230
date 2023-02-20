const temperature = document.querySelector("#temperature");
let windSpeed = document.querySelector("#windSpeed");
let windChill = document.querySelector(".windChill");
const tC = Number(temperature.textContent);
const tF = 1.8 * tC + 32 //"transform the TC to TF"
const s = Number(windSpeed.textContent);

if (tC <= 50 && s > 3) {
  const factor = Math.round(
    35.74 + 0.6215 * tF - 35.75 * s ** 0.16 + 0.4275 * tF * s ** 0.16
  );  
  windChill.textContent = factor;
  
} else {
windChill.textContent = "NA"
  
}

