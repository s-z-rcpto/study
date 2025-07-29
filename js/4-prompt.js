// Діалогове вікно з повідомленням
// alert("Hello, world");

// alert("Повідомлення");

// Записуємо у змінну значення, яке ввів користувач або null
const answerWithDefault = prompt("Повідомлення", "Значення за замовчуванням");

console.log(
  "Відповідь користувача зі значенням за замовчуванням:",
  answerWithDefault,
  "тип змінної",
  typeof answerWithDefault
);

const answerNoDefault = prompt("Повідомлення");

console.log(
  "Відповідь користувача без значення за замовчуванням:",
  `>${answerNoDefault}<`,
  "тип змінної",
  typeof answerNoDefault
);

const day = new Date().getDate(); // Поточне число місяця
const userNumber = prompt("Введіть число від 1 до 100", day);
const someNumber = 14;

console.log("Число зразок:", day);
console.log("Число користувача:", userNumber);

console.log(userNumber + someNumber); // 2914, а не 43
// тому що, prompt повертає або рядок (string), або null

// Явне перетворення типів
const convertedUserNumber = Number(userNumber); // рядок у число

console.log(
  "Конвертоване значення:",
  convertedUserNumber,
  "тип конвертованої змінної:",
  typeof convertedUserNumber
);

console.log(
  `${convertedUserNumber} + ${someNumber} = ${convertedUserNumber + someNumber}`
);
