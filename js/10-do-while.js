let i = 1;

do {
  console.log(i); // 1 // 2

  i = i + 1; // i += 1; // 2 // 3
} while (i <= 10); // (2 <= 10) --> do ... (3 <= 10) --> do ... (11 <= 10) --> Вихід з циклу

console.log("Приклад роботи циклу do-while, якщо умова не виконується");

let j = 40;

// виконувати (повторювати)
do {
  // блок коду
  console.log(j);
  j += 1;
  // поки умова істинна,
  // але блок коду завжди виконається хоча б 1 раз
  // незалележно від умови
} while (j <= 10);

console.log("Кінець прикладу роботи циклу do-while, якщо умова не виконується");

// while - спочатку перевіряємо, потім робимо, повторюємо поки умова істинна
// do-while - спочатку робимо, потім перевіряємо, повторюємо поки умова істинна

// Math.random() --> від 0 до 1 [0, 1) --> 0.6544212542221
// 0.6544212542221 * 10  = 6.544212542221
// Math.round(10 * 0.65442125422211) = 7
const compNumber = Math.round(10 * Math.random());

console.log(`Число комп'ютера:`, compNumber);

let userNumber;

do {
  const userAnswer = prompt(
    "Введіть число від 0 до 10 або натисніть кнопку Скасувати щоб завершити гру"
  );

  console.log(`Відповідь користувача:`, userAnswer);

  // Якщо користувач натиснув Скасувати - виходимо з циклу
  // і завершуємо гру
  if (userAnswer === null) {
    alert("Гру скасовано");
    break; // примусовий вихід з циклу
  }

  userNumber = Number(userAnswer); // конвертуємо "7" в число 7

  console.log(`Число користувача:`, userNumber);

  if (Number.isNaN(userNumber)) {
    alert("Ви ввели не число, повторіть спробу");
    continue; // зупиняє роботу циклу на поточному кроці
    // і починає нове (наступне) коло циклу
    // з перевірки умови while (compNumber !== userNumber)
  }

  if (userNumber === compNumber) {
    alert("Вітаємо з перемогою! Удача на вашому боці!");
  } else if (userNumber > compNumber) {
    alert("Забагато");
  } else {
    // userNumber < compNumber
    alert("Замало");
  }
} while (compNumber !== userNumber);
