// Створення об'єкта

const obj1 = {}; // Порожній об'єкт
const obj2 = new Object(); // новий об'єкт(), створений за допомогою конструктора

// Створили об'єкт авто з такими характеристиками:
// бренд (марка), модель, рік і колір
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2009,
  color: "red",
};

const user = {
  // key: value,
  // ключ: значення,
  id: 1, // поле, властивіть
  name: "Serhii",
  shops: [34, 56, 11], // масив ідентифікаторів магазинів, до яких користувач має доступ
  isActive: true,

  created: {
    id: 0,
    name: "Admin",
  },

  barcode: null,

  "two words": "Hello world", // не рекомендується
  twoWords: "Hello world", // рекомендується

  // Метод об'єкта
  // Ключ: sayHi
  // Значення: анонімна функція
  sayHi: function () {
    alert("Привіт");
  },

  // void - спеціальне значення для позначення функцій,
  // які не повертають жодних значень

  // Рекомендований спосіб додавання методів до об'єкту
  // назва() { /* тіло методу (функції) */ }
  sayHello(/* тут можуть бути параметри */) {
    // this - це поточний об'єкт
    // завдяки this можемо отримати доступ до полів (властивостей) поточного об'єкта
    console.log(this.id); // 1
    console.log(this.age); // 24

    console.log(user.id); // не рекомендований спосіб, у межах об'єкту краще this
    // console.log(age); // змінна age не існує, щоб звернутися до поля потрібно this.

    alert(`Добрий день, ${this.name}`);
    console.log(this);
  },

  shopsLength() {
    // Повертаємо довжину масиву,
    // який зберігається у полі shops,
    // поточного об'єкта завдяки this
    return this.shops.length;
  },
};

console.log(this.id); // undefined, оскільки this працює в межах об'єкту

console.log(user);
console.log(user.name); // доступ до поля по ключу через крапку
console.log(user["name"]); // доступ до поля по ключу через квадратні дужки
console.log(user.twoWords);
console.log(user["two words"]);

// Зміна і додавання властивостей
// console.log(age); // Uncaught ReferenceError: age is not defined (змінна age не оголошена)

console.log(user.age); // undefined, поля age не існує в об'єкті

// не працює, тому що поля age не існує в об'єкті
if (user.age < 18) {
  alert("No-no-no");
}

user.age = 16; // додали в об'єкт user поле (властивість) age

if (user.age < 18) {
  alert("No-no-no");
}

user.age = 24; // змінили значення поля (властивості) age

console.log(user);

// Видалення властивостей
const book = { title: "JS Basics", author: "Advanced JS" };

console.log(book);

delete book.author; // видаляємо поле автор з об'єкта

console.log(book);

// Отримання значення поля по ключу
console.log(user.sayHi); // ƒ () { alert("Привіт");  }

// Виклик методу, () обов'язкові
user.sayHi();
user.sayHello();
console.log(
  `Користувач ${user.name} має доступ до ${user.shopsLength()} магазинів`
);

// Адресація об'єктів
let a = 3;
let b = "word";

console.log(a, b);

a = b;
b = false;

console.log(a, b);

// Для не примітивних типів даних
// у змінну записується не значення, а його адреса у пам'яті комп'ютера
const address1 = { id: 1, name: "Пирогова, 8", color: "green" };
const address2 = address1; // створюється 2-га адреса, але сам об'єкт лишається в 1 екземплярі (будівля та сама)

console.log("address1", address1); // будівля на Пирогова, 8
console.log("address2", address2); // та сама будівля на Пирогова, 8

// Перейменування вулиці
address2.name = "Валерія Опанасюка, 8";

// Зміна кольору фасаду
address2.color = "orange";

console.log("address1", address1); // адреса1 вказує на будівлю
console.log("address2", address2); // адреса2 вказує на ту саму будівлю

const address3 = { id: 1, name: "Валерія Опанасюка, 8", color: "orange" };

console.log("address1", address1);
console.log("address3", address3);

console.log(`address1 === address2 === ${address1 === address2}`); // true (порівнюється об'єкт (будівля) сам з собою)
console.log(`address2 === address3 === ${address2 === address3}`); // false (порівняння різних об'єктів (будівля у Рівному і будівля у Тернополі))

const arr1 = [1, 3];
const arr2 = arr1;
const arr3 = [1, 3];

console.log(arr1 === arr2); // true (один і той же масив)
console.log(arr1 === arr3); // false (різні масиви, хоч і однакові)

// Копіювання об'єкт
// Спосіб 1
const address4 = { ...address1 }; // копія об'єкта address1

address4.name = "Соборна, 1"; // address1 не зміниться

console.log("address1", address1);
console.log("address4", address4);

// Спосіб 2
const address5 = {};

Object.assign(address5, address1); // в об'єкт address5 копіюються поля і методи об'єкта address1

address5.name = "Київська, 1"; // address1 не зміниться

console.log("address1", address1);
console.log("address5", address5);

// Перебір властивостей
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// for (const key of Object.keys(user)) {
// for (const value of Object.values(user)) {
for (const [key, value] of Object.entries(user)) {
  // key - локальна змінна, буде містити ключ властивості (поля) об'єкта user
  // value - локальна змінна, буде містити значення властивості (поля) об'єкта user
  console.log(key, value);
}
