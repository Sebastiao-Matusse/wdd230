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
