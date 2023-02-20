function toggleMenu() {
  // console.log("It worked");
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

const firstOptions = {
  weekdays: "long",
  day: "numeric",
  month: "short",
  year: "numeric",
};

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

const date = document.getElementsByClassName("currentDate");
date[0].textContent = fulldateUK;
date[1].textContent = new Date().toLocaleString("en-UK", firstOptions);

let day = new Date().getDay();

const bannerContainer = document.querySelector(".banner");
const bannerElement = document.createElement("h2");


if (day === 1 || day === 2) {
  bannerElement.textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  bannerContainer.appendChild(bannerElement);
} else {
  bannerContainer.remove();
}
