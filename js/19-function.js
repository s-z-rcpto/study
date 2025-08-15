showMessage(); // Викликати функції можна до їх оголошення,
// на відміну від змінних

console.log("Start");

// Оголошення функції
// 1. Ключове слово function
// 2. Назва функції showMessage, придумує програміст
// 3. Круглі дужки () для параметрів, якщо вони потрібні
// 4. Фігурні дужки {} для тіла функції
// У консоль нічого не виводиться, поки не буде виклику функції
function showMessage() {
  console.log("Тіло функції");
}

// Виклик функції
// назва функції + круглі дужки ()
showMessage();

// Не виклик функції, тому що немає ()
showMessage;
// У консоль нічого не виводиться

console.log(showMessage); // через відсутність () у консолі буде код функції
console.log(new Date().toLocaleDateString); // через відсутність () у консолі буде toLocaleDateString() { [native code] }

// Не можна використовувати змінну до оголошення з const або let
// console.log("Змінна a:", a); // ReferenceError: a is not defined
// Cannot access 'a' before initialization

let a = 0; // глобальна змінна, оголошена не в () і не в {}

console.log("Глобальна змінна a:", a); // працює, тому що змінна a оголошена вище

function setA() {
  // Поки у функції не буде оголошено локальну змінну a,
  // код нижче - працює
  // a = 33;
  // console.log("Глобальна змінна a:", a); // 33

  // Погана практика, оголошувати локальну змінну з ім'ям глобальної
  const a = 12; // локальна змінна і має вищий пріортитет над глобальною

  console.log("Локальна змінна a:", a);
}

setA(); // виклик функції

// Оголошення функції з параметрами і значенням, яке повертається
// x, y - параметри функції, назви придумує програміст
// x, y - виконують роль локальних змінних
// в x та y записуються дані, які хочемо передати у функцію під час виклику
function add(x, y) {
  console.log("x =", x);
  console.log("y =", y);

  return x + y; // повертає результат роботи функції
}

// Помилка через те, що x та y не оголошені,
// тому що вони локальні змінні функції add
// console.log("x =", x); // x is not defined
// console.log("y =", y); // y is not defined

const sum = add(3, 2); // присвоюємо результат роботи функції у змінну

console.log("sum =", add(8, 4)); // 12
console.log("sum =", sum); // 5

function addNoReturn(x, y) {
  // передали значення x та y у момент виклику функції
  console.log("x =", x);
  console.log("y =", y);

  const c = x + y;

  console.log("c =", c);

  // оскільки немає return,
  // то функція не повертає суму,
  // функція повертає undefined
}

const sumNoReturn = addNoReturn(3, 2);

console.log("sumNoReturn =", addNoReturn(3, 2)); // undefined
console.log("sumNoReturn =", sumNoReturn); // undefined

function calc(viraz) {
  const arr1 = ["+", "-", "*", "/"];
  let fin;

  for (const element of arr1) {
    if (viraz.includes(element)) {
      // element = "+" | "/" | "-"
      // "2+2" | 12/2 | "4-2"
      const number = viraz.split(element).map((strNumber) => Number(strNumber)); // перетворюємо рядки в числа за допомогою map
      // [2, 2] | [12, 2] | [4, 2]

      if (element === "+") {
        fin = number[0] + number[1];
      } else if (element === "-") {
        fin = number[0] - number[1];
      } else if (element === "*") {
        fin = number[0] * number;
      } else if (element === "/") {
        fin = number[0] / number[1];
      }

      // break; // завершуємо роботу циклу, якщо виконали потрібну операцію
      // тобто, якщо у нас у виразі "+", то щоб не перевіряти решту операцій

      return fin; // завершуємо роботу циклу і функції вцілому
      // повертаємо результат, який записаний у змінній fin
    }
  }

  return fin;
}

//                 4    *         6    -        2      = 22
console.log(calc("2+2") * calc("12/2") - calc("4-2"));

function milisecondsToDays(miliseconds) {
  const seconds = miliseconds / 1000; // секунди
  const minutes = seconds / 60; // хвилини
  const hours = minutes / 60; // години
  const days = hours / 24; // години

  return Math.ceil(days);
}

function daysUntilNextMonth() {
  const today = new Date(); // Поточна дата і час
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1); // 1-й день наступного місяця

  lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1); // останній день поточного місяця

  const diff = lastDayOfMonth - today; // різниця між датами у мілісекундах
  const diffDays = milisecondsToDays(diff); // різниця між датами у днях

  return diffDays; // повертаємо різницю між датами у днях як результат роботи функції
}

function daysUntilNextYear() {
  const today = new Date(); // Поточна дата і час
  const lastDayOfYear = new Date(today.getFullYear() + 1, 0, 1); // 1-й день наступного року

  lastDayOfYear.setDate(lastDayOfYear.getDate() - 1); // останній день поточного року

  const diff = lastDayOfYear - today; // різниця між датами у мілісекундах
  const diffDays = milisecondsToDays(diff); // різниця між датами у днях

  return diffDays; // повертаємо різницю між датами у днях як результат роботи функції
}

console.log("Днів до кінця місяця:", daysUntilNextMonth());
console.log("Днів до кінця року:", daysUntilNextYear());

// Значення параметрів за замовчуванням
function greet(name) {
  alert(`Привіт, ${name}`);
}

greet("Serhii"); // виклик функції, тому (),
// значення "Serhii" буде записано у параметр name функції greet

greet(); // виклик функції, тому (),
// оскільки немає даних, які передаємо у функцію, то
// параметр name функції greet буде мати значення undefined

function hello(name = "гість") {
  alert(`Привіт, ${name}`);
}

hello("Serhii"); // виклик функції, тому ()
hello(); // виклик функції, тому (),
// оскільки немає даних, які передаємо у функцію, то
// параметр name функції hello отримає значення "гість"
