// localStorage - вбудований у JS об'єкт для роботи
// з локальним сховищем браузера
// Дозволяє зберігати інформацію і читати її
// навіть після закриття сторінки чи браузера

// Збереження пар ключ-значення у локальне сховище браузера
// Інструменти розробника (F12) - вкладка Додаток - секція Пам'ять -
// Локальна пам'ять - Розгорнути - file:///
localStorage.setItem("number", 2);
localStorage.setItem("bool", true);
localStorage.setItem("string", "July");
localStorage.setItem("null", null);
localStorage.setItem("undefined", undefined);

let numb = localStorage.getItem("number");
let bool = localStorage.getItem("bool");
let str = localStorage.getItem("string");
let n = localStorage.getItem("null");
let u = localStorage.getItem("undefined");

// Інформація, яка читається з локального сховища
// буде рядком (тип string)

console.log(numb, typeof numb); // string
console.log(bool, typeof bool); // string
console.log(str, typeof str); // string
console.log(n, typeof n); // string
console.log(u, typeof u); // string

// Збереження у локальне сховище
// екземплярів об'єктного типу
//
// JSON - вбудований у JS об'єкт для конвертації
// "складних" (об'єктних) типів даних у JSON-рядок
// і навпаки (JSON-рядоку у масив чи об'єкт)
//
// JSON.stringify() - перетворює значення об'єктного типу
// у JSON-рядок
localStorage.setItem("array", JSON.stringify(["q", 3, false]));
localStorage.setItem("object", JSON.stringify({ id: 1, name: "Serhii" }));

let arr = localStorage.getItem("array");
let obj = localStorage.getItem("object");

console.log(arr, typeof arr); // string
console.log(obj, typeof obj); // string

// Перетворення типів збережених
// у локальному сховищі рядків даних
// до оригінальних типів

numb = Number(numb);
bool = Boolean(bool);
n = n === "null" ? null : n;
u = u === "undefined" ? undefined : u;

// JSON.parse() перетворює JSON-рядок
// у значення об'єктного типу (масив, об'єкт)
arr = JSON.parse(arr);
obj = JSON.parse(obj);

console.log(numb, typeof numb); // number
console.log(bool, typeof bool); // boolean
console.log(str, typeof str); // string
console.log(n, typeof n); // object (null)
console.log(u, typeof u); // undefined
console.log(arr, typeof arr); // object (array)
console.log(obj, typeof obj); // object
