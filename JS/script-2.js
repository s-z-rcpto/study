let hour = 13;

hour = 5;

// && - and - і
// || - or - або
// ! - not - не

const isMonday = true;

if (!isMonday) {
  //
}

// frontend // html, css, js
// backend // php, python, node.js
// fullstack // php, python, node.js + html, css, js

if (hour >= 8 && hour <= 12) {
  console.log("Доброго ранку");
} else if (hour > 12 && hour < 18) {
  console.log("Добрий день");
} else if (hour >= 18 && hour <= 22) {
  console.log("Добрий вечір");
} else if (hour > 22 && hour < 24) {
  console.log("На добраніч");
} else {
  console.log("Доброї ночі");
}

const day = 8;

switch (day) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;

  default:
    console.log("Такий день тижня не існує");
    break;
}

const num = 15;
const decimalNum = 15.34;

console.log(num, typeof num, typeof num.toFixed(2));
console.log(decimalNum.toFixed(1));
console.log("--------------------------");
// console.log("toExponential: ", decimalNum.toExponential());
// console.log("toLocaleString: ", decimalNum.toLocaleString());
// console.log("toPrecision: ", decimalNum.toPrecision());
// console.log("valueOf: ", decimalNum.valueOf());

const time = 2.33; // год

// Спосіб 1
const timeInMinutes = Number((time * 60).toFixed(0)); // 140 хв = 2 * 60 + 20 = 120 + 20

console.log(time * 60);
const minutes_1 = timeInMinutes % 60; // 20
const hours_1 = (timeInMinutes - (timeInMinutes % 60)) / 60; // 140 хв - 20 хв = 120 хв / 60 = 2 год

console.log(`Час в дорозі ${hours_1} год ${minutes_1} хв`);

// Спосіб 2
const hours_2 = Math.floor(time); // 2 год
const minutes_2 = Math.ceil((time - hours_2) * 60);

console.log(`Час в дорозі ${hours_2} год ${minutes_2} хв`);
