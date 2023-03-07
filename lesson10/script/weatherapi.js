// select HTML elements in the document
const currentTemp = document.querySelectorAll(".current-temp");
const weatherIcon = document.querySelectorAll(".weather-icon");
const captionDesc = document.querySelectorAll("figcaption");

const url0 =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

const url1 =
  "https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City&units=imperial&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

const url2 =
  "https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

async function apiFetch(url, temperature, icon, caption) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayResults(data, temperature, icon, caption);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(url0, currentTemp[0], weatherIcon[0], captionDesc[0]);
apiFetch(url1, currentTemp[1], weatherIcon[1], captionDesc[1]);
apiFetch(url2, currentTemp[2], weatherIcon[2], captionDesc[2]);

function displayResults(weatherData, currentTemp, weatherIcon, captionDesc) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.toUpperCase();
}

// With the code down here I intend to make the process more automatic
// Creating every needed html code with js

const multipleCities =
  "https://api.openweathermap.org/data/2.5/group?id=5368361,1052373,2643743&units=imperial&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

async function apiFetch2() {
  try {
    const response = await fetch(multipleCities);
    if (response.ok) {
      const data = await response.json();
      console.log(data.list); // this is for testing the call
      displayResults2(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch2();

function displayResults2(Cities) {
  const cards = document.querySelector("div.cards");

  Cities.forEach((City) => {
    const iconsrc = `https://openweathermap.org/img/w/${City.weather[0].icon}.png`;
    const desc = City.weather[0].description;

    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    // let cardhead = document.createElement("div");
    // cardhead.setAttribute("class", "cardhead");
    let cityName = document.createElement("h2");
    let description = document.createElement("p");
    let currentCondition = document.createElement("p");
    let figure = document.createElement("figure");
    let imgIcon = document.createElement("img");
    let caption = document.createElement("figcaption");

    cityName.textContent = `${City.name}`;
    description.innerHTML = `The current temperature in ${
      City.name
    } is <strong>${City.main.temp.toFixed(0)}</strong>  &deg;F`;
    currentCondition.textContent = "Current Condition Icon";

    imgIcon.setAttribute("src", iconsrc);
    imgIcon.setAttribute("alt", desc);
    caption.textContent = desc.toUpperCase();

    card.appendChild(cityName);
    card.appendChild(description);
    card.appendChild(currentCondition);
    card.appendChild(figure);
    figure.appendChild(imgIcon);
    figure.appendChild(caption);
    cards.appendChild(card);
  });
}
