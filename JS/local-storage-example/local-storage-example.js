document.querySelector("button").addEventListener("click", function () {
  alert("+");
});

localStorage.setItem("number", 2);
localStorage.setItem("bool", true);
localStorage.setItem("string", "December");
localStorage.setItem("array", JSON.stringify(["q", 3, false]));
localStorage.setItem("object", JSON.stringify({ name: "Serhii", id: 1 }));

const num = localStorage.getItem("number");
const bool = localStorage.getItem("bool");
const str = localStorage.getItem("string");
const arr = JSON.parse(localStorage.getItem("array"));
const obj = JSON.parse(localStorage.getItem("object"));

console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(str, typeof str);
console.log(arr, typeof arr);
console.log(obj, typeof obj);

// Отримуємо посилання на потрібні елементи
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const itemContainer = document.getElementById("itemContainer");

addButton.addEventListener("click", function () {
  addDiv(inputField.value);
  addToLocalStorage(inputField.value);

  inputField.value = "";
});

function addDiv(text) {
  const itemDiv = document.createElement("div");

  const span = document.createElement("span");

  span.textContent = text;

  const removeButton = document.createElement("button");

  removeButton.textContent = "Delete";
  removeButton.addEventListener("click", function () {
    itemDiv.remove();
  });

  itemDiv.appendChild(span);
  itemDiv.appendChild(removeButton);

  itemContainer.appendChild(itemDiv);
}

function addToLocalStorage(text) {
  // Отримуємо поточне значення, яке зберігається
  // у localStorage
  let currentStorage = localStorage.getItem("todo");

  // Якщо у localStorage нічого немає
  // то працюємо з порожнім масивом
  if (currentStorage == null) {
    currentStorage = [];
  } else {
    // інакше перетворюємо текстове представлення
    // масиву в об'єкт масив
    currentStorage = JSON.parse(currentStorage);
  }

  currentStorage.push(text);

  localStorage.setItem("todo", JSON.stringify(currentStorage));
}

// Завантаження переліку з localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedItems = JSON.parse(localStorage.getItem("todo")) ?? [];

  savedItems.forEach((text) => addDiv(text));
});

// Додавання нового елемента
addButton.addEventListener("click", () => {
  const text = inputField.value.trim();

  if (text.length > 0) {
    addItem(text);
    saveItem(text);

    inputField.value = ""; // Очистити поле вводу
  }
});

// Функція для додавання елемента на сторінку
function addItem(text) {
  const item = document.createElement("div");

  item.className = "item";

  const itemText = document.createElement("span");

  itemText.textContent = text;

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    item.remove();

    removeItem(text);
  });

  item.appendChild(itemText);
  item.appendChild(deleteButton);
  itemContainer.appendChild(item);
}

// Збереження нового елемента в localStorage
function saveItem(text) {
  const savedItems = JSON.parse(localStorage.getItem("items")) ?? [];

  savedItems.push(text);

  localStorage.setItem("items", JSON.stringify(savedItems));
}

// Видалення елемента з localStorage
function removeItem(text) {
  const savedItems = JSON.parse(localStorage.getItem("items")) ?? [];
  const updatedItems = savedItems.filter((item) => item !== text);

  localStorage.setItem("items", JSON.stringify(updatedItems));
}
