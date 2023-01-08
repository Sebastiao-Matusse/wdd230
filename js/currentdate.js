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

// Question 4: template literal
d = new Date();
date = d.getDate();
document.getElementById(
  "templateString"
).textContent = `Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;
document.getElementById("template-string").textContent = "Done Successfully";

// Question 5: querySelector
let quantity = document.querySelector("#q").value; // I missed the 'let' to declare the variable, the pound sign a

//Question 6: Output the string "Welcome to <em>our</em> neighborhood!".
document.querySelector(".first-output").innerHTML =
  "Welcome to <em>our</em> neighborhood!";

// Solution answer
document.querySelector("p").innerHTML = "Welcome to <em>our</em> neighborhood!";
// We may have used the innerHTML instead of textContent so that we could be able to insert the <em> tag
// emphasise
// Yes, it's okay to use double quotes to contain the output string
// Yes, it's okay to use backticks (`) to contain the output string, especially if there is some placeholder.

// Question 7
document.querySelector("#temp").textContent = getTemperature();
//Solution answer
document.querySelector("#temp").value = getTemperature();

// Question 8
const divs = document.querySelectorAll("div");
// Solution answer
/* const divs = document.querySelectorAll('div'); */

let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let filterC = citynames.filter()

// Solution answer
/* let filterC = citynames.filter(city => city.charAt(0) === 'C'); */

