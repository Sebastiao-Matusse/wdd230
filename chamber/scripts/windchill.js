const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector(".windChill");

const tC = Number(currentTemp.textContent);
const tF = 1.8 * tC + 32; //"transform the TC to TF"
const s = Number(windSpeed.textContent);

if (tC <= 50 && s > 3) {
  const factor = Math.round(
    35.74 + 0.6215 * tF - 35.75 * s ** 0.16 + 0.4275 * tF * s ** 0.16
  );
  windChill.textContent = factor;
} else {
  windChill.textContent = "NA";
}

const url =
  "https://api.openweathermap.org/data/2.5/weather?id=1052373&units=imperial&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.toUpperCase();
}
