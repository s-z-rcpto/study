// alert("Привіт, світ!"); // модальне вікно

/*
let apple;
let Apple;
let APple;
*/

/* let x = 5; */

// let gold = "#daa520"; // в CSS аналог --gold: #daa520";

let amount = 5; // яблука
let price = 15.5; // ціна яблука

const gold = "#daa520"; // колір яблук

// let amount = 4;
amount = 4; // 1 яблуком когось пригостили

// gold = "red"; // неправильно, бо змінні оголошені const не можна змінювати

const PI = 3.14; // зобов'язані вказати значення одразу при оголошенні

let cost; // нова змінна cost не має значення й отримає значення пізніше

cost = amount * price;

console.error("Зразок помилки");
console.log(amount, price, cost);
console.log("Кількість яблук:", amount);

document.getElementById("example").style.color = "red";

amount = 3;
amount = 2;

console.log("Кількість яблук:", amount);

// amount = "apple";
const product = "apple";

// console.log("Кількість яблук:", amount);
console.log("Продукт:", product);

cost = amount * price;

console.log("Вартість яблук:", cost, "грн");

// Правильні імена змінних
let username = "Serhii";
let user123 = "123";
let $price = 100;
let _private = "secret";
let all_$in_1 = 0;

// Неправильні імена змінних
// let user-name = "Serhii";
// let 123user = '123';
// let const = 'const';
// let var = 'const';
// let for = 'const';

// Регістр літер важливий
// Всі змінні нижче - це 3 різні змінні
let apple = "всі маленькі";
let Apple = "перша літера велика";
let APple = "2 перші літери великі";

console.log(apple);
console.log(Apple);
console.log(APple);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

console.log(Math.PI);

// Стала Планка
const PLANK = 6.62607015 * 10 ** -34; // рекомендовано
const plank = 6.62607015 * 10 ** -34; // не рекомендовано

console.log("amount is", typeof amount);
console.log("apple is", typeof apple);
console.log("gold is", typeof gold);
console.log("orange is", typeof orange);
console.log("null is", typeof null);

const exchangeRate = 41.39;

amount = prompt("Введіть суму в доларах, яку хочете купити", 0); //  -> amount = "123";

console.log("amount = ", amount, "it is", typeof amount);

const numAmount = Number(amount); // перетворює текст "123" у число 123,
// яке ми зможемо помножити на курс

console.log("numAmount = ", numAmount, "it is", typeof numAmount);

console.log("Сума до сплати", numAmount * exchangeRate, "грн");
// alert("Сума до сплати " + numAmount * exchangeRate + " грн");

const taxAmount = (numAmount * exchangeRate * 2.5) / 100;

console.log("Податок до сплати", taxAmount, "грн");
// alert("Податок до сплати " + taxAmount + " грн");

/*
alert(
  "Сума до сплати " +
    numAmount * exchangeRate +
    " грн" +
    "\n" +
    "Податок до сплати " +
    taxAmount +
    " грн"
);
*/

console.log("30 / 0 = ", 30 / 0); // --> Infinity
console.log(
  // "Number('qwerty') = ",
  'Number("qwerty") = ',
  Number("qwerty"), // приклад перетворення текстового типу на число
  //у результаті якого отримуємо NaN
  ` it is`,
  typeof Number("qwerty")
); // --> NaN

const str1 = '"Це рядок"'; // подвійні лапки в середині через Prettier,
// який замінює за замовчуванням одинарні лапки на подвійні
const str2 = "Це також рядок";
const str3 = `І це рядок`; // зворотні лапки, клавіша під клавішею Esc

console.log(typeof str1, typeof str2, typeof str3);

// alert(
//   "Сума до сплати " +
//     numAmount * exchangeRate +
//     " грн" +
//     "\n" +
//     "Податок до сплати " +
//     taxAmount +
//     " грн"
// );

alert(
  `Сума до сплати ${
    numAmount * exchangeRate
  } грн\nПодаток до сплати ${taxAmount} грн`
);

// console.log(param1); // Помилка, тому що змінна ще не оголошена
const param1 = 15;

const myName = "Serhii";

// Раніше було б: 'Вітаю, ' + myName + '!';
const myNameStr = `Вітаю, ${myName}!`;

console.log(myNameStr);

console.log(true, false); // булеві значення
console.log(`15 > 8 is ${15 > 8}, it is ${typeof (15 > 8)}`);
console.log(`8 > 24 is ${8 > 24}, it is ${typeof (8 > 24)}`);

let dayExample;

console.log(typeof day);

console.log(5 != 4); // true (5 не дорівнює 4)
console.log(5 == "5"); // true (нестроге порівняння)
console.log(5 === "5"); // false (строге порівняння)
console.log(5 !== "5"); // true (строге порівняння)

let x = 5;
console.log(`x = ${x}`);

x += 3; // --> x = x + 3;
console.log(`x += 3 = ${x}`);

x -= 2; // --> x = x - 2;
console.log(`x -= 2 = ${x}`);

x *= 4; // --> x = x * 4;
console.log(`x *= 4 = ${x}`);

x /= 2; // --> x = x / 2;
console.log(`x /= 2 = ${x}`);

/*
x++; // x += 1  // x = x + 1;
console.log(`x++ = ${x}`);

x--; // x += 1  // x = x - 1;
console.log(`x-- = ${x}`);

++x; // x = x + 1;
console.log(`++x = ${x}`);

--x; // x = x - 1;
console.log(`--x = ${x}`);
*/
