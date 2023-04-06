let orders = document.querySelector(".orders");

let numOrders = Number(window.localStorage.getItem("orders-ls"));

// Days after last visit
// Determine if this is the first visit or display the number of visits.
if (numOrders !== 0) {
  orders.textContent = `You have ordered ${numOrders} speciality drinks`;
} else {
  orders.innerHTML = "You have not ordered yet!";
}

// numOrders++;
localStorage.setItem("orders-ls", numOrders);
