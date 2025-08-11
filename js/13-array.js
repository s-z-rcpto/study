const fruits = ["Яблуко", "Банан", "Груша"];

console.log(fruits); // ["Яблуко", "Банан", "Груша"]

fruits.length; // властивість, тому без (), зберігає дані - довжину масива (кількість елементів)
fruits.pop(); // метод, тому з (), метод виконує дію

console.log(fruits); // ["Яблуко", "Банан"]

fruits.push("Груша"); // Додаємо елемент "Груша" у кінець масиву fruits

console.log(fruits); // ["Яблуко", "Банан", "Груша"]

fruits.push("Виноград", "Слива"); // Додаємо 2 елементи у еінець масиву fruits
fruits.push("Апельсин");

console.log(fruits);

fruits.unshift("Манго");

console.log(fruits); // Додає елемент "Манго" на початок масиву fruits

const orange = fruits.pop(); // видаляє останній елемент з масиву fruits і повертає його
// ми записали повернений елемент у змінну orange

console.log(fruits);
console.log(orange);
console.log(`Елемент "${orange}" видалено з кошика. У кошику:`, fruits);

fruits.shift();

//                          0         1        2         3          4
console.log(fruits); // ['Яблуко', 'Банан', 'Груша', 'Виноград', 'Слива']

const subfruits = fruits.slice(1, 3); // створює новий масив з деяких елементів масиву fruits
// копіює у новий масив всі елементи від індексу 1 (start) до індексу 3 (end),
// але не включає елемент з індексом 3 (end)

console.log("subfruits", subfruits); // ['Банан', 'Груша']
console.log("fruits", fruits); // ['Яблуко', 'Банан', 'Груша', 'Виноград', 'Слива']

// fruits.slice(1) копіює елементи масиву fruits з 2-го (індекс = 1) до кінця масиву fruits
console.log("fruits.slice(1) =", fruits.slice(1)); // ['Банан', 'Груша', 'Виноград', 'Слива']

// fruits.slice(-2) копіює 2 останні елементи масиву fruits
// -2 змушує рухатися справа наліво, з кінця на початок
console.log("fruits.slice(-2) =", fruits.slice(-2)); // ['Виноград', 'Слива']

// 4. Вивести всі парні числа масиву
// Дано масив чисел [1, 3, 4, 7, 10, 12, 15, 18].
// Використовуючи цикл і умовний оператор, виведіть усі парні числа.

console.log("--------------------------------");

const arr4 = [1, 3, 4, 7, 10, 12, 15, 18];

// Варіант раніше
for (const element of arr4) {
  if (element % 2 === 0) {
    console.log(element);
  }
}

console.log("--------------------------------");

const parniEl = [];

for (const element of arr4) {
  if (element % 2 === 0) {
    parniEl.push(element);
  }
}

console.log(`Парні елементи масиву ${arr4}:`, parniEl);
