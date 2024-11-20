// showNewMessage("Привіт, світе!");

function concatAndShowMessage() {
  alert("Всім привіт!");
}

// showMessage();

let a = 0;

function setA3() {
  a = 3;
}

console.log(a);

setA3();

console.log(a);
console.log(setA3);

function setA(newValue) {
  // newValue = -4
  a = newValue; // a = -4
  newValue = newValue * 2; // newValue = -4 * 2 = -8
  a = newValue; // a = -8
}

setA(-4);

console.log(a); // -8

// Зі змінними так не можна робити
// Перед використанням змінну потрібно оголосити
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
const b = 99;

// Функції можна викликати перед оголошенням
// showNewMessage("Привіт, світе!");

/*
if (condition) {
  // умова ^
}

while (condition) {
  // умова ^
}

switch (
  key // перша частина умови 'змінна = "<щось>"' - змінна
) {
  case "+": // друга частина умови 'змінна = "+"' - "+"
    break;
  case "-": // друга частина умови 'змінна = "-"' - "-"
    break;

  default:
    break;
}

for (let i = 0; i < array.length; i += 1) {
  // є умова      ^, але не тільки
  const element = array[i];
}

for (const element of array) {
  // умови немає
  // element - це змінна
}

function name(params) {
  // умови немає
}

"text".padEnd(10, ".");
// умови немає ^

[].find((x) => x > 10);
// є умова       ^
// x - це змінна
// => - це стрілка
*/

// назву newValue придумує програміст,
// можна розглядати як змінну
// назву showNewMessage придумує програміст
function showNewMessage(newValue, secondParam) {
  alert(newValue);
}

// Так робити не можна, буде помилка
// someFunc();

const someFunc = function () {
  alert("someFunc");
};

// someFunc();

// 8. Калькулятор з умовними операторами
// Напишіть простий калькулятор, який приймає два числа та оператор (+, -, *, /).
// Використовуючи if-else або switch виконайте відповідну операцію та виведіть результат.

function calculator() {
  const userAnswer1 = prompt("Введіть число число 1 для калькулятора", 0); // 2 -> "2"
  const userAnswer2 = prompt("Введіть число число 2 для калькулятора", 0); // 4 -> "4"
  const userOperation = prompt(
    "Введіть оператор (+, -, *, /) для калькулятора",
    0
  );

  const userNumber1 = Number(userAnswer1);
  const userNumber2 = Number(userAnswer2);

  let result;

  switch (userOperation) {
    case "+":
      result = userNumber1 + userNumber2;
      break;
    case "-":
      result = userNumber1 - userNumber2;
      break;
    case "*":
      result = userNumber1 * userNumber2;
      break;
    case "/":
      result = userNumber1 / userNumber2;
      break;

    default:
      alert("Введіть один з таких операторів: +, -, *, /");
      break;
  }

  alert(`${userNumber1} ${userOperation} ${userNumber2} = ${result}`);
}
// calculator();

const global = true; // глобальна змінна

// if (...) {
// for (...) {
// function name() {
// початок блоку коду
{
  const local = 0; // локальна змінна
  console.log(local);

  // console.log(`global = ${global}`); // маємо доступ до глобальної змінної

  // можна створювати локальну змінну з іменем глобальної,
  // але не бажано
  const global = "rewrite global";

  console.log(`global = ${global}`);
}
// кінець блоку коду

// за межами блоку коду немає доступу до локальної змінної
// console.log(local); // отримаємо помилку
// Cannot access 'local' before initialization
// local is not defined

// Можемо оголосити глобальну змінну з таким же ім'ям,
// як була локальна
const local = "---";
console.log(local);

// showMessage();

function concatAndShowMessage(from, text = "(набирає повідомлення)") {
  // параметри: from, text - локальні змінні,
  // у які копіюються передані значення
  // alert(sender + ": " + text);
  alert(`${from}: ${text}`);
}

const userName = "Анна";

// concatAndShowMessage("Анна", "Привіт!"); // Анна: Привіт! (*)
// concatAndShowMessage("Анна", "Як справи?"); // Анна: Як справи? (**)
// concatAndShowMessage(userName, "Привіт!"); // Анна: Привіт! (*)
// concatAndShowMessage(userName, "Як справи?"); // Анна: Як справи? (**)

const secondUser = "Богдан";

// concatAndShowMessage(secondUser, "Привіт, Анно!");
// concatAndShowMessage(secondUser, "У мене чудово. А як у тебе?");

// concatAndShowMessage(userName);

// console.log(userName, secondUser);

function sum(a, b) {
  return a - b;
  return a + b; // сюди функція ніколи не дійде
}

console.log(sum(19, 11));

function checkAge(age) {
  // Було
  // if (age >= 18) {
  //   return true;
  // } else {
  //   return confirm("У вас є дозвіл ваших батьків?");
  // }

  // Спростили запис
  if (age >= 18) {
    // якщо вік більше, або рівне 18
    // то виконання функції завершується
    // повертається позитивний дозвіл
    return true;
  }

  if (age >= 12) {
    // якщо вік більше, або рівне 12
    // то виконання функції завершується
    // повертається результат запиту функції confirm
    return confirm("У вас є дозвіл ваших батьків?");
  }

  // повертається заборона
  return false;
}

let age = prompt("Скільки вам років?", 18);

if (checkAge(age)) {
  alert("Доступ надано");
} else {
  alert("У доступі відмовлено");
}

// функція нічого не повертає
// виводить у консоль отримані дані
function log(data) {
  // data - це змінна, у яку запишеться текст "Info"

  console.log(`data = ${data}, typeof data = ${typeof data}`);

  if (data === undefined) {
    // if (data == null) {
    // data == null || data == undefined
    console.log("Немає даних для виведення у консоль");
    return; // далі функція не виконується
  }

  console.log(data);
}

// Виклики функції
log("Info"); // Info
log(); // Немає даних для виведення у консоль
log(null); // Немає даних для виведення у консоль

// 2 нічого
// null - справжнє нічого, взагалі нічого
// undefined - поки нічого

let day; // undefined

console.log(`day = ${day}, typeof day = ${typeof day}`);
