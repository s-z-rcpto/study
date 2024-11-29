// Отримуємо посилання на потрібні елементи
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const itemContainer = document.getElementById("itemContainer");

// Завантаження переліку з localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedItems = JSON.parse(localStorage.getItem("items")) ?? [];

  savedItems.forEach((text) => addItem(text));
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
