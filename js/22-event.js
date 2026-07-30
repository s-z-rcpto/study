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
console.dir(helloButton);

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

// Шукаємо за ідентифікатором кнопку,
// записуємо результат пошуку у змінну
// щоб не повторювати пошук кожного разу,
// коли захочемо модифікувати кнопку
// чи просто звернутися
const exampleButton = document.getElementById("example");

// Результат пошуку може бути null,
// якщо елемент ще не створено або вже видалено,
// або є помилка в ідентифікаторі,
// тому це варто перевіряти
//
// Спосіб 1
if (exampleButton !== null) {
  exampleButton.addEventListener("click", function () {
    // Обробник натискання 1
    // Шукаємо за селектором ВСІ div на сторінці
    // і записуємо результат у масивоподібний об'єкт
    // Якщо знайдено 0, то буде аналог []
    const divList = document.querySelectorAll("div");

    for (const div of divList) {
      // Для кожного знайденого div

      // встановлюємо колір тексту - червоний
      // (додаємо до тега div атрибут style з декларацією)
      div.style.color = "red";

      // додаємо до списку класів клас .box
      // (додає до атрибута class тегу div клас box)
      // (.add() - аналог метода .push() для масивів)
      div.classList.add("box");
    }
  });
} else {
  // TypeError: Cannot read properties of null (reading 'addEventListener')
}

// Спосіб 2
// ?. - опціональне звернення до властивості чи методу
// якщо об'єкт не існує (exampleButton === null),
// то він не має властивостей і методів,
// відповідно ?. береже від отримання помилки
// і звернення до них не відбувається
exampleButton?.addEventListener("click", function () {
  // Обробник натискання 2
  const divList = document.querySelectorAll("div");

  for (const div of divList) {
    // На додаток до обробника 1
    // додатково встановлюємо підкреслення
    // для тексту кожного знайденого div
    // (доповнюємо значення атрибута style тега div)
    div.style.textDecoration = "underline";
  }
});

// Section

// Шукаємо 1 раз, використовуємо у багатьох прослуховувачах
const article = document.querySelector("article");

// Задаємо (реєструємо) прослуховувачі подій натискання клавіші миші
// Коли користувач натисне ліву кнопку миші на відповідній кнопці
// браузер зреагує і почне виконання функції, яку передаємо
// у якості параметра (анонімна або стрілкова функція)
document.getElementById(`show-class`)?.addEventListener("click", function () {
  // Додаємо до переліку класів (атрибут class)
  // тега знайденого article
  // клас .border
  // (рекомендований підхід)
  article?.classList.add("border");
});

document.getElementById("show-style")?.addEventListener("click", function () {
  // Додаємо до атрибута style
  // знайденого тега article
  // декларацію для рамок
  // (не рекомендований підхід,
  // тому що порушує звичайну специфічність CSS
  // і ускладнює підтримку: додавання/видалення інших декларацій)
  // (допускається за певних умов)
  article.style.border = "4px dotted blueviolet";
  article.style.borderRadius = "16px"; // в CSS "border-radius"
});

document.getElementById("hide-class")?.addEventListener("click", () => {
  // Видаляємо з переліку класів (атрибут class)
  // тега знайденого article
  // клас .border
  // (рекомендований підхід)
  article?.classList.remove("border");
});

document.getElementById("hide-style")?.addEventListener("click", () => {
  // Додаємо до атрибута style
  // знайденого тега article
  // скасування рамок
  // (не рекомендований підхід,
  // тому що порушує звичайну специфічність CSS
  // і ускладнює підтримку: додавання/видалення інших декларацій)
  // (допускається за певних умов)
  article.style.border = "none";
  article.style.borderRadius = "0px"; // в CSS "border-radius"
});

document.getElementById("change-class")?.addEventListener("click", () => {
  // Метод .toggle() замінює .add() і .remove()
  // Якщо в елемента є вказаний клас, то .toggle() прибирає його,
  // якщо немає вказаного класу, то додає його
  // (перемикач класу)
  article?.classList.toggle("border");
});

document.getElementById("translate")?.addEventListener("click", () => {
  // Властивість .textContent задає текстовий вміст
  // контейнера (тега)
  // НЕ ПІДТРИМУЄ HTML
  article.textContent = "<strong>Слава JavaScript</strong>";
});

document.getElementById("set-table")?.addEventListener("click", () => {
  // Властивість .innerHTML задає HTML вміст
  // контейнера (тега)
  // НЕ рекомендований варіант,
  // краще використовувати об'єктний підхід
  article.innerHTML = `
  <table border="1">
  <tr>
  <td><strong>Viva</strong></td>
  <td><strong>JavaScript</strong></td>
  </tr>
  </table>
  `;
});

// Section 2

const searchButton = document.getElementById("search-b");

const SEARCH_RESULT_CLASS = "search-long-button-result";
const SEARCH_STATUS_CLASS = "search-long-button-active";

searchButton.addEventListener("click", () => {
  const nav = document.querySelector("section > nav");

  // Перевіряємо статус пошуку
  // за наявністю класу .search-long-button-active
  // у кнопки Довга кнопка
  // Якщо клас є, то пошук активний і треба вимкнути
  // інакше (класу немає) - виконати пошук
  const isActive = searchButton.classList.contains(SEARCH_STATUS_CLASS);

  if (isActive) {
    // Вимикаємо пошук
    // НЕ оптимальний спосіб, демонстраційна версія
    for (const button of nav.children) {
      button.classList.remove(SEARCH_RESULT_CLASS);
    }
  } else {
    // Починаємо пошук

    // Припускаємо, що перша кнопка
    // має найдовший підпис
    let longButton = nav.children[0];

    // По черзі отримуємо у змінну button
    // кожну кнопку з нащадків тега nav
    for (const button of nav.children) {
      if (button.textContent.length > longButton.textContent.length) {
        longButton = button;
      }
    }

    // Задаємо клас щоб "підсвітити" "найдовшу" кнопку
    longButton.classList.add(SEARCH_RESULT_CLASS);
  }

  // Перемикаємо ознаку статусу пошуку на протилежну
  searchButton.classList.toggle(SEARCH_STATUS_CLASS);
});
