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
const task9inner = document.getElementById("task-9-inner");
const task9text = document.getElementById("task-9-text");

task9b.addEventListener("click", function () {
  task9inner.innerHTML = `<b><i><u>${task9i.value}</u></i></b>`;
  task9text.textContent = `<b><i><u>${task9i.value}</u></i></b>`;
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

// Завдання 11: Відстеження наведення
// Створіть кнопку.
// При наведенні миші на кнопку змініть її текст на "Ти навів мишу!".
// Після прибирання миші поверніть початковий текст.

const DEFAULT_BUTTON_11_TEXT = "Кнопка без курсора";
const task11b = document.getElementById("task-11-b");

task11b.textContent = DEFAULT_BUTTON_11_TEXT;

task11b.addEventListener("mouseenter", function () {
  task11b.textContent = "Спіймали";
});

task11b.addEventListener("mouseleave", function () {
  task11b.textContent = DEFAULT_BUTTON_11_TEXT;
});

// Завдання 12: Калькулятор
// Створіть два поля введення, кнопку та абзац.
// При натисканні на кнопку обчисліть суму чисел із полів введення й відобразіть результат у абзаці.

const task12i1 = document.getElementById("task-12-i-1");
const task12i2 = document.getElementById("task-12-i-2");
const task12s = document.getElementById("task-12-s");
const task12b = document.getElementById("task-12-b");
const task12Result = document.getElementById("task-12-result");

task12b.addEventListener("click", function () {
  console.dir(task12s);
  let result;

  const operation = task12s.value;
  const num1 = Number(task12i1.value);
  const num2 = Number(task12i2.value);

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      break;
  }

  task12Result.textContent = result;
});

// Завдання 13: Вибір пункту меню
// Створіть список із кількох пунктів.
// При натисканні на будь-який пункт змініть його фон на синій.

// Спосіб 1 (приклад у завданні 7, спосіб 1)
// 1. Додаємо до елементів списку <li> клас "menu-item" для всіх однаковий
// 2. Шукаємо елементи по назві класу "menu-item"
// 3. Для кожного знайденого елемента <li> з класом "menu-item"
//    додаємо обробник події натискання клавіші миші
// 4. В обробнику події натискання прибираємо фон всіх елементів <li> з класом "menu-item"
// 5. Встановлюємо синій фон для поточного елемента

// Шукаємо ВСІ елементи <li> з класом ".menu-item" на сторінці
const task13LiList = document.querySelectorAll(".menu-item");

// Для кожного знайденого елемента <li> з класом ".menu-item"
for (const li of task13LiList) {
  // додаємо очікування натискання клавіші миші
  li.addEventListener("click", function () {
    // те що тут буде виконуватися ЛИШЕ після натискання клавіші миші
    // початок

    // після натискання миші по якомусь пункту меню
    // ми прибираємо колір фону для всіх пунктів меню
    // (всі <li> з класом ".menu-item")
    for (const li2 of task13LiList) {
      li2.style.backgroundColor = "";
    }

    // встановити синій колір фону для пункту,
    // по якому натиснули клавішу миші
    li.style.backgroundColor = "cornflowerblue";
    // кінець
  });
}

// Спосіб 2 (рекомендований)
// (приклад у завданні 7, спосіб 2 та завданні 10)
// 1. Додаємо до тегу списку ідентифікатор
// 2. Шукаємо тег списку й додаємо обробник події натискання
// 3. В обробнику події натискання прибираємо фон всіх елементів
//    видаляючи клас active
// 4. Додаємо клас active до елементу, який викликав подію
//    і який встановлюємо за допомогою параметра event

// const task13u = document.getElementById("task-13-u");

// task13u.addEventListener("click", function (event) {
//   // шукаємо всі li в середині списку "task-13-u"
//   const li = task13u.querySelectorAll("li");

//   for (const element of li) {
//     element.classList.remove("active");
//   }

//   event.target.classList.add("active");
// });

// Завдання 14: Обмеження введення
// Створіть поле введення.
// При кожному введенні символу перевіряйте,
// щоб його довжина не перевищувала 10 символів.

const task14i = document.getElementById("task-14-i");
const task14error = document.getElementById("task-14-error");

// подія = зміна значення текстового поля:
// - натиснення клавіші клавіатури
// - вставлення тексту з буфера (Ctrl+V або Вставити)
// - зміна властивості value у JS
task14i.addEventListener("input", function (event) {
  console.log("Подія: input");

  console.dir(event);
  console.dir(task14i.value);
  if (task14i.value.length > 10) {
    task14error.textContent = "Довжина введеного тексту перевищує 10 символів";
  } else {
    task14error.textContent = "";
  }
});

// подія = натиснення клавіші (але без відпускання)
task14i.addEventListener("keydown", function (event) {
  console.log("Подія: keydown");

  console.dir(event);
  console.dir(task14i.value);

  // скасовує дію за замовчуванням
  // наприклад, натискання F7 не показує діалогового вікна
  // event.preventDefault();
});

// подія = відпускання клавіші
task14i.addEventListener("keyup", function (event) {
  console.log("Подія: keyup");

  console.dir(event);
  console.dir(task14i.value);
});

// подія = натискання + відпускання
// застаріла подія
task14i.addEventListener("keypress", function (event) {
  console.log("Подія: keypress");

  console.dir(event);
  console.dir(task14i.value);
});

// подія = встановлення курсору у поле вводу
task14i.addEventListener("focus", function (event) {
  console.log(event);

  task14i.style.backgroundColor = "yellow";
});

// подія = прибирання курсору з поля вводу (обернено до focus)
task14i.addEventListener("blur", function (event) {
  console.log(event);

  task14i.style.backgroundColor = "white";
});
