const user = {
  // key: value,
  // ключ: значення
  id: 1, // поле, властивість
  name: "Serhii",
  shops: [34, 56, 11],
  isActive: true,

  // sayHi: function () {
  //   alert("Привіт");
  // }, // метод

  // this - це поточний об'єкт
  // працює у межах поточного об'єкта
  sayHi() {
    console.log(this.id);
    console.log(this.name);
    console.log(this);

    alert(`Привіт, це ${this.name}`);
  }, // метод (рекомендований варіант)

  shopsCount() {
    return this.shops.length;
  }, // метод
  created: {
    id: 0,
    name: "Admin",
  },
  "two words": "Hello world",
  twoWords: "Hello world",
};

// console.log(this);
console.log(user.name); // Serhii
console.log(user["name"]); // Serhii
console.log(user["two words"]); // Hello world

console.log(user.age); // undefined

// не працює, тому що немає поля age
if (user.age < 18) {
  alert("No-no-no");
}

user.age = 16; // додали в об'єкт user поле age

if (user.age < 18) {
  alert("No-no-no");
}

user.age = 24; // працює

console.log(user);
console.log(`${user}`);

// user = { id: 0, name: "admin" }; // помилка Assignment to constant variable.

// Приклад виклику метода об'єкта
user.sayHi();

// Приклад виклику метода об'єкта, який щось повертає
console.log(
  `Користувач ${user.name} має доступ до ${user.shopsCount()} магазинів`
);

const user1 = {
  id: 1,
  name: "1",
};

const user2 = user1;
const user3 = {
  id: 1,
  name: "1",
};

user2.name = "Q";

console.log(`user1`, user1);
console.log(`user2`, user2);

console.log(`user1 == user2 = ${user1 == user2}`); // true
console.log(`user1 == user3 = ${user1 == user3}`); // false

// user1 - адреса об'єкта user1
// user2 - адреса об'єкта user1
// user3 - адреса об'єкта user3

// Копіювання об'єкта
const user4 = { ...user1 };

console.log(`user4`, user4);
console.log(`user1 == user4 = ${user1 == user4}`); // false

user4.name = "Example";

console.log(`user1`, user1);
console.log(`user4`, user4);

const user5 = {};

// Копіювання об'єкта user1 в user5
Object.assign(user5, user1);

console.log(`user5`, user5);
console.log(`user1 == user5 = ${user1 == user5}`); // false

user5.name = "User5";

console.log(`user1`, user1);
console.log(`user5`, user5);

const startWeb = new Date("2024-09-19T08:30");
let prevStartWeb = startWeb; // копіюється адреса

// змінюємо і startWeb, і prevStartWeb
prevStartWeb.setDate(prevStartWeb.getDate() - 1);

console.log(prevStartWeb);
console.log(startWeb);

// копіюємо startWeb у змінну prevStartWeb
prevStartWeb = new Date(startWeb.getTime());

prevStartWeb.setDate(prevStartWeb.getDate() - 1);

console.log(prevStartWeb);
console.log(startWeb);

const car = {
  model: "BMW",
  number: "ВК6532ІК",
};

console.log(car);

// Видаляємо властивіть об'єкта
delete car.number;

console.log(car);

// Перевірка наявності властивості
// Напишіть програму, яка перевіряє,
// чи є властивість salary в об'єкті
// employee = { name: "Kate", position: "Manager" }

const employee = { name: "Kate", position: "Manager" };

console.log(employee.name); // "Kate"
console.log(employee.salary); // undefined
console.log("salary" in employee); // false

const employee2 = { name: "Kate", position: "Manager", salary: undefined };

console.log(employee2.name); // "Kate"
console.log(employee2.salary); // undefined
console.log("salary" in employee2); // true

const salary = "salary";
console.log(salary in employee2); // true

// Перебір властивостей об'єкта
// Створіть об'єкт fruit = { apple: 10, banana: 5, orange: 8 }.
// Виведіть у консоль кожну властивість і її значення за допомогою циклу for...in.
const fruit = { apple: 10, banana: 5, orange: 8 };

for (const key in fruit) {
  console.log(`${key}: ${fruit[key]}`); // apple: 10
}

for (const [key, value] of Object.entries(fruit)) {
  // key - змінна - ключ властивості об'єкта fruit, 0-й елемент масиву [key, value]
  // value - змінна - значення властивості об'єкта fruit, 1-й елемент масиву [key, value]
  console.log(key, value);
}

// Отримуємо всі ключі об'єкта fruit
for (const key of Object.keys(fruit)) {
  console.log(key);
}

// Отримуємо всі значення об'єкта fruit
for (const value of Object.values(fruit)) {
  console.log(value);
}

// Об'єднання об'єктів
// Є два об'єкти:
// user1 = { name: "John", age: 30 };
// user2 = { city: "London", job: "Developer" };
// Об'єднайте ці об'єкти в новий об'єкт user3 і виведіть результат.

const user_1 = { name: "John", age: 30 };
const user_2 = { city: "London", job: "Developer", age: 20 };

// Спосіб 1
let user_3 = {};

Object.assign(user_3, user_1);
Object.assign(user_3, user_2);

console.log(user_3); // {name: 'John', age: 20, city: 'London', job: 'Developer'}

// Спосіб 2
user_3 = { ...user_1, ...user_2 };

console.log(user_3); // {name: 'John', age: 20, city: 'London', job: 'Developer'}
