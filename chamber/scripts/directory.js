url =
  "https://raw.githubusercontent.com/Sebastiao-Matusse/wdd230/main/chamber/json/data.json";

async function getCompanyData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    displayCompanies(data.companies);
  }
}

getCompanyData(url);

const displayCompanies = (companies) => {
  const cards = document.querySelector("div.cards");
  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let cardhead = document.createElement("div");
    cardhead.setAttribute("class", "cardhead");
    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phones = document.createElement("p");
    let website = document.createElement("a");
    let portrait = document.createElement("img");

    h2.textContent = `${company.fname} ${company.lNme}`;
    address.textContent = `${company.address}`;
    phones.textContent = `${company.phones}`;
    website.setAttribute("href", company.Website);
    website.textContent = "Website ↗";

    portrait.setAttribute("src", company.img);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    portrait.setAttribute(
      "alt",
      `portrait of ${company.fname} ${company.lNme}`
    );

    cardhead.appendChild(h2);
    cardhead.appendChild(address);
    cardhead.appendChild(phones);
    cardhead.appendChild(website);
    card.appendChild(cardhead);
    card.appendChild(portrait);
    cards.appendChild(card);
    // console.log(cards);
  });
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
