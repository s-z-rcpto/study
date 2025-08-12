const numbers = [11, 22, 33, 44, 55];

console.log(numbers);

// map() - створює новий масив з результатів функції
const doubled = numbers.map((element) => element * 2);
// (element) => element * 2 - стрілкова функція
// map замінює цикл і в змінну element по черзі записує кожне значення масиву numbers
// виконуємо якусь операцію зі значенням змінної element (множимо на 2)
// повертаємо результат тієї операції у новий масив

console.log(doubled); // [22, 44, 66, 88, 110]

// map() замінює код нижче
const doubledArr = [];

for (const element of numbers) {
  doubledArr.push(element * 2);
}

console.log(doubledArr);

// Практичний приклад
const users = [
  { id: 1, name: "Сергій" },
  { id: 2, name: "Kaтерина" },
  { id: 3, name: "Галина" },
  { id: 4, name: "Оксана" },
  { id: 5, name: "Аліна" },
  { id: 6, name: "Анна" },
  { id: 7, name: "Наталія" },
]; // масив об'єктів
// - список користувачів з 2 значеннями:
// ідентифікатор (id)
// ім'я (name)

// отримуємо масив ідентифікаторів (id) всіх користувачів
const userIds = users.map((user) => user.id);

console.log(userIds); // [1, 2, 3, 4, 5, 6, 7]

// filter() - фільтрує елементи
// 4. Вивести всі парні числа масиву
// Дано масив чисел [1, 3, 4, 7, 10, 12, 15, 18].
// Використовуючи цикл і умовний оператор, виведіть усі парні числа.

// Спосіб 1
const arr4 = [1, 3, 4, 7, 10, 12, 15, 18];
const evenNumbers = [];

for (const element of arr4) {
  if (element % 2 === 0) {
    evenNumbers.push(element);
  }
}

console.log(`Парні числа з масиву ${arr4}:`, evenNumbers);

// Спосіб 2
const evenNumbersFiltered = arr4.filter((element) => element % 2 === 0);
// (element) => element % 2 === 0 - стрілкова функція, яка перевіряє чи число парне
// якщо парне - записує його у новий масив відфільтрованих елементів
// filter замінює цикл і в змінну element по черзі записує кожне значення масиву arr4

console.log(`Парні числа з масиву ${arr4}:`, evenNumbersFiltered);

// reduce() - “згортає” масив до одного значення
// 1. Знайти суму елементів масиву
// Дано масив чисел [1, 2, 3, 4, 5].
// Обчисліть суму всіх елементів масиву та виведіть результат.

// Спосіб 1
const arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (const element of arr1) {
  sum1 += element;
}

console.log(`Сума елементів масиву ${arr1}:`, sum1);

// Спосіб 2
const sum1Reduce = arr1.reduce((sum, element) => (sum += element), 0);

console.log(`Сума елементів масиву ${arr1}:`, sum1Reduce);

// find() - знаходить перший елемент за умовою
// 5~ Дано масив чисел [5, -3, 10, -7, 8, -2, 1].
// Вивести перший від'ємний елемент масиву.

const arr5 = [5, -3, 10, -7, 8, -2, 1];

// Спосіб 1
let negativeEl; // без ініціалізації
// тому що не знаю чи є від'ємні елементи у масиві

for (const element of arr5) {
  if (element < 0) {
    negativeEl = element;
    break; // зупииняю наступні перевірки і виходжу з циклу
  }
}

console.log(`Перший від'ємний елемент масиву ${arr5}:`, negativeEl);

// Спосіб 2
const negativeElFind = arr5.find((element) => element < 0);
// (element) => element < 0 - стрілкова функція, яка перевіряє чи число від'ємне
// якщо від'ємне - записує його у змінну і завершує роботу
// find замінює цикл і в змінну element по черзі записує кожне значення масиву arr5

console.log(`Перший від'ємний елемент масиву ${arr5}:`, negativeElFind);

const zeroElFind = arr5.find((element) => element === 0);

console.log(`Перший нуль елемент масиву ${arr5}:`, zeroElFind);
// якщо у масиві arr5 немає значень, які відповідають критерію, то повернеться undefined
