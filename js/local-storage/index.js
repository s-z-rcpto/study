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

addButton.addEventListener("click", function () {
  const text = inputField.value;

  const currentStorage = localStorage.getItem("todo");

  let currentList = [];

  if (currentStorage !== null) {
    currentList = JSON.parse(currentStorage);
  }

  currentList.push(text);

  localStorage.setItem("todo", JSON.stringify(currentList));

  addDiv(text);
});

document.addEventListener("DOMContentLoaded", function () {
  const currentStorage = localStorage.getItem("todo");

  let currentList = [];

  if (currentStorage !== null) {
    currentList = JSON.parse(currentStorage);
  }

  console.log(currentList);

  for (const text of currentList) {
    addDiv(text);
  }
});

function addDiv(text) {
  const itemDiv = document.createElement("div");

  itemDiv.classList.add("item");

  const span = document.createElement("span");

  span.textContent = text;

  itemDiv.appendChild(span);

  const button = document.createElement("button");

  button.textContent = "Видалити";

  button.addEventListener("click", function () {
    itemDiv.remove();

    // видалення з локальної пам'яті
  });

  itemDiv.appendChild(button);

  taskList.appendChild(itemDiv);
}

const priceList = [
  {
    id: 1,
    name: "МЕДИЧНИЙ ПЕДИКЮР",
    description: "гігієнічний",
    price: 700,
    upPrice: false,
  },
  {
    id: 2,
    name: "МЕДИЧНИЙ ПЕДИКЮР",
    description: "різна патологія нігтів або шкіри",
    price: 800,
    upPrice: true,
  },
  {
    id: 3,
    name: "МЕДИЧНИЙ ПЕДИКЮР 2",
    description: "sdfsdfsdf",
    price: 900,
    upPrice: true,
  },
];
