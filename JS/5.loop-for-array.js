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
console.log(fruits);

fruits.push("Виноград", "Слива");
fruits.push("Апельсин");
fruits.unshift("Манго");

console.log(fruits);

const orange = fruits.pop(); // видалили Апельсин з масиву і зберегли у змінну

console.log(`orange = ${orange}`);

fruits.length; // властивість, тому без (). властивість зберігає якісь дані
fruits.pop(); // метод, тому з (). метод щось робить. тут - видалили Сливу з масиву

console.log(fruits);

console.log(`Елемент "${fruits.pop()}" видалено з масиву фруктів`, fruits);
console.log(`Елемент "${fruits.shift()}" видалено з масиву фруктів`, fruits);

const subfruits = fruits.slice(0, 1); // повертає новий масив,
// копіюючи до нього всі елементи від індексу start до end (не включаючи end)

console.log(`subfruits`, subfruits);
console.log(`fruits`, fruits);

// ['Яблуко', 'Груша', 'Абрикос']
console.log(fruits.slice(1)); // копіює елементи масиву з 2 і до кінця
console.log(fruits.slice(-2)); // копіює 2 останні елементи масиву
console.log(`fruits`, fruits);

// Вивести всі парні числа масиву
// Дано масив чисел [1, 3, 4, 7, 10, 12, 15, 18].
// Використовуючи цикл і умовний оператор, виведіть усі парні числа.
const originalArr = [1, 3, 4, 7, 10, 12, 15, 18];
const pairArr = []; // для парних елементів

for (const element of originalArr) {
  if (element % 2 === 0) {
    pairArr.push(element);
    // pairArr.unshift(element);
  }
}

console.log(`Парні елементи масиву: `, pairArr);

// (3) ['Яблуко', 'Груша', 'Абрикос']
// Додаємо "Буряк" на позицію з індексом 1
fruits.splice(1, 0, "Буряк");
console.log(fruits);

// (4) ['Яблуко', 'Буряк', 'Груша', 'Абрикос']
// Замінюємо 1 елемент на позиції з індексом 1 на "Вишня"
// 1. Видаляємо 1 елемент, починаючи з позиції з індексом 1
// 2. Додаємо "Вишня" на позицію з індексом 1
fruits.splice(1, 1, "Вишня");
console.log(fruits);

// (4) ['Яблуко', 'Вишня', 'Груша', 'Абрикос']
// Видаляємо 1 елемент, починаючи з позиції з індексом 2
fruits.splice(2, 1);
console.log(fruits);

// (3) ['Яблуко', 'Вишня', 'Абрикос']

const letters = ["a", "b", "c", "d", "e"];

// замінимо 'b', 'c', 'd' на 'б', 'в', 'г', 'ґ', 'д'
letters.splice(1, 3, "б", "в", "г", "ґ", "д");

console.log(letters);

// замінимо 'б', 'в', 'г', 'ґ', 'д' на '-'
const result = letters.splice(1, 5, "-");

console.log(letters); // (3) ['a', '-', 'e']
console.log(result); // (5) ['б', 'в', 'г', 'ґ', 'д']

// видаляємо всі елементи масиву
// з позиції з індексом 1 до кінця масиву
console.log(letters.splice(1)); // (2) ['-', 'e']
console.log(letters); // (1) ['a']

// Отримання елемента масиву за його індексом
console.log(fruits.at(0), fruits[0]); // Яблуко Яблуко
console.log(fruits.at(-1), fruits[-1], fruits[fruits.length - 1]); // Абрикос undefined Абрикос

const arr17 = [1, 2, 3, 4, 5, 6];

console.log(arr17.indexOf(4)); // 3
console.log(arr17.includes(4)); // true

console.log(fruits.indexOf("Алича")); // -1
console.log(fruits.includes("Алича")); // false

const pos4 = arr17.indexOf(4);

if (pos4 !== -1) {
  // перевіряємо чи число 4 є в масиві arr17
  arr17.splice(pos4, 1);

  console.log(arr17);
}

const letters2 = ["a", "b", "c", "d", "e"];

const posB = letters2.indexOf("b");

console.log(letters2.indexOf("b")); // 1
console.log(letters2.indexOf("q")); // -1

if (posB !== -1) {
  // перевіряємо чи літера "b" є в масиві letters2
  letters2.splice(posB, 1);

  console.log(letters2);
}

