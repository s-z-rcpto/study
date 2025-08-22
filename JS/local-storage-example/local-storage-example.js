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

// Додавання нового елемента
addButton.addEventListener("click", function () {
  const text = inputField.value.trim();

  if (text.length === 0) {
    return;
  }

  addDiv(inputField.value);
  addToLocalStorage(inputField.value);

  inputField.value = ""; // Очистити поле вводу
});

// Функція для створення нового контейнера для відображення й керування завданням
function addDiv(text) {
  // Створення нового контейнера для завдання
  const itemDiv = document.createElement("div");

  // Додавання класу для стилізації контейнера завдання
  itemDiv.classList.add("item");

  // Створення нового елемента для відображення тексту завдання
  const span = document.createElement("span");

  span.textContent = text;

  // Додавання елемента з текстом до контейнера завдання
  itemDiv.appendChild(span);

  // Створення кнопки для видалення завдання
  const removeButton = document.createElement("button");

  removeButton.textContent = "Delete";

  removeButton.addEventListener("click", function () {
    itemDiv.remove();

    removeItem(text);
  });

  // Додавання кнопки видалення до контейнера завдання
  itemDiv.appendChild(removeButton);

  // Додавання контейнера завдання до основного контейнера з переліком завдань
  itemContainer.appendChild(itemDiv);
}

// Функція для отримання поточного стану localStorage
function getCurrentStorageData() {
  let currentStorage = localStorage.getItem("todo");

  // Якщо у localStorage нічого немає, то працюємо з порожнім масивом
  if (currentStorage == null) {
    currentStorage = [];
  } else {
    // інакше перетворюємо текстове представлення масиву в об'єкт масив
    currentStorage = JSON.parse(currentStorage);
  }
  return currentStorage;
}

// Функція для оновлення даних у localStorage
function setNewDataIntoStorage(taskList) {
  localStorage.setItem("todo", JSON.stringify(taskList));
}

// Функція для додавання нового елемента в localStorage
function addToLocalStorage(text) {
  // Отримуємо поточне значення, яке зберігається у localStorage
  const currentList = getCurrentStorageData();

  // Додаємо новий елемент до масиву
  currentList.push(text);

  // Оновлюємо значення переліку завдань у localStorage
  setNewDataIntoStorage(currentList);
}

// Функція для видалення елемента з localStorage
function removeItem(text) {
  // Отримуємо поточне значення, яке зберігається у localStorage
  const currentList = getCurrentStorageData();

  // Фільтруємо масив щоб видалити елемент
  const updatedList = currentList.filter((item) => item !== text);

  // Оновлюємо значення переліку завдань у localStorage
  setNewDataIntoStorage(updatedList);
}

// Завантаження переліку з localStorage
document.addEventListener("DOMContentLoaded", function () {
  const currentList = getCurrentStorageData();

  currentList.forEach((text) => addDiv(text));
});
