const hello = "Привіт, світе";

console.log(`Довжина рядка = ${hello.length}`);

console.log(`Перша літера: ${hello[0]}`);
console.log(`Перша літера: ${hello.at(0)}`);

console.log(`Остання літера: ${hello[hello.length - 1]}`);
console.log(`Остання літера: ${hello.at(-1)}`);

hello[8] = "С";

console.log(hello);

let hi = hello;

console.log(`hello = ${hello}`);
console.log(`hi = ${hi}`);

hi = "Hi, world";

console.log(`hello = ${hello}`);
console.log(`hi = ${hi}`);

const hello2 = "Привіт,\nоб'єднаний \\світе\\";

console.log(hello2);
// Привіт,
// об'єднаний \світе\

console.log(`Довжина рядка = ${hello2.length}`); // 26

// Основні методи string

console.log(`Рядок у нижньому регістрі: ${hello.toLowerCase()}`); // всі малі літери
console.log(`Рядок у верхньому регістрі: ${hello.toUpperCase()}`); // ВСІ ВЕЛИКІ ЛІТЕРИ
console.log(`1-й символ у нижньому регістрі: ${hello[0].toLowerCase()}`); // мала літера
console.log(`2-й символ у верхньому регістрі: ${hello[1].toUpperCase()}`); // ВЕЛИКА ЛІТЕРА
console.log(`Оригінальний рядок: ${hello}`);

// Пошук фрагмента у рядку
if (hello.indexOf("Сергій") === -1) {
  console.log("Ім'я не знайдено");
}

if (hello.indexOf("світ") !== -1) {
  console.log("Слово знайдено", hello.indexOf("світ"));
}

console.log(hello.indexOf("віт"));
console.log(hello.indexOf("віт", 4));

// for (const letter of hello) {
//   console.log(letter);
// }

// let reversed = '';

// for (const letter of hello) {
//     reversed = ? reversed ?;
// }

// console.log(reversed);

console.log(`Рядок містить склад "віт": ${hello.includes("віт")}`);
console.log(`Рядок містить склад "лист": ${hello.includes("лист")}`);

console.log(`Рядок починається з "Привіт": ${hello.startsWith("Привіт")}`);
console.log(`Рядок починається з "Hello": ${hello.startsWith("Hello")}`);

console.log(`Рядок закінчується на "світе": ${hello.endsWith("світе")}`);
console.log(`Рядок закінчується на "world": ${hello.endsWith("world")}`);

console.log(`>${"      Hello world\n       "}<`);
console.log(`>${"      Hello world\n       ".trim()}<`);

console.log("9.11.2024".padStart(10, "0"));
console.log("John".padEnd(12, ".")); // 'John........');

console.log(hello.padEnd(hello.length + 3, "."));
console.log(hello.padEnd(hello.length + 4, "..."));

//           111
// 0123456789012
// Привіт, світе
console.log(hello.slice(8, 12)); // світ
console.log(hello.slice(-5, -1)); // світ
console.log(hello.slice(-5)); // світе

// аналог console.log(hello.slice(8, 12));
const str = "світ";
const pos = hello.indexOf(str);

console.log(
  hello.slice(pos, pos + str.length)
  //   hello.slice(hello.indexOf("світ"), hello.indexOf("світ") + "світ".length)
); // світ

//           111
// 0123456789012
// Привіт, світе
// повертаємо текст з 8 по 11 індекс
console.log(hello.substring(8, 12)); // світ
console.log(hello.substring(12, 8)); // світ

//           111
// 0123456789012
// Привіт, світе
// повертаємо 4 літери тексту з 8 індекса
console.log(hello.substr(8, 4)); // світ

console.log(
  hello.substr(pos, str.length)
  //   hello.slice(hello.indexOf("світ"), "світ".length)
); // світ

console.log(
  "hello"
    .split("") // пертворюємо на масив літер
    .reverse() // розвертаємо масив задом наперед
    .join("") // об'єднуємо масив у рядок
); // olleh
