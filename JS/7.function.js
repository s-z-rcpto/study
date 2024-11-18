function showMessage() {
  alert("Всім привіт!");
}

showMessage();

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
showNewMessage("Привіт, світе!");

// назву newValue придумує програміст
// назву showNewMessage придумує програміст
function showNewMessage(newValue) {
  alert(newValue);
}

// Так робити не можна, буде помилка
// someFunc();

const someFunc = function () {
  alert("someFunc");
};

someFunc();

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
calculator();
