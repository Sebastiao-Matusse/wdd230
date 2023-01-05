const firstOptions = {
  weekdays: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
};
const options = {
  weekdays: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("currentdate").textContent = new Date().toLocaleString(
  "en-US",
  firstOptions
);
document.getElementById("arrivalDate").textContent = new Date().toLocaleString(
  "en-Us",
  options
);
