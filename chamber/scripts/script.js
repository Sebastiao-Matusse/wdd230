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

// Lazy-loading images
// get all imgs with dta-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameter being set for the intersectionObserver
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// imagesToLoad.forEach((img) => {
//   loadImages(img);
// });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  }, imgOptions);
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Local Storage
// initialize display elements
const header = document.querySelector("header");
const divHeader = document.createElement("div");
const daysAfter = document.createElement("span");
divHeader.setAttribute("class", "date");
daysAfter.setAttribute("id", "daysAfter");
divHeader.appendChild(daysAfter);
// header.appendChild(divHeader);

// get the stored value in localStorage
let lastDayVisit = Number(window.localStorage.getItem("visits-ls"));

// Days after last visit
// Determine if this is the first visit or display the number of visits.
let today = Date.now();
// if (lastDayVisit !== 0) {
//   const numDays = Math.round(today / 86400000 - lastDayVisit);
//   daysAfter.textContent = `${numDays} days after your last visit`;
// } else {
//   daysAfter.textContent = "This is your first visit ";
// }

// sets the day visiting the page as the last visiting day.
lastDayVisit = today / 86400000;
// store the new day of last visting the page
localStorage.setItem("visits-ls", lastDayVisit);

// url =
//   "https://raw.githubusercontent.com/Sebastiao-Matusse/wdd230/main/chamber/json/data.json";

// async function getCompanyData(url) {
//   const response = await fetch(url);

//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     displayCompanies(data.companies);
//   }
// }

// getCompanyData(url);

// const displayCompanies = (companies) => {
//   const cards = document.querySelector("div.cards");
//   companies.forEach((company) => {
//     // Create elements to add to the div.cards element
//     let card = document.createElement("section");
//     let cardhead = document.createElement("div");
//     cardhead.setAttribute("class", "cardhead");
//     let h2 = document.createElement("h2");
//     let address = document.createElement("p");
//     let phones = document.createElement("p");
//     let website = document.createElement("a");
//     let portrait = document.createElement("img");

//     h2.textContent = `${company.fname} ${company.lNme}`;
//     address.textContent = `${company.address}`;
//     phones.textContent = `${company.phones}`;
//     website.setAttribute("href", company.Website);
//     website.textContent = "Website ↗";

//     portrait.setAttribute("src", company.img);
//     portrait.setAttribute("loading", "lazy");
//     portrait.setAttribute("width", "340");
//     portrait.setAttribute("height", "440");
//     portrait.setAttribute(
//       "alt",
//       `portrait of ${company.fname} ${company.lNme}`
//     );

//     cardhead.appendChild(h2);
//     cardhead.appendChild(address);
//     cardhead.appendChild(phones);
//     cardhead.appendChild(website);
//     card.appendChild(cardhead);
//     card.appendChild(portrait);
//     cards.appendChild(card);
//     // console.log(cards);
//   });
// };

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("div.cards");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
//   // example using arrow function
//   display.classList.add("grid");
//   display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//   display.classList.add("list");
//   display.classList.remove("grid");
// }
