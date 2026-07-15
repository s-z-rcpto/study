// Виведення тексту кількома рядками

// Спосіб 1: Символ перенесення рядка (\n)
// (позначається 2 символами: символ екранування "\" + "n")
const text1 = "Рядок 1\nРядок 2\n   Рядок 3";

console.log(text1);
alert(text1);

console.log("line 1\nline2\n   line3");

// Спосіб 2: Зворотні лапки (``)
const text2 = `Рядок 1
Рядок 2
   Рядок 3`;

console.log(text2);
alert(text2);

console.log(`line 1
line 2
   line 3`);

// Math - глобальний вбудований об'єкт

const up = 4.6;
const down = 4.4;
const middle = 4.5;

// Math.round() - округлення до найближчого цілого
console.log(`Math.round(${up}) =`, Math.round(up)); // 5
console.log(`Math.round(${down}) =`, Math.round(down)); // 4
console.log(`Math.round(${middle}) =`, Math.round(middle)); // 5

console.log(`Math.round(${-up}) =`, Math.round(-up)); // -5
console.log(`Math.round(${-down}) =`, Math.round(-down)); // -4
console.log(`Math.round(${-middle}) =`, Math.round(-middle)); // -4
console.log("-----------------------");

// Math.ceil() - округлення до більшого цілого (вгору)
console.log(`Math.ceil(${up}) =`, Math.ceil(up)); // 5
console.log(`Math.ceil(${down}) =`, Math.ceil(down)); // 5
console.log(`Math.ceil(${middle}) =`, Math.ceil(middle)); // 5

console.log(`Math.ceil(${-up}) =`, Math.ceil(-up)); // -4
console.log(`Math.ceil(${-down}) =`, Math.ceil(-down)); // -4
console.log(`Math.ceil(${-middle}) =`, Math.ceil(-middle)); // -4
console.log("-----------------------");

// Math.floor() - округлення до меншого цілого (вниз)
console.log(`Math.floor(${up}) =`, Math.floor(up)); // 4
console.log(`Math.floor(${down}) =`, Math.floor(down)); // 4
console.log(`Math.floor(${middle}) =`, Math.floor(middle)); // 4

console.log(`Math.floor(${-up}) =`, Math.floor(-up)); // -5
console.log(`Math.floor(${-down}) =`, Math.floor(-down)); // -5
console.log(`Math.floor(${-middle}) =`, Math.floor(-middle)); // -5
console.log("-----------------------");

// Math.trunc() - видалення дробової частини
console.log(`Math.trunc(${up}) =`, Math.trunc(up)); // 4
console.log(`Math.trunc(${down}) =`, Math.trunc(down)); // 4
console.log(`Math.trunc(${middle}) =`, Math.trunc(middle)); // 4

console.log(`Math.trunc(${-up}) =`, Math.trunc(-up)); // -4
console.log(`Math.trunc(${-down}) =`, Math.trunc(-down)); // -4
console.log(`Math.trunc(${-middle}) =`, Math.trunc(-middle)); // -4
console.log("-----------------------");

// Math.max() - повертає максимальне значення з послідовності

console.log(
  `Math.max(-56, 0, 52, 236, 5.65) =`,
  Math.max(-56, 0, 52, 236, 5.65),
); // 236

// Math.min() - повертає мінімальне значення з послідовності

console.log(
  `Math.min(-56, 0, 52, 236, 5.65) =`,
  Math.min(-56, 0, 52, 236, 5.65),
); // -56

console.log("-----------------------");

// Math.abs() - значення числа по модулю

console.log(`Math.abs(53) = |53| =`, Math.abs(53)); // 53
console.log(`Math.abs(0) = |0| =`, Math.abs(0)); // 0
console.log(`Math.abs(-53) = |-53| =`, Math.abs(-53)); // 53

console.log("-----------------------");

// Math.sign() - повертає "знак" числа

console.log(`Math.sign(53) =`, Math.sign(53)); // 1
console.log(`Math.sign(0) =`, Math.sign(0)); // 0
console.log(`Math.sign(-53) =`, Math.sign(-53)); // -1

console.log("-----------------------");

// Обробка результатів prompt (даних користувача)

const answer = prompt("Введіть число від 1 до 20", 10);
// Пояснення підказки і прикладу виклику функції
//
// * prompt - назва функції, використовується для виклику (щоб застосувати:
// виконати обробку даних чи іншу дію)
// * ( - початок секції параметрів, обов'язковий елемент під час виклику функції
// * "Введіть число від 1 до 20" - параметр 1 (message?: string | undefined)
// задає підказку для поля введення
// * 10 - параметр 2 (_default?: string | undefined) - не обов'язковий параметр
// задає значення за замовчуванням, яке підставляється у поле введення
// * ) - кінець секції параметрів, обов'язковий елемент під час виклику функції
// : string | null - тип результату, який повертає функція

// Аналіз результату роботи функції prompt (значення змінної answer)
//
// * null - користувач натиснув кнопку Скасувати
// * "10" - користувач нічого не змінював і натиснув ОК, тип - string (рядок)
// * "" - користувач стер запропоноване значення і натиснув ОК, тип - string (рядок)
// * "1" або ... "20" - користувач дотримався інструкції,
// ввів число з очікуваного діапазона і натиснув ОК, тип - string (рядок)
// * "0" або ... "21"- користувач НЕ дотримався інструкції,
// але ввів число і натиснув ОК, тип - string (рядок)
// * "ф" або ... "="- користувач НЕ дотримався інструкції,
// ввів не число і натиснув ОК, тип - string (рядок)

// Якщо користувач натиснув Скасувати, то...
if (answer === null) {
  // ...дякуємо і прощаємося
  alert("Дякуємо за ваш час! До побачення!");
} /* ІНАКШЕ натиснуто ОК */ else if (answer === "") {
  alert("Неправильні дані, дотримуйтесь інструкції");
} else {
  // Намагаємося перетворити введену користувачем інформацію в число
  const userNumber = Number(answer);

  // Перевіряємо чи конвертоване значення є NaN
  if (Number.isNaN(userNumber)) {
    // Введені користувачем дані після перетворення на число
    // стали NaN, умова перевірки виконалася
    alert("Неправильні дані, введіть число");
  } /* ІНАКШЕ маємо число */ else {
    // Перевіряємо чи входить число у потрібний діапазон
    if (userNumber < 1 || userNumber > 20) {
      alert("Неправильні дані, введіть число від 1 до 20 включно");
    } /* ІНАКШЕ все ОК */ else {
      alert(`Дякуємо!
            
Всіх умов дотримано

Вітаємо!`);
    }
  }
}

// Number("20px") - намагається конвертувати весь рядок "20px" в число
// якщо будуть символи відмінні від цифр і роздільника - отримаємо NaN
// Рекомендовано для конвертування даних від користувача

// parseInt("20.5px")/parseFloat("20.5px") - читають рядок з початку
// і зупиняються, коли зустрічають не цифру/роздільник
// Рекомендовано при роботі зі значеннями властивостей CSS
