const options = {weekdays: "long", day: "numeric", month: "short", year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleString("en-US", options)
document.getElementById("arrivalDate").textContent = new Date().toLocaleString("en-Us", options)