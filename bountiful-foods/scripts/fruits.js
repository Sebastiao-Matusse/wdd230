const fruitData = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let firstName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let firstFruit = document.querySelector("#first-fruit");
let secondFruit = document.querySelector("#second-fruit");
let thirdFruit = document.querySelector("#third-fruit");
let specialInstruct = document.querySelector("#special-info");

let selectedName = document.querySelector("#selected-name");
let selectedEmail = document.querySelector("#selected-email");
let SelectedPhone = document.querySelector("#selected-phone");
let selectedfruitOne = document.querySelector("#selected-fruit-one");
let selectedFruitTwo = document.querySelector("#selected-fruit-two");
let selectedFruitThree = document.querySelector("#selectd-fruit-three");
let specialInfo = document.querySelector("#selected-info");
let confirmBtn = document.querySelector(".confirmBtn");
let submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");

let fruitSelection = document.querySelector(".fruit-selection");
let selects = document.querySelectorAll("select");

let modal = document.querySelector("#modal");
let span = document.getElementsByClassName("close")[0];
let thanks = document.querySelector(".mainthankyou");
let closeSubmissionBtn = document.querySelector(".close-submission");

let numOrders = Number(window.localStorage.getItem("orders-ls"));

let fruits;
async function apiFetch() {
  try {
    const response = await fetch(fruitData);
    if (response.ok) {
      fruits = await response.json();
      // console.log(fruits);
      displayResults(fruits);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(fruits) {
  selects.forEach((element) => {
    fruits.forEach((fruit) => {
      // console.log(fruit.name);
      let option = document.createElement("option");
      option.setAttribute("value", fruit.name);
      option.innerHTML = fruit.name;
      element.appendChild(option);

      fruitSelection.appendChild(element);
    });
  });
}

function getFruitIndex(fruits) {
  // selects.forEach((element) => {
  //   let index = element.selectedIndex;
  //   console.log(index);

  // });
  let index_one = Number(firstFruit.selectedIndex);
  let index_two = Number(secondFruit.selectedIndex);
  let index_three = Number(thirdFruit.selectedIndex);

  let carbohydrates =
    fruits[index_one].nutritions.carbohydrates +
    fruits[index_two].nutritions.carbohydrates +
    fruits[index_three].nutritions.carbohydrates;
  document.querySelector("#carbohydrates").innerHTML = carbohydrates.toFixed(2);
  // console.log(carbohydrates);

  let protein =
    fruits[index_one].nutritions.protein +
    fruits[index_two].nutritions.protein +
    fruits[index_three].nutritions.protein;
  document.querySelector("#protein").innerHTML = protein.toFixed(2);
  // console.log(protein.toFixed(2));

  let fat =
    fruits[index_one].nutritions.fat +
    fruits[index_two].nutritions.fat +
    fruits[index_three].nutritions.fat;
  document.querySelector("#fat").innerHTML = fat.toFixed(2);

  // console.log(fat.toFixed(2));

  let sugar =
    fruits[index_one].nutritions.sugar +
    fruits[index_two].nutritions.sugar +
    fruits[index_three].nutritions.sugar;
  document.querySelector("#sugar").innerHTML = sugar.toFixed(2);

  // console.log(sugar.toFixed(2));

  let calories =
    fruits[index_one].nutritions.calories +
    fruits[index_two].nutritions.calories +
    fruits[index_three].nutritions.calories;
  document.querySelector("#calories").innerHTML = calories.toFixed(2);

  // console.log(calories.toFixed(2));
}

confirmBtn.addEventListener("click", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    selectedName.innerHTML = document.querySelector("#name").value;
    selectedEmail.innerHTML = document.querySelector("#email").value;
    SelectedPhone.innerHTML = document.querySelector("#phone").value;

    selectedfruitOne.innerHTML = document.querySelector("#first-fruit").value;
    selectedFruitTwo.innerHTML = document.querySelector("#second-fruit").value;
    selectedFruitThree.innerHTML = document.querySelector("#third-fruit").value;
    specialInfo.innerHTML = document.querySelector("#special-info").value;
    console.log(phone.value);
    getFruitIndex(fruits);
    modal.style.display = "block";
  });
  // output = selectElement.value;
  // event.preventDefault();
  // console.log(output);
  // document.querySelector('.output').textContent = output;
  // console.log(firstName.value);
  // selectedEmail.innerHTML = email;
  // selectedfruitOne.innerHTML = firstFruit;
  // selectedFruitTwo.innerHTML = secondFruit;
  // selectedFruitThree.innerHTML = thirdFruit;
  // specialInfo.innerHTML = specialInstruct;
  // document.querySelector("form").reset();
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

closeSubmissionBtn.onclick = function () {
  thanks.style.display = "none";
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submitBtn.onclick = function () {
  let content = document.querySelector("#modal-content");
  // content.removeChild();
  content.remove();
  thanks.style.display = "block";
  numOrders++;
  localStorage.setItem("orders-ls", numOrders);
};
