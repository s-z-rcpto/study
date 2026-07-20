const arr1 = [1, "липень", true, null, undefined];
const arr4 = [...arr1]; // створення копії масиву arr1

console.log("Масив arr1:", arr1);

// Нумерація елементів масиву починається з 0
console.log("1-й елемент масиву arr1 має індекс 0:", arr1[0]);
console.log("2-й елемент масиву arr1 має індекс 1:", arr1[1]);

// Отримання елемента масиву (значення) відбувається за індексом:
// <змінна (ім'я масиву)>[<індекс>], наприклад arr1[0]

console.log(
  "Останній елемент масиву arr1 має індекс arr1.length - 1:",
  arr1[arr1.length - 1],
);

// Довжина (кількість елементів) масиву зберігається у властивості .length
console.log("Довжина (кількість елементів) масиву arr1:", arr1.length);

// Порядковий №     1        2        3       4
// Індекс           0        1        2       3
const fruits = ["Яблуко", "Груша", "Слива", "Ківі"];

console.log(fruits[0]); // Яблуко
console.log(fruits[1]); // Груша
console.log(fruits[2]); // Слива
console.log(fruits[3]); // Ківі
console.log(fruits[4]); // undefined - тому що елемента з індексом 4 в масиві немає

const numberArr = [5, -6, 0, 33.3, -0.24, 8]; // масив чисел
const stringArr = ["Mon", "Tue", "Wed", "Thu", "Fri"]; // масив рядків
const booleanArr = [true, false, false]; // масив логічних значень
const emptyArr = []; // порожній масив

const mixArr = [
  564,
  true,
  "word",
  null,
  undefined,
  "", // порожній рядок
  -932,
  { name: "Serhii" }, // об'єкт
  [3, 4, 5],
  [], // порожній масив
];

console.log("emptyArr:", emptyArr);
console.log("mixArr:", mixArr);

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("multiArr:", multiArr);
console.log("multiArr[2]:", multiArr[2]); // [7, 8, 9]
console.log("multiArr[2][2]:", multiArr[2][2]); // 9

console.log("------------------------------------");

const n = 42;
const s = "word";
const t = true;

// Задавати масиви можна з використанням змінних
const a = [12, n, "Hello", s, t, false];

console.log("a:", a);

// Зміна (редагування, оновлення) елементів масиву
// "a[0]" - отримання значення елемента масиву з індексом 0 (1-й елемент масиву)
// "a[0] =" - запис НОВОГО значення в елемент масиву з індексом 0
a[0] = a[0] * -1;
a[2] = "Mon";
a[a.length - 1] = true; // останній елемент масиву a

console.log("Оновлений масив a:", a);

// Можна редагувати, додавати, видаляти елементи масиву,
// який оголошений як const,
// але НЕ можна присвоювати нове значення
// a = 45; // TypeError: Assignment to constant variable
// a = [4, 5]; // TypeError: Assignment to constant variable
// a = null; // TypeError: Assignment to constant variable

console.log("------------------------------------");

// Цикли для роботи з масивами
for (let index = 0; index < mixArr.length; index++) {
  const element = mixArr[index];

  console.log(
    `${index + 1}-й елемент масиву mixArr має індекс "${index}", тип "${typeof element}" і значення:`,
    element,
  );
}

// Якщо НЕ потрібно знати ІНДЕКС елемента,
// то варто використовувати цикл for..of
//
// Цикл for..of по черзі перебирає ВСІ елементи масиву fruits
// і записує їх (по черзі) у локальну змінну циклу element
for (const element of fruits) {
  console.log("Змінна циклу element має значення:", element);
}

console.log("----------------------------------------");

// Приклад задачі: вивести ЧИСЛА масиву mixArr помножені на -1
// 1. Перебрати всі елементи масиву mixArr [+]
// 2. Перевірити тип поточного елемента: [+]
// 2.1. Якщо це число, то помножити на -1 і вивести в консоль [+]
// 2.2. Інакше - нічого не робити [+]
for (const element of mixArr) {
  if (typeof element === "number") {
    console.log(">", -1 * element);
  }
}
