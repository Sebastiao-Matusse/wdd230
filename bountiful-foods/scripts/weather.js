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
      displayResults(data, 0, 5, 13, 21);
      // displayResults(data, 1);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(
  weatherData,
  index_one,
  index_two,
  index_three,
  index_four
) {
  currentTemp.innerHTML = `<strong>${weatherData.list[
    index_one
  ].main.temp.toFixed(0)}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[
    index_one
  ].main.humidity.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[index_one].weather[0].icon}.png`;
  const desc = weatherData.list[index_one].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.toUpperCase();

  // DAY TWO

  dayTwoTemp.innerHTML = `<strong>${weatherData.list[
    index_two
  ].main.temp.toFixed(0)}</strong>`;
  humidityTwo.innerHTML = `<strong>${weatherData.list[
    index_two
  ].main.humidity.toFixed(0)}</strong>`;

  const iconsrcTwo = `https://openweathermap.org/img/w/${weatherData.list[index_two].weather[0].icon}.png`;
  const descTwo = weatherData.list[index_two].weather[0].description;

  dayTwoWeatherIcon.setAttribute("src", iconsrcTwo);
  dayTwoWeatherIcon.setAttribute("alt", descTwo);
  captionDesc.textContent = descTwo.toUpperCase();

  // DAY THREE
  dayThreeTemp.innerHTML = `<strong>${weatherData.list[
    index_three
  ].main.temp.toFixed(0)}</strong>`;
  // humidityThree.innerHTML = `<strong>${weatherData.list[
  //   index_three
  // ].main.humidity.toFixed(0)}</strong>`;

  const iconsrcThree = `https://openweathermap.org/img/w/${weatherData.list[index_three].weather[0].icon}.png`;
  const descThree = weatherData.list[index_three].weather[0].description;

  dayThreeWeatherIcon.setAttribute("src", iconsrcThree);
  dayThreeWeatherIcon.setAttribute("alt", descThree);
  captionDesc.textContent = descTwo.toUpperCase();

  // DAY FOUR
  dayFourTemp.innerHTML = `<strong>${weatherData.list[
    index_four
  ].main.temp.toFixed(0)}</strong>`;
  // humidityThree.innerHTML = `<strong>${weatherData.list[
  //   index_four
  // ].main.humidity.toFixed(0)}</strong>`;

  const iconsrcFour = `https://openweathermap.org/img/w/${weatherData.list[index_four].weather[0].icon}.png`;
  const descFour = weatherData.list[index_four].weather[0].description;

  dayFourWeatherIcon.setAttribute("src", iconsrcFour);
  dayFourWeatherIcon.setAttribute("alt", descFour);
  captionDesc.textContent = descTwo.toUpperCase();

  let dayOf = weatherData.list[index_three].dt_txt;
  // console.log(typeof dayOf);

  const displayDayThree = document.querySelector(".day-three");
  const displayDayFour = document.querySelector(".day-four");

  let dateThree = new Date(`${weatherData.list[index_three].dt_txt}`);
  let dateFour = new Date(`${weatherData.list[index_four].dt_txt}`);
  let dayFour = dateFour.getDay();
  let dayThree = dateThree.getDay();
  let weekday;

  if (dayThree == 0) {
    weekday = "Sunday";
  } else if (dayThree == 1) {
    weekday = "Monday";
  } else if (dayThree == 2) {
    weekday = "Tuesday";
  } else if (dayThree == 3) {
    weekday = "Wednesday";
  } else if (dayThree == 4) {
    weekday = "Thursday";
  } else if (dayThree == 5) {
    weekday = "Friday";
  } else if (dayThree === 6) {
    weekday = "Saturday";
  } else {
    weekday = "Day 3";
  }
  displayDayThree.innerHTML = weekday;

  console.log(`First display: ${weekday}`);

  if (dayFour == 0) {
    weekday = "Sunday";
  } else if (dayFour == 1) {
    weekday = "Monday";
  } else if (dayFour == 2) {
    weekday = "Tuesday";
  } else if (dayFour == 3) {
    weekday = "Wednesday";
  } else if (dayFour == 4) {
    weekday = "Thursday";
  } else if (dayFour == 5) {
    weekday = "Friday";
  } else if (dayFour === 6) {
    weekday = "Saturday";
  } else {
    weekday = "Day 4";
  }
  displayDayFour.innerHTML = weekday;
  console.log(`Second display: ${weekday}`);
}
