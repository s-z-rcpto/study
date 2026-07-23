// Створення об'єкта
const obj1 = {}; // Порожній об'єкт
const obj2 = new Object(); // Новий об'єкт(), створений за допомогою конструктора

console.log("obj1 =", obj1, " тип:", typeof obj1);
console.log("obj2 =", obj2, " тип:", typeof obj2);

// Створити об'єкт Авто з такими характеристиками:
// бренд (марка), модель, рік і колір
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2009,
  color: "red",
};

const user = {
  // key: value,
  // ключ (назва): значення,
  id: 1,
  name: "Serhii",
  // пара key: value, яка зберігає інформацію
  // і не виконує ніяких дій називається властивість, інколи поле

  shops: [34, 56, 111], // масив ідентифікаторів магазинів,
  // до яких має доступ користувач

  isActive: true, // ознака активності користувача

  created: {
    id: 0,
    name: "Admin",
  }, // інформація про користувача, який створив поточного користувача

  barcode: null, // штрихкод для перепустки

  "secret words": "Hello, world", // НЕ рекомендований спосіб
  // задання назв властивостей

  secretWords: "Hello, world", // рекомендований спосіб

  // Методи об'єкта - вбудовані функції
  // Спосіб 1: ключ: значення = анонімна функція (без назви)
  sayHi: function () {
    console.log("Hi!");
  },

  // Спосіб 2: Рекомендований
  // назва(параметри за потреби) {
  //   тіло функції
  // }
  sayHello() {
    const text = "Hello!";

    console.log(text);

    return text;
  },

  // Оголошення методу
  // say - назва методу (функції)
  // words - параметр методу (функції),
  //         передається під час виклику,
  //         виконує роль локальної змінної
  say(words) {
    // this - зарезервоване слово, призначене
    // для отримання інформації про поточний об'єкт
    // по факту, виконує роль самого об'єкта
    // дозволяє отримувати доступ до властивостей і методів
    // об'єкта В СЕРЕДИНІ інших методів ЦЬОГО об'єкта
    console.log(`${this.name} каже:`, this.sayHello());
    console.log(`${this.name} каже:`, words);
    console.log("this", this);
  },
};

console.log("user:", user);

// Виклик методів власного об'єкта
user.sayHi();
user.sayHello();
user.say("Nice to meet you!");

// Звернення до властивостей об'єкта
console.log("name:", user.name); // 1. За допомою "."
console.log("name:", user["name"]); // 2. За допомогою []

// За допомогою [] використовуємо коли:
// 1. Назва властивості містить " " або починається з числа
console.log("secret words:", user["secret words"]);

// 2. Назва властивості зберігається у змінній
const barcodeName = "barcode";

console.log("barcode:", user[barcodeName]);

// Зміна і додавання властивостей
console.log("age:", user.age); // undefined
// console.log(age); // ReferenceError: age is not defined

// Звернення до властивості об'єкта, якої не існує
// повертає undefined,
// проте звернення до змінної якої не існує
// повертає ПОМИЛКУ

user.age = 23; // додали в об'єкт user нову властивість
// і задали їй значення

console.log("age", user.age); // 23

user.age = 32; // змінили значення властивості об'єкта user
user.shops = [3, 8, 71];

console.log("user:", user);

// Видалення властивостей об'єктів
const book = {
  title: "JS book",
  author: "JS Community",
};

console.log("book:", book);

// ключове слово delete " " (пробіл) назва_об'єкта.назва_властивості
delete book.author;

console.log("book:", book);

// На практиці видаляти властивості доводиться
// перед відправленням об'єкта (даних)
// на або з сервера,
// рекомендовано виконувати на копії

// Копіювання об'єктів
const user1 = user; // НЕ СТВОРЮЄ КОПІЮ об'єкта,
// = створює ще одне посилання на існуючий (старий) об'єкт
// (маємо 2 адреси для однієї вулиці (об'єкта))

// user1.id = -1; // замінює id для об'єкта user
// user1.name = "Anonim"; // замінює name для об'єкта user

console.log("user 1", user1); // об'єкта user1 не існує, є лише user

// Спосіб 1: ... (спред-оператор)
// НЕ виконує "глибоке" копіювання,
// вкладені об'єкти і далі залишаються "старими" посиланнями
const user2 = { ...user };

user2.id = 2;
user2.name = "Anton";
// user2.created.name = "++"; // копіювання не подіяло
// змінилися значення і в об'єкті user2, і в user

console.log("user 2:", user2);

const user3 = { ...user, id: 3, name: "Eva" }; // копіювання з оновленням
// деяких полів

console.log("user 3", user3);

// Спосіб 2
// Метод assign глобального об'єкта Object
// НЕ виконує "глибоке" копіювання,
// вкладені об'єкти і далі залишаються "старими" посиланнями
// Дозволяє "зібрати" з кількох об'єктів один новий
const user4 = {};

Object.assign(user4, user, { id: 4, name: "Ivanka" });
// Створюємо копію об'єкта user і оновлюємо поля id та name
// Зібраний об'єкт записуємо у змінну user4

console.log("user 4:", user4);

user4.created.name = "Test";

console.log("user:", user);

// Спосіб 3
// Глобальна функція structuredClone
// Виконує "глибоке" копіювання
// Може мати проблеми з підтримкою у браузерах
// const user5 = structuredClone(user);

// user5.id = 5;
// user5.name = "Oleh";

// user5.created.name = "MainAdmin";

// console.log("user 5:", user5);
// console.log("user:", user);

// Перебір властивостей
console.log("--------------------------");

for (const key in user) {
  console.log("key:", key);

  // Перевірка приналежності назви властивості до об'єкта
  // чи успадкована
  if (!Object.hasOwn(user, key)) continue; // Бажано { continue; }

  const element = user[key];

  console.log(`element = user[${key}] =`, element);
}

console.log("-------------------------------------");

// Object.keys(user) - отримання масиву назв властивостей і методів
for (const key of Object.keys(user)) {
  console.log("key:", key);
}

console.log("-------------------------------------");

// Object.values(user) - отримання масиву значень властивостей і методів
for (const value of Object.values(user)) {
  console.log("value:", value);
}

console.log("-------------------------------------");

// Object.entries(user) - отримання масиву пар [ключ, значення] властивостей і методів
for (const [key, value] of Object.entries(user)) {
  console.log("key:", key, " value:", value);
}

// Перевірка існування властивості
console.log("id" in user); // true
console.log("deleted" in user); // false
