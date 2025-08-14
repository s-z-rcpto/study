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

// Не виклик функції
showMessage;
// У консоль нічого не виводиться

// Не можна використовувати змінну до оголошення з const або let
// console.log("Змінна a:", a); // ReferenceError: a is not defined

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
// в x та y записуються дані, які хочемо передати у функцію
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

console.log("sum =", add(3, 2)); // 5
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
      const number = viraz.split(element).map((strNumber) => Number(strNumber)); // перетворюємо рядки в числа за допомогою map

      if (element === "+") {
        fin = number[0] + number[1];
      } else if (element === "-") {
        fin = number[0] - number[1];
      } else if (element === "*") {
        fin = number[0] * number;
      } else if (element === "/") {
        fin = number[0] / number[1];
      }

      console.log(number, fin);

      return fin;
    }

    console.log(fin);

    return fin;
  }
}

console.log(calc("2+2") * calc("12/2") - calc("4-2"));
