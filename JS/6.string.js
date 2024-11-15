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

// ("Привіт, світе");
console.log(hello.indexOf("віт")); // 3
console.log(hello.indexOf("віт", 4)); // 9

let position = 0;

// while (true) {
//   position = hello.indexOf("віт", position);

//   if (position === -1) {
//     break;
//   }

//   console.log(hello.slice(position));

//   position += 1;
// }

// for (const letter of hello) {
//   console.log(letter);
// }

// Привіт, світе
// вирП

let reversed = "";

for (const letter of hello) {
  console.log("Поточна літера: ", letter);
  // reversed = reversed + i;
}

console.log(reversed);

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
    .split("") // перетворюємо на масив літер
    .reverse() // розвертаємо масив задом наперед
    .join("") // об'єднуємо масив у рядок
); // olleh

let myName = "sERHII";

// Конкатенація рядків
myName = myName[0].toUpperCase() + myName.slice(1).toLowerCase();
myName = `${myName[0].toUpperCase()}${myName.slice(1).toLowerCase()}`;
myName = myName[0].toUpperCase().concat(myName.slice(1).toLowerCase());

console.log(myName);

// "Привіт, світе"
console.log(hello.replace("віт", "ват")); // Приват, світе
console.log(hello.replace(/віт/g, "ват")); // Приват, свате
console.log(hello.replaceAll("віт", "ват")); //Приват, свате

const text = "Я впевнена(-ий), що у мене вийде вивчити ДжаваСкрипт у 2024 році";

const vowels = ["а", "е", "и", "і", "о", "у", "А", "Е", "И", "І", "О", "У"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const punctuationMarks = [",", ".", "-", ":"];

let vowelsCount = 0;
let digitsCount = 0;
let punctuationMarksCount = 0;
let otherCount = 0;

for (const letter of text) {
  // якщо масив голосних включає в себе літеру,
  // то "загинаємо пальчик" vowelsCount
  // інакше якщо масив цифр включає в себе літеру,
  // то "загинаємо пальчик" digitsCount
  // інакше якщо масив розділових знаків включає в себе літеру,
  // то "загинаємо пальчик" punctuationMarksCount
  // інакше "загинаємо пальчик" otherCount
}

// виводимо результат - 4 числа
