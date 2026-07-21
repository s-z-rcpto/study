const arr = [3, 1, 4, 10, 5, 9, 0, -2, 2, 6, 5, 3, 5, 22];

console.log(arr); // [3, 1, 4, 10, 5, 9, 0, -2, 2, 6, 5, 3, 5, 22]

arr.sort(); // НЕ повертає новий масив, сортує поточний
// оскільки немає налаштувань, то сортування відбувається
// з неявним перетворенням у рядки, тому [-2, 0, 1, 10, 2, 22...]

console.log(arr); // [-2, 0, 1, 10, 2, 22, 3, 3, 4, 5, 5, 5, 6, 9]

// Числове сортування за зростанням
arr.sort((a, b) => a - b); // [-2, 0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9, 10, 22]

console.log(arr); // [-2, 0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9, 10, 22]

// Числа сортування за спаданням
arr.sort((a, b) => b - a);

console.log(arr); // [22, 10, 9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 0, -2]

// Сортування об'єктів
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

// Сортування за віком (звертаємося до властивості .age)
users.sort((a, b) => a.age - b.age);
//          1  2  =>     1 - 2 -> за зростанням
//          1  2  =>     2 - 1 -> за спаданням

console.log(users);

users.sort((a, b) => a.name - b.name); // НЕ рекомендовано для сортування рядків

console.log(users);

users.sort((a, b) => a.name.localeCompare(b.name)); // Рекомендований варіант

console.log(users);

const students = [
  { id: 1, name: "Сергій" },
  { id: 2, name: "Катерина" },
  { id: 3, name: "Тетяна" },
  { id: 4, name: "Оксана" },
  { id: 5, name: "Віктор" },
  { id: 6, name: "Вадим" },
  { id: 7, name: "Їван" },
  { id: 7, name: "Іванка" },
  { id: 8, name: "Євген" },
  { id: 9, name: "Ґнат" },
];

const sort1 = [...students].sort((a, b) => a.name - b.name); // ? Не працює
const sort2 = [...students].sort((a, b) => a.name.localeCompare(b.name)); // Рекомендовано

console.log("sort1:", sort1);
console.log("sort2:", sort2);
