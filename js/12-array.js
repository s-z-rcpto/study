// Способи створення масивів
const arr1 = [1, "вересень", true, 4, 5];
const arr2 = new Array(1, "вересень", true, 4, 5);
const arr3 = Array.from("12345"); // ['1', '2', '3', '4', '5']
const arr4 = [...arr1]; // створення копії масиву arr1

console.log("arr1 =", arr1);
console.log("arr2 =", arr2);
console.log("arr3 =", arr3);
console.log("arr4 =", arr4);

// На практиці найчастіше будемо використовувати такі способи
const arr5 = ["ff", 53, false];
const arr6 = [...arr1];

// Копіювання масивів
const arr7 = [...arr3]; // створення копії
const arr8 = arr4; // НЕ створює копію

// Нумерація елементів масиву починається з 0
console.log("1-й елемент масиву arr1 має індекс 0 - ", arr1[0]);
console.log("2-й елемент масиву arr1 має індекс 1 - ", arr1[1]);
// Отримання елемента масиву відбувається за індексом:
// <ім'я масиву>[<індекс>], наприклад arr1[0]
console.log(
  "Останній елемент масиву arr1 має індекс (arr1.length - 1) - ",
  arr1[arr1.length - 1]
);

console.log("Довжина масиву arr1 - властивість length", arr1.length);

// Порядковий №    1         2        3       4
// Індекс          0         1        2       3
const fruits = ["Яблуко", "Груша", "Слива", "Ківі"];

console.log(fruits[0]); // Яблуко
console.log(fruits[1]); // Груша
console.log(fruits[2]); // Слива
console.log(fruits[3]); // Ківі

const numberArr = [5, -6, 8, 33.3, 0.23, 8]; // масив чисел
const stringArr = ["Mon", "Tue", "Wed"]; // масив рядків
const booleanArr = [true, true, false, true]; // масив логічних значень
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
  [3, 4, 5], // масив чисел
  [], // порожній масив
];

console.log("emptyArr =", emptyArr);
console.log("mixArr = ", mixArr);

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("multiArr =", multiArr);
console.log("multiArr[2] =", multiArr[2]); // [7, 8, 9]
console.log("multiArr[2][2] =", multiArr[2][2]); // 9

const n = 42;
const w = "word";
const t = true;

// Задавати масиви можна з використанням змінних
const a = [42, n, "word", w, true, t];
//          0  1       2  3     4  5

console.log("a =", a);

// Зміна (редагування, оновлення) елементів масиву
a[0] = a[0] * -1;
a[2] = "Fri";
a[a.length - 1] = false; // останній елемент

console.log("upd a =", a);

// Можемо редагувати елементи масиву (вміст масиву), оголошеного як const
// але не можемо присвоїти новий масив
// a = [56, "56"]; // не можна

console.log("--------------------------------");

for (let index = 0; index < mixArr.length; index += 1) {
  const element = mixArr[index];

  console.log(
    `${
      index + 1
    }-й елемент масиву mixArr має індекс "${index}", тип "${typeof element}" і значення :`,
    element
  );
}

console.log("--------------------------------");

// Якщо не потрібно знати індекс елемента
for (const element of mixArr) {
  console.log(`Елемент масиву mixArr:`, element);
}

console.log("--------------------------------");

// Вивести числа помножені на -1
for (const element of mixArr) {
  console.log(`Елемент масиву mixArr:`, element);

  if (typeof element === "number") {
    console.log(" > ", element * -1);
  }
}
