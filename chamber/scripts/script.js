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
const displayDays = document.querySelector("#daysAfter");

// get the stored value in localStorage
let lastDayVisit = Number(window.localStorage.getItem("visits-ls"));

// Days after last visit
// Determine if this is the first visit or display the number of visits.
let today = Date.now();
if (lastDayVisit !== 0) {
  const numDays = Math.round(today / 86400000 - lastDayVisit);
  displayDays.textContent = numDays;
} else {
  displayDays.textContent = "This is your first visit ";
}

// sets the day visiting the page as the last visiting day.
lastDayVisit = today / 86400000;
// store the new day of last visting the page
localStorage.setItem("visits-ls", lastDayVisit);
