let x = 5; // = - оператор присвоєння
let message;
const PI = 3.14;
var old = "text"; // Старий спосіб (не рекомендується)

console.log(x);
console.log(message);
console.log(PI);
console.log(old);

message = "Hello, world!";

console.log(message);

x = 15;

console.log(x);

console.log("x =", x); // "x =" - підказка про те що виводиться у консоль
console.log("message =", message);

// PI = 4; // Змінювати значення змінних, які оголошені як const заборонено

console.log(PI);

let amount = 5; // оголосили змінну amount і присвоїли їй значення 5
let price; // оголосили змінну price без значення, значення присвоїмо пізніше
// змінні з let можна змінювати
// змінні з const не можна змінювати після оголошення
// const gold; // не можна оголошувати const змінні без присвоєння значення
const gold = "#ffd700"; // з const обов'язково потрібно присвоїти значення

const articleTitle = 0; // camelCase, слова розділяються великою літерою на початку
const article_name = "name";

// Нижче 3 різні змінні (через регіст літер)
const apple = "apple";
const APPLE = 0.003;
const Apple = false;

console.log("apple =", apple);
console.log("APPLE =", APPLE);
console.log("Apple =", Apple);

// Змінну потрубно оголосити перед її використанням
// console.log("y =", y);

const y = 523;

console.log("y =", y);

price = 53; // грн/кг

// Сума за 5 кг яблук
const cost = amount * price;

console.log("cost =", cost);
console.log("amount * price =", amount * price);

// Правильні імена змінних
const username = "Дем'ян";
const user123 = "Serhii_123";
const $price = 100;
const _private_word = "secret";

// Неправильні імена змінних
// const user-name = 'Sergii';
// const 123user = 'Serhii_123';
// const var = 23;

const COLOR_RED = "#ff0000";
const COLOR_GREEN = "#00ff00";
const COLOR_BLUE = "#0000ff";

// Стала Планка
const PLANK = 6.62607015 * 10 ** -34; // рекомендовано
const plank = 6.62607015 * 10 ** -34; // не рекомендовано

// Типи даних у JS

// Числа Number
const age = 35; // ціле число
const smallPrice = 0.23; // число з плаваючою комою
const num = 0;

// Рядки String
const name = "Serhii"; // 'Serhii' Prettier заміняє одинарні лапки на подвійні
const lastName = "Zubriyuk";
const middleName = `Anatoliyovich`;
const petName = ""; // порожній рядок

console.log(`Привіт, ${name}`);
console.log(`Привіт, ${name} ${middleName} ${lastName}`);
console.log(`Hello, $ {name}`); // не буде підстановки значення name

// 5 кг яблук по 53 грн коштує 265 ₴
console.log(`${amount} кг яблук по ${price} грн коштує ${cost} ₴`);

// Логічний (булевий) Boolean
const isCorrect = true; // істина/правда/так
const hasChild = false; // хиба/неправда/ні

// Нічого Null
const border = null; // border: none;

// Не задано (Невизначено) Undefined
let catsCount; // undefined, тому що немає "="

console.log(`Кількість котів: ${catsCount}`);

// Перевірка типів даних
let t;
console.log("t =", t, typeof t); // undefined

t = "Test";
console.log("t =", t, typeof t); // Test

t = 23;
console.log("t =", t, typeof t); // 23

t = false;
console.log("t =", t, typeof t); // false

t = null;
console.log("t =", t, typeof t); // null
