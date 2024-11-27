// Завдання 2: Зміна кольору абзацу
// Створіть абзац із текстом і кнопку.
// При натисканні на кнопку змініть колір тексту абзацу на червоний.
const task2p = document.getElementById("task-2-p");
const task2b = document.getElementById("task-2-b");

task2b.addEventListener("click", function () {
  task2p.style.backgroundColor = "aqua"; // в CSS: background-color: 'aqua'
  task2p.style.color = "red";
});

// Завдання 5: Показ/приховування тексту
// Створіть абзац і кнопку.
// При натисканні на кнопку текст абзацу має зникати.
// При повторному натисканні — з'являтися.
const task5p = document.getElementById("task-5-p");
const task5b = document.getElementById("task-5-b");

task5b.addEventListener("click", function () {
  if (task5p.style.display === "none") {
    task5p.style.display = "block";
    task5b.textContent = "Сховати";
  } else {
    task5p.style.display = "none";
    task5b.textContent = "Показати";
  }
});

// Завдання 6: Лічильник натискань
// Створіть кнопку і абзац. При кожному натисканні на кнопку збільшуйте число в абзаці на 1.
const task6p = document.getElementById("task-6-p");
const task6b = document.getElementById("task-6-b");

task6b.addEventListener("click", function () {
  task6p.textContent = Number(task6p.textContent) + 1;
});

// Завдання 7: Підсвічування елемента
// Створіть кілька абзаців.
// При натисканні на будь-який абзац змініть його фон на жовтий.

// Спосіб 1
const task7pList = document.querySelectorAll(".task-7");

for (const p of task7pList) {
  p.addEventListener("click", function () {
    p.style.backgroundColor = "yellow";
  });
}

// Спосіб 2
const task7s = document.getElementById("task-7-s");

task7s.addEventListener("click", function (event) {
  console.log(event); // додаткова інформація про подію
  console.log(event.type);
  console.log(event.target); // елемент, по якому клікнули мишою (p)
  console.log(event.currentTarget); // батьківський елемент до елемента, по якому клікнули мишою (section)

  event.target.style.fontSize = "24px";
});

// Завдання 8: Пошук і зміна елемента
// Створіть кілька елементів із різними класами.
// За допомогою JavaScript знайдіть елемент із певним класом і змініть його текст.
const task8p = document.querySelector(".task-8-2");

if (task8p !== null) {
  task8p.textContent = "wednesday";
}

// Завдання 9: Введення тексту
// Створіть поле введення, кнопку та абзац.
// При натисканні на кнопку відобразіть текст із поля введення в абзаці.
const task9i = document.getElementById("task-9-i");
const task9b = document.getElementById("task-9-b");
const task9s = document.getElementById("task-9-s");

task9b.addEventListener("click", function () {
  task9s.innerHTML = `<b><i><u>${task9i.value}</u></i></b>`;
  task9i.value = "";
});

// Завдання 10: Перемикання класів
// Створіть кнопку та квадрат (div).
// При натисканні на кнопку змінюйте клас квадрата (наприклад, між класами "зелений" і "червоний").
const task10b = document.getElementById("task-10-b");
const task10d = document.getElementById("task-10-d");

task10b.addEventListener("click", function () {
  // Спосіб 1
  /*
  if (task10d.classList.contains("red")) {
    task10d.classList.add("green");
    task10d.classList.remove("red");
  } else {
    task10d.classList.add("red");
    task10d.classList.remove("green");
  }*/

  // Спосіб 2
  /*
  if (task10d.classList.contains("red")) {
    task10d.classList.replace("red", "green");
  } else {
    task10d.classList.replace("green", "red");
  }
  */

  // Спосіб 3
  task10d.classList.toggle("red");
  task10d.classList.toggle("green");
});
