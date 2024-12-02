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

// Завдання 15: Підрахунок довжини тексту
// Створіть поле введення і порожній абзац.
// В абзаці відображайте кількість символів, введених у поле.
const task15i = document.getElementById("task-15-i");
const task15p = document.getElementById("task-15-p");

task15i.addEventListener("input", function (event) {
  task15p.textContent = task15i.value.length;
});

// Завдання 16: Зміна розміру тексту
// Створіть абзац із текстом і дві кнопки — "Збільшити" і "Зменшити".
// При натисканні на відповідні кнопки збільшуйте або зменшуйте розмір тексту абзацу.

const task16p = document.getElementById("task-16-p");
const task16up = document.getElementById("task-16-up");
const task16down = document.getElementById("task-16-down");

task16up.addEventListener("click", function (event) {
  // Якщо немає значення розміру
  // встановлюємо якесь типове значення
  if (task16p.style.fontSize === "") {
    task16p.style.fontSize = "16px";
  }

  // Отримую поточний розмір, наприклад "16"
  // перетворюю рядок "16" в число 16
  // збільшую 16 на 2 щоб отримати розмір 18
  let size = Number(task16p.style.fontSize.slice(0, -2)) + 2;

  // Отримую поточні одиниці виміру
  let unit = task16p.style.fontSize.slice(-2);

  // Записали нове значення
  task16p.style.fontSize = `${size}${unit}`;
});

task16down.addEventListener("click", function (event) {
  if (task16p.style.fontSize === "") {
    task16p.style.fontSize = "16px";
  }

  let size = Number(task16p.style.fontSize.slice(0, -2)) - 2;
  let unit = task16p.style.fontSize.slice(-2);

  task16p.style.fontSize = `${size}${unit}`;
});

// Завдання 18: Автоматичне видалення тексту
// Створіть абзац із текстом і кнопку. При натисканні на кнопку через 5 секунд текст абзацу має зникнути.

const task18i = document.getElementById("task-18-i");
const task18b = document.getElementById("task-18-b");
const task18s = document.getElementById("task-18-s");

task18b.addEventListener("click", function (event) {
  let time = 0;

  // Виконуємо блок коду кожні 1000 мілісекунд
  // (виконується багаторазово)
  const intervalId = setInterval(() => {
    // блок коду: початок
    time += 1;
    task18s.textContent = time;
    // блок коду: кінець
  }, 1000);

  // Встановлюємо затримку виконання блоку коду
  // (виконується 1 раз)
  setTimeout(
    () => {
      // блок коду: початок
      task18i.value = "";
      task18s.textContent = "0";

      clearInterval(intervalId);
      // блок коду: кінець
    },
    5 * 1000 // час затримки у мілісекундах
  );
});

const h2 = document.getElementById("time");

setInterval(() => {
  const now = new Date();

  h2.textContent = `${now.toLocaleString()}`;
}, 1000);

// Завдання 3: Додавання нового елемента
// Створіть список і кнопку.
// При натисканні на кнопку додайте новий елемент до списку.

const task3b = document.getElementById("task-3-b");
const task3u = document.getElementById("task-3-u");

task3b.addEventListener("click", function () {
  // шукаємо всі теги li у тезі ul
  const liList = task3u.querySelectorAll("li");

  task3u.innerHTML += `<li>Item ${liList.length + 1}</li>`;

  // task3u.innerHTML += "<li>Item</li>";
  // task3u.innerHTML = task3u.innerHTML + "<li>Item</li>";

  const li = document.createElement("li");

  li.textContent = `Item ${liList.length + 1}`;
  li.style.color = "red";

  task3u.appendChild(li);
});

// Завдання 4: Видалення елемента
// Створіть список із трьох елементів і кнопку.
// При натисканні на кнопку видаліть останній елемент списку.

const task4b = document.getElementById("task-4-b");

task4b.addEventListener("click", function () {
  // шукаємо всі теги li у тезі ul
  const liList = task3u.querySelectorAll("li");

  console.log(task3u.innerHTML);
  console.log(liList[liList.length - 1]);

  // видаляємо останній елемент списку
  liList[liList.length - 1].remove();

  // шукаємо останній елемент списку
  // за допомогою псевдокласу :last-child
  const lastLi = task3u.querySelector("li:last-child");

  // шукаємо елемент списку li з класом red, ідентифікатором main
  // <li class="red" id="main">
  // task3u.querySelectorAll("li.red#main")

  console.log(lastLi);

  lastLi.remove();
});
