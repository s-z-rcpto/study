// 1. Вивести числа від 1 до 10
// Використовуючи for, виведіть числа від 1 до 10 у консолі.
for (let i = 1; i <= 10; i += 1) {
  console.log(`i = ${i}`);
}

// 2. Вивести парні числа від 2 до 20
// Використовуючи while, виведіть усі парні числа від 2 до 20.
let t2 = 2;

while (t2 <= 20) {
  if (t2 % 2 === 0) {
    console.log(`Парне число: ${t2}`);
  }

  t2 += 1;
}

// 3. Знайти суму чисел від 1 до n
// Користувач вводить число n.
// Використовуючи цикл for, знайдіть суму чисел від 1 до n та виведіть результат.
const userAnswer = prompt(
  "Введіть число для розрахунку суми від 1 до цього числа",
  0
);

if (userAnswer == null) {
  alert("Користувач скасував операцію" /*, userAnswer*/);
} else {
  const n = Number(userAnswer);

  if (Number.isNaN(n) || userAnswer === "") {
    alert(`
      Введене значення не число!
      Операцію скасовано!`);
  } else {
    let sum3 = 0;

    for (let i = 1; i <= n; i += 1) {
      sum3 += i;
    }

    console.log(`Сума чисел від 1 до ${n} = ${sum3}`);
  }
}

// 4. Порахувати кількість чисел, які діляться на 3
// Виведіть кількість чисел від 1 до 50, які діляться на 3 без залишку,
// використовуючи цикл for.

// 8. Калькулятор з умовними операторами
// Напишіть простий калькулятор, який приймає два числа та оператор (+, -, *, /).
// Використовуючи if-else або switch виконайте відповідну операцію та виведіть результат.

/*
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
*/

// 15. Об'єднання елементів масиву в рядок
// Дано масив ["Яблуко", "Банан", "Груша"].
// Використовуючи цикл, об’єднайте всі елементи масиву в один рядок, розділивши комами.
// Наприклад, "Яблуко, Банан, Груша".

const fruits = ["Яблуко", "Банан", "Груша"];

let result = "";

for (const element of fruits) {
  if (result === "") {
    result = result + element; // result = element;
  } else {
    result = result + `, ${element}`; // result = result + ", " + element;
  }
}

// result = Яблуко, Банан, Груша,
// , Яблуко, Банан, Груша
// Яблуко, Банан, Груша
console.log(`result = ${result}`);

result = "";

for (let i = 0; i < fruits.length; i += 1) {
  const element = fruits[i];

  if (i < fruits.length - 1) {
    result = result + `${element}, `;
  } else {
    result = result + `${element}`;
  }
}

console.log(`result = ${result}`);

console.log(`result = ${fruits.join(", ")}`);

// result = "Яблуко, Банан, Груша"
console.log(result.split(", "));
