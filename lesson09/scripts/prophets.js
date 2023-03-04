const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    displayProphets(data.prophets);
  }
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let cardhead = document.createElement("div");
    cardhead.setAttribute("class", "cardhead");
    let h2 = document.createElement("h2");
    let birthdate = document.createElement("p");
    let death = document.createElement("p");
    let birthplace = document.createElement("p");
    let ageAtDeath = document.createElement("p");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `${prophet.birthdate}`;
    death.textContent = `${prophet.death}`;
    birthplace.textContent = `${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    if (prophet.order === 1) {
      portrait.setAttribute(
        "alt",
        `portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
      );
    } else if (prophet.order === 2) {
      portrait.setAttribute(
        "alt",
        `portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
      );
    } else if (prophet.order === 3) {
      portrait.setAttribute(
        "alt",
        `portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
      );
    } else {
      portrait.setAttribute(
        "alt",
        `portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
      );
    }

    if (prophet.death !== null) {
      deathAge =
        new Date(prophet.death).getFullYear() -
        new Date(prophet.birthdate).getFullYear();
      ageAtDeath.textContent = `Age at death: ${deathAge}`;
    }

    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    cardhead.appendChild(h2);
    cardhead.appendChild(birthdate);
    cardhead.appendChild(death);
    cardhead.appendChild(birthplace);
    cardhead.appendChild(ageAtDeath);
    card.appendChild(cardhead);
    card.appendChild(portrait);
    console.log(cards);
    cards.appendChild(card);
    console.log(cards);
  });
};

getProphetData(url);
