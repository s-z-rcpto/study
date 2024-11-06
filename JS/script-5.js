for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

// console.log(`i = ${i}`); // помилка, і - не оголошена

// Спосіб 1
console.log("> Спосіб 1");
for (let i = 20; i <= 30; i += 2) {
  console.log(i);
}

// Спосіб 2
console.log("> Спосіб 2");
for (let i = 20; i <= 30; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Спосіб 3
console.log("> Спосіб 3");
for (let i = 20; i <= 30; i += 1) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(i);
}

console.log("-------");

for (let j = 30; j >= 20; j -= 2) {
  // j -= 2;
  console.log(j);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr1);
console.log(arr2);

// Нумерація елементів масиву починається з 0
console.log(`2-й елемент масиву: ${arr1[1]}`);
console.log(`Довжина масиву: ${arr1.length}`);
console.log(`Останній елемент масиву: ${arr1[arr1.length - 1]}`);

// Порядковий ном.  1        2        3
// Індекс           0        1        2
const fruits = ["Яблуко", "Груша", "Банан"];

console.log(fruits);
console.log(fruits[2]); // "Банан"

fruits[2] = "Абрикос";

console.log(fruits[2]); // "Абрикос"
console.log(fruits);

const arr3 = [
  564,
  true,
  "word",
  null,
  undefined,
  "",
  -932,
  { name: "Serhii" },
  [3, 4, 5],
  [],
];

console.log(arr3);

const emptyArr = [];
const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`Порожній масив: ${emptyArr}`, emptyArr);
console.log(`Масив у масиві: ${multiArr}`, multiArr);

// буде створено масив з 5 елементів
// зі значеннями undefined
const arr4 = new Array(5);
arr4[2] = "вівторок";

console.log(arr4);

for (let i = 0; i < 5; i += 1) {
  // зразок
}

// Завдання
// За допомогою циклу for для кожного елементу
// масиву arr3 вивести такий рядок:
//
for (let i = 0; i < arr3.length; i += 1) {
  console.log(`Елемент ${i} = ${arr3[i]}, тип - ${typeof arr3[i]}`);
  // console(`Елемент ${0} = ${arr3[0]}, тип - ${typeof arr3[0]}`);
  // console(`Елемент ${1} = ${arr3[1]}, тип - ${typeof arr3[1]}`);
  //
  // console(`Елемент ${9} = ${arr3[9]}, тип - ${typeof arr3[9]}`);
}

for (const element of arr3) {
  console.log("Елемент масиву arr3 =", element, ", тип -", typeof element);
}

/*
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    for (let k = 0; k < 5; k += 1) {
      console.log(`i = ${i}, j = ${j}, k = ${k}`);
    }
  }
}
*/
