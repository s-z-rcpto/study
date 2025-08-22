// localStorage - вбудований у JS об'єкт для роботи
// з локальним сховищем браузера
// дозволяє зберігати інформацію і читати її
// навіть після закриття сторінки і повторного відвідування

// Записали пари ключ-значення у локальне сховище браузера
// Інструменти розробника - вкладка Додаток - секція Пам'ять - Локальна пам'ять
localStorage.setItem("number", 2);
localStorage.setItem("bool", true);
localStorage.setItem("string", "Fri");

// JSON - вбудований у JS об'єкт для конвертації
// складних типів даних у JSON-рядок і навпаки
// JSON-рядка у масив, об'єкт тощо
// JSON.stringify перетворення значення складного типу у JSON-рядок
// У локальній пам'яті всі дані зберігаються як рядки
localStorage.setItem("array", JSON.stringify(["q", 3, false]));
localStorage.setItem("object", JSON.stringify({ id: 1, name: "Serhii" }));

// Дані, які читаються (отримуються) з локальної пам'яті, будуть рядками
// тому для подальної роботи їх потрібно перетворити
let num = localStorage.getItem("number");
let bool = localStorage.getItem("bool");
let str = localStorage.getItem("string");

let arr = localStorage.getItem("array");
let obj = localStorage.getItem("object");

console.log(num, typeof num); // string
console.log(bool, typeof bool); // string
console.log(str, typeof str); // string
console.log(arr, typeof arr); // string
console.log(obj, typeof obj); // string

num = Number(num);
bool = Boolean(bool);

// JSON.parse перетворення JSON-рядок у значення складного типу:
// масив, об'єкт тощо
arr = JSON.parse(arr);
obj = JSON.parse(obj);

console.log(num, typeof num); // number
console.log(bool, typeof bool); // boolean
console.log(arr, typeof arr); // array
console.log(obj, typeof obj); // object

const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const taskList = document.getElementById("taskList");

// Додавання нового елемента
addButton.addEventListener("click", function () {
  const text = inputField.value.trim();

  if (text.length === 0) {
    return;
  }

  // Додавання нового елемента у перелік на сторінці
  addDiv(inputField.value);

  // Додавання нового елемента у localStorage
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

  // Напис на кнопці
  removeButton.textContent = "Видалити";

  // Обробник кліку по кнопці видалення
  removeButton.addEventListener("click", function () {
    // Видалення контейнера завдання
    itemDiv.remove();

    // Видалення елемента з localStorage
    removeItem(text);
  });

  // Додавання кнопки видалення до контейнера завдання
  itemDiv.appendChild(removeButton);

  // Додавання контейнера завдання до основного контейнера з переліком завдань
  taskList.appendChild(itemDiv);
}

// Функція для отримання поточного стану localStorage
function getCurrentStorageData() {
  const currentStorage = localStorage.getItem("todo");

  // За замовчуванням (на початку) у localStorage нічого немає,
  // тому працюємо з порожнім масивом
  let currentList = [];

  // Якщо у локальній пам'яті є збережена інформація,
  // то перетворюємо текстове представлення масиву в об'єкт масив
  if (currentStorage != null) {
    currentList = JSON.parse(currentStorage);
  }

  return currentList;
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
  // Отримуємо поточний перелік завдань з localStorage
  const currentList = getCurrentStorageData();

  // Додаємо кожен елемент з поточного переліку у DOM (на сторінку)
  for (const text of currentList) {
    addDiv(text);
  }
});
