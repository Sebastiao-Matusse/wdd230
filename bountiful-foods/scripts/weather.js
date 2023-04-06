const currentTemp = document.querySelector(".current-temperature");
const dayTwoTemp = document.querySelector(".temperature-two");
const dayThreeTemp = document.querySelector(".temperature-three");
const dayFourTemp = document.querySelector(".temperature-four");

const weatherIcon = document.querySelector("#weather-icon");
const dayTwoWeatherIcon = document.querySelector("#day-two-weather-icon");
const dayThreeWeatherIcon = document.querySelector("#day-three-weather-icon");
const dayFourWeatherIcon = document.querySelector("#day-three-weather-icon");

const captionDesc = document.querySelector("figcaption");
const captionDescTwo = document.querySelector("figcaption");
const captionDescThree = document.querySelector("figcaption");
const captionDescFour = document.querySelector("figcaption");

const humidity = document.querySelector("#humidity");
const humidityTwo = document.querySelector(".humidity-two");
const humidityThree = document.querySelector(".humidity-three");
const humidityFour = document.querySelector(".humidity-four");

const windChill = document.querySelector(".windChill");
const windChillTwo = document.querySelector(".windChill-two");
const windChillThree = document.querySelector(".windChill-three");
const windChillFour = document.querySelector(".windChill-four");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(
    0
  )}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.toUpperCase();

  // ------ DAY TWO TEMPERATURE ------
  dayTwoTemp.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(
    0
  )}</strong>`;
  humidityTwo.innerHTML = `<strong>${weatherData.list[1].main.humidity.toFixed(
    0
  )}</strong>`;

  const iconsrcTwo = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
  const descTwo = weatherData.list[1].weather[0].description;

  dayTwoWeatherIcon.setAttribute("src", iconsrcTwo);
  dayTwoWeatherIcon.setAttribute("alt", descTwo);
  captionDescTwo.textContent = desc.toUpperCase();

  // ------ DAY THREE TEMPERATURE ------
  dayThreeTemp.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(
    0
  )}</strong>`;
  humidityThree.innerHTML = `<strong>${weatherData.list[2].main.humidity.toFixed(
    0
  )}</strong>`;

  const iconsrcThree = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
  const descThree = weatherData.list[2].weather[0].description;

  dayThreeWeatherIcon.setAttribute("src", iconsrcThree);
  dayThreeWeatherIcon.setAttribute("alt", descThree);
  captionDescThree.textContent = desc.toUpperCase();

  // ------ DAY FOUR TEMPERATURE ------
  dayFourTemp.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(
    0
  )}</strong>`;
  humidityFour.innerHTML = `<strong>${weatherData.list[2].main.humidity.toFixed(
    0
  )}</strong>`;

  const iconsrcFour = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
  const descFour = weatherData.list[2].weather[0].description;

  dayFourWeatherIcon.setAttribute("src", iconsrcFour);
  dayFourWeatherIcon.setAttribute("alt", descFour);
  captionDescFour.textContent = desc.toUpperCase();
}
