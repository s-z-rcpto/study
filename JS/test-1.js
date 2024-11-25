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

// for (const element of fruits) {
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

// 16. Підрахунок сум і добутків елементів масиву з умовою
// Дано масив [1, 4, 6, 8, 3].
// Порахуйте окремо суму всіх парних чисел і добуток всіх непарних чисел у масиві.

const arr16 = [1, 4, 6, 8, 3];

let sum16 = 0;
let dobutok16 = 1;

for (const element of arr16) {
  // for (let i = 0; i < arr16.length; i += 1) {
  //   const element = arr16[i]
  if (element % 2 == 0) {
    // якшр елемент - це парне число
    // додаємо до змінної сума
    sum16 = sum16 + element; // sum16 += element
    // sum16 += arr16[i]
  } else {
    // інакше (непарне число)
    // множимо на добуток
    dobutok16 = dobutok16 * element; // dobutok16 *= element
  }
}

console.log(
  `Сума парних елементів = ${sum16}, добуток непарних елементів = ${dobutok16}`,
  "Сума парних елементів = ",
  sum16,
  ", ",
  "добуток непарних елементів = ",
  dobutok16
);

// 17. Вивести елементи масиву, крім певного числа
// Дано масив [1, 2, 3, 4, 5, 6].
// Використовуючи цикл і умовний оператор, виведіть усі елементи, крім числа 4.
const arr17 = [1, 2, 3, 4, 5, 6];

for (const element of arr17) {
  // // Спосіб 1-1
  // if (element === 4) {
  //   //
  // } else {
  //   // не дорівнює 4
  //   console.log(element);
  // }

  // // Спосіб 1-2
  // if (element === 4) {
  //   continue; // починає цикл з наступного кроку (знову переходимо на 170 рядок)
  // } else {
  //   // не дорівнює 4
  //   console.log(element);
  // }

  // // Спосіб 1-3
  // if (element === 4) {
  //   continue; // починає цикл з наступного кроку (знову переходимо на 170 рядок)
  // }

  // // не дорівнює 4
  // console.log(element);

  // Спосіб 2
  if (element !== 4) {
    // не дорівнює 4
    console.log(element);
  }
}

// Задати правильний пароль
// Давати користувачу 3 спроби для введення
// При правильному введенні вивести "Доступ надано"
// Після третьої невдалої спроби вивести "Доступ заблоковано"

const CORRECT_PASS = "qaz";
const MAX_ATTEMPT = 3;
let attempt = 1;

while (attempt <= MAX_ATTEMPT) {
  const userPass = prompt(`Введіть пароль. Спроба: ${attempt}/${MAX_ATTEMPT}`);

  attempt = attempt + 1;

  if (userPass === CORRECT_PASS) {
    alert("Доступ надано");
    break;
  }
}

if (attempt > MAX_ATTEMPT) {
  alert("Доступ заблоковано");
}

// 6. Функція перевірки наявності елемента в масиві
// Умова: Створіть функцію, яка приймає масив і елемент, а потім перевіряє, чи є цей елемент у масиві.
// Вхідні дані: [1, 2, 3, 4], 3
// Очікуваний результат: true
// Вхідні дані: [`a`, 2, `m`, -56], 45
// Очікуваний результат: false

function checkElement(masyv, element) {
  // Перевіряємо чи змінна є масивом
  if (Array.isArray(masyv)) {
    // return masyv.includes(element);
    // return masyv.indexOf(element) !== -1;
    // const existElement = masyv.find((el) => el === element);

    // return existElement != null;

    // return masyv.filter((el) => el === element).length > 0;

    for (const item of masyv) {
      if (item === element) {
        return true;
      }
    }
  }

  // Змінна не є масивом, тому повертаємо null
  return null;
}

console.log(
  `Масив ${[1, 2, 3, 4]} містить елемент ${3}? - ${checkElement(
    [1, 2, 3, 4],
    3
  )}`
);

const array2 = [`a`, 2, `m`, -56];
const element2 = 45;
const result2 = checkElement(array2, element2);

console.log(`Масив ${array2} містить елемент ${element2}? - ${result2}`);

function numToArray(number) {
  return String(number)
    .split("")
    .map((e) => Number(e));
  const result = [];
  for (const element of String(number)) {
    result.push(Number(element));
  }
  return result;
}

console.log(numToArray(1234));

function minArrayEl(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  return Math.min(...numbers);
}

console.log(minArrayEl([4, 6, 9, 2, 3, 1]));

function minArrayEl(masiv) {
  if (!Array.isArray(masiv)) {
    return null;
  }

  let minEl = masiv[0];

  for (const element of masiv) {
    if (element < minEl) {
      minEl = element;
    }
  }

  return minEl;
}