const numbers = [11, 22, 33, 44, 55];
console.log(`numbers: `, numbers);

const numMap = numbers.map((element) => element * 2);
console.log(`numMap: `, numMap);

// // map замінює код нижче
// const numMap = [];
// for (const element of numbers) {
//   numMap.push(element * 2)
// }

console.log(`numbers: `, numbers);

const users = [
  { age: 1, name: "Natalia" },
  { age: 2, name: "Myroslava" },
  { age: 3, name: "Sofia" },
  { age: 4, name: "Olga" },
  { age: 5, name: "Iryna" },
];

console.log(users.find((user) => user.name === "John"));

const userIds = users.map((user) => {
  console.log(user);

  return user.id;
});

console.log(userIds);

const numFilter = numbers.filter((n) => n % 2 === 0);

// // filter замінює код нижче
// const numFilter = [];
// for (const n of numbers) {
//   if (n % 2 === 0) {
//     numFilter.push(n);
//   }
// }

console.log("Парні елементи масиву", numFilter);

const numSum = numbers.reduce((sum, element) => sum + element, 0);

// // reduce замінює код нижче
// const numSum = 0;
// for (const element of numbers) {
//   numSum = numSum + element
// }

console.log(`Сума елементів масиву = ${numSum}`);

const numFind = numbers.find((n) => n % 2 === 0);

// // find замінює код нижче
// let numFind; // undefined
// for (const n of numbers) {
//   if (n % 23 === 0) {
//     numFind = n;
//     break;
//   }
// }

console.log("Перший парний елемент масиву", numFind);

const numSome = numbers.some((n) => n % 2 === 0);

console.log("Чи є у масиві хоча б 1 парний елемент? - ", numSome);

const numEvery = numbers.every((n) => n % 2 === 0);

console.log("Чи кожен елемент масиву парне число? - ", numEvery);

const numEvery2 = numbers.every((n) => n > 0);

console.log("Чи кожен елемент масиву більше 0? - ", numEvery2);

// створюємо новий масив і додаємо до нього
// якісь значення та елементи інших масивів
const unionArr = ["first", ...fruits, 12, ...result, true, letters[0]];

console.log(unionArr);

console.log(unionArr.concat(letters2));
console.log([...unionArr, ...letters2]);

const q1 = 14;
let q2 = q1;

console.log(`q1 = ${q1}`); // 14
console.log(`q2 = ${q2}`); // 14

q2 = -7;

console.log(`q1 = ${q1}`); // 14
console.log(`q2 = ${q2}`); // -7

const a1 = [24, "november", false];
const a2 = a1;

console.log(`a1 = [${a1}]`); // a1 = [24,november,false]
console.log(`a2 = [${a2}]`); // a2 = [24,november,false]

a2[1] = "листопад";

console.log(`a1 = [${a1}]`); // a1 = [24,листопад,false]
console.log(`a2 = [${a2}]`); // a2 = [24,листопад,false]

if (a1[1] !== a2[1]) {
  // ніколи не потрапите, бо a1[1] = a2[1]
} else {
  console.log(`a1[1] = ${a1[1]}`);
  console.log(`a2[1] = ${a2[1]}`);
}

if (a1 === a2) {
  console.log("Масиви однакові");
  // тому що це один і той же масив
} else {
  console.log("Масиви різні");
}

const a3 = [24, "листопад", true];

if (a1 === a3 || a2 === a3) {
  console.log("Масиви однакові");
} else {
  console.log("Масиви різні");
  console.log(`a1 = ${a1}`);
  console.log(`a2 = ${a2}`);
  console.log(`a3 = ${a3}`);
}

// Порівняти 2 масиви (спрощений варіант)
let isEqual = a1.length === a3.length;

if (isEqual) {
  for (let i = 0; i < a1.length; i += 1) {
    if (a1[i] !== a3[i]) {
      isEqual = false;
      break;
    }
  }
}

if (isEqual) {
  console.log("Масиви однакові");
} else {
  console.log("Масиви різні");
}

// Створення копії масиву
// const a4 = a1; // не правильно
const a4 = [...a1]; // правильно

// порівнюємо адреси
if (a1 === a4) {
  console.log("Масиви однакові");
} else {
  console.log("Масиви різні, тому що адреси різні");
  console.log(`a1 = ${a1}`);
  console.log(`a4 = ${a4}`);
}
