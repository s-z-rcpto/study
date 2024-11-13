// Math.random() --> (0 - 1) = 0.5321321313
// 0.5321321313 * 10 = 5.321321313
// Math.round(5.321321313) = 5
const computerNumber = Math.round(Math.random() * 10);

console.log(computerNumber); // 5

let userNumber;

do {
  const userAnswer = prompt("Напишіть число від 0 до 10");

  console.log(`Відповідь користувача: ${userAnswer}`);

  // кнопка Скасувати
  if (userAnswer == null) {
    break; // вихід з циклу
  }

  userNumber = Number(userAnswer); // конвертуємо "6" в 6

  console.log(`Число користувача: ${userNumber}`);

  if (Number.isNaN(userNumber)) {
    alert("Ви ввели не число");
    continue; // почати наступне коло циклу
  }

  if (userNumber > computerNumber) {
    alert("Забагато");
  } else if (userNumber < computerNumber) {
    alert("Замало");
  } // if (userNumber === computerNumber)
  else {
    alert("Вітаємо переможця!");
  }
} while (userNumber !== computerNumber);

console.log("The end!");

let i = 1;

// Спосіб 1
while (i < 20) {
  console.log(i);
  i += 2;
}

console.log(`Finish value (method 1): ${i}`); // 21

i = 0;

// Спосіб 2
while (i < 20) {
  console.log(`i = ${i}, ${i} % 2 = ${i % 2}`);

  if (i % 2 === 1) {
    // i % 2 === 1 - непарне число
    console.log(i);
  } else {
    // i % 2 === 0 || i % 2 !== 1 // - парне число
    console.log("Парне число");
  }

  i += 1; // i++
}

console.log(`Finish value (method 2): ${i}`); // 20

// && - and - і
// || - or - або
// ! - not - не

// Вивести у консоль значення від 50 до 100,
// які кратні 3 та 4 або число 77

const NUMBER_FROM_TEACHER = 77;

i = 50;

while (i <= 100) {
  // i = 50
  // 50 % 3 = 2 != 0 первевірка на кратність 4 не виконується
  // 50 != 77
  // ...
  // i = 60
  // 60 % 3 === 0 і 60 % 4 === 0 - ок
  // ...
  // i = 77
  // 77 % 3 !== 0 і 77 % 4 !== 0 - не ок
  // 77 === 77
  const isDiv3And4 = i % 3 === 0 && i % 4 === 0; // boolean
  const isMagicNumber = i === NUMBER_FROM_TEACHER; // boolean

  // ((i % 3 === 0 && i % 4 === 0) || i === 77)
  if (isDiv3And4 || isMagicNumber) {
    console.log(typeof isDiv3And4, typeof isMagicNumber);
    console.log(i);
  }

  i += 1;
}
