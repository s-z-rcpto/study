const rand1 = Math.random(); // значення більше або рівне 0, але менше 1

console.log(rand1);

let i = 1;

if (i < 5) {
  // початок блоку
  console.log(`i = ${i}`);

  i += 1;

  const item = 10;

  console.log(`item = ${item}`);
} // кінець блоку

// console.log(item); // помилка, тому що item оголошена у блоці вище
console.log("Finish if");

while (i < 5) {
  // коли i стає = 5 - переходимо на 22 рядок
  console.log(`i = ${i}`);

  i += 1;
}

console.log("Finish while");

// Math.random() --> (0 - 1) = 0.5321321313
// 0.5321321313 * 10 = 5.321321313
// Math.round(5.321321313) = 5
const computerNumber = Math.round(Math.random() * 10);

console.log(computerNumber); // 5

let userNumber = -1; // тому не входить в діапазон від 0 до 10

while (computerNumber !== userNumber) {
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
}

console.log("The end!");
