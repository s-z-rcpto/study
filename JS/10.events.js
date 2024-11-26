function showMessage(text) {
  alert(text);
}

function elementInfo(element) {
  console.log(element);
}

console.log("some text");

console.log(document.getElementById("example")); // об'єкт абзац
console.log(document.getElementById("Example")); // null

console.dir(document.getElementById("example")); // об'єкт абзац
console.dir(document.getElementById("Example")); // null

const p = document.getElementById("example2");

// якщо p = null буде помилка доступу до властивості style
if (p != null) {
  p.style.color = "red";
  p.style.fontSize = "24px"; // font-size
} else {
  console.log(`Елемент з id "example" не знайдено`);
}

console.log(document.querySelector("div"));
console.log(document.querySelector("#d2"));
console.log(document.querySelector(".c3"));
console.log(document.querySelector("div div"));

console.log(document.querySelectorAll("div2")); // []
console.log(document.querySelectorAll("div")); // [5 ел.]

const divList = document.querySelectorAll("div");

for (const div of divList) {
  console.log(div.textContent);
}

// Завдання 1: Зміна тексту кнопки при натисканні
// Створіть кнопку. При натисканні на неї змініть текст на "Ви натиснули мене!".

// Спосіб 1: за допомогою HTML-атрибута onclick з файлу index.html
function task1(element) {
  console.log(element);
  console.dir(element);

  element.textContent = "Ви натиснули мене!";
}

// Спосіб 2: за допомогою властивості DOM onclick
const button1_2 = document.getElementById("t1-2");

button1_2.onclick = function () {
  button1_2.textContent = "Ви натиснули мене!";
};

// Спосіб 3: за допомогою метода addEventListener
const button1_3 = document.getElementById("t1-3");

button1_3.addEventListener("click", function () {
  button1_3.textContent = "Ви натиснули мене!";
});
