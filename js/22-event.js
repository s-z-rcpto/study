function showMessage(message) {
  alert(message);
}

function elementInfo(element) {
  console.log(element); // HTML-представлення кнопки
  console.dir(element); // об'єктне представлення кнопки
}

// Рекомендований спосіб обробки подій

// 1. Шукаємо у HTML-файлі елемент (тег) або групу елементів,
// для якого очікуємо подію
// Пошук може відбуватися за ідентифікатором (атрибут "id")
// або селектором як в CSS (тег, клас, ідентифікатор і їх поєднання)
//
// 2. Якщо не знаходимо, то перевіряємо правильність критерія пошуку
// або нічого не робимо, буде null
//
// 3. Якщо знайшли елемент або декілька, то записуємо їх у змінну,
// яку надалі будемо використовувати для "швидкого" доступу
//
// 4. Додаємо прослуховувача подій до знайдених елементів і
// функцію, яка буде викликатися, коли подія настане

// Для пошуку використовуємо глобальний об'єкт document
// document - це HTML-сторінка перетворена браузером у об'єкт
//
// Методи пошуку:
// .getElementById()
// .querySelect()
// .querySelectAll()

console.log(document); // HTML-версія
console.dir(document); // Object-версія

// Крок 1, 3. Пошук елемента
const helloButton = document.getElementById("bHello");

console.log("helloButton", helloButton);
console.dir("helloButton", helloButton);

// Крок 2. Перевірка "чи знайшли"
if (helloButton !== null) {
  // Крок 4. Додавання прослуховувача addEventListener
  helloButton.addEventListener("click", function () {
    // Якщо відбудеться натискання на кнопку ("click"),
    // то браузер викличе цю функцію,
    // яку ми передали як 2-й параметр для прослуховувача
    // і з'явиться повідомлення "Hello!"
    alert("Hello!");
  });
}

console.log("--------------------------------------");

// .querySelector() - шукає на сторінці елементи за вказаним CSS селектором
// повертає перший елемент, який відповідає умовам
console.log("div", document.querySelector("div")); // 1
console.log("#d2", document.querySelector("#d2")); // 2
console.log(".c3", document.querySelector(".c3")); // 3
console.log("div div", document.querySelector("div div")); // 5
console.log("p", document.querySelector("p")); // null

console.log("--------------------------------------");

// .querySelectoAll() - шукає на сторінці ВСІ елементи за вказаним CSS селектором
// повертає список (масив) елементів
console.log("div", document.querySelectorAll("div")); // [1, 2, 3, 4, 5]
console.log("#d2", document.querySelectorAll("#d2")); // [2]
console.log(".c3", document.querySelectorAll(".c3")); // [3]
console.log("div div", document.querySelectorAll("div div")); // [5]
console.log("p", document.querySelectorAll("p")); // []

console.log("--------------------------------------");

const exampleButton = document.getElementById("example");

if (exampleButton !== null) {
  exampleButton.addEventListener("click", function () {
    const divList = document.querySelectorAll("div");

    for (const div of divList) {
      div.style.color = "red";

      div.classList.add("box");
    }
  });
}
