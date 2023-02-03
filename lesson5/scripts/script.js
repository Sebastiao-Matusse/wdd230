const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  saveChapter();
  document.querySelector("input").focus();
});

function saveChapter() {
  let currentChapter = input.value;
  input.value = "";
  let listText = document.createElement("span");
  let lisItem = document.createElement("li");
  let deleteButton = document.createElement("button");

  lisItem.appendChild(listText);
  lisItem.appendChild(deleteButton);
  list.appendChild(lisItem);

  listText.textContent = currentChapter;
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    lisItem.remove();
  });
}
