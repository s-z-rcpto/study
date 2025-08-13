const hello = "Привіт, світе";

console.log(hello);

// replace(searchValue, replaceValue) – замінює частину рядка searchValue на replaceValue й
// повертає новий рядок із заміненими значеннями та не змінює початковий рядок
// замінюємо слово "світе" на власне ім'я
const helloSerhii = hello.replace("світе", "Serhii");

console.log(hello);
console.log(helloSerhii);

console.log(hello.replace("віт", "...")); // При..., світе, а не При..., с...е
// replace замінює перше входження "віт"

console.log(hello.replaceAll("віт", "...")); // При..., с...е
console.log(hello.replaceAll("і", "1")); // Прив1т, св1те

// 0123456789111
//           012
// Привіт, світе

console.log(hello.slice(8, 12)); // світ
console.log(hello.slice(-5, -1)); // світ
console.log(hello.slice(8)); // світе
console.log(hello.slice(-5)); // світе
// якщо не вказати 2-й параметр, то будемо копіювати до кінця рядка

const search = "світ";
const start = hello.indexOf(search); // 8
const end = start + search.length; // 12

console.log(hello.slice(start, end)); // світ

// substring(start [, end]) – повертає частину рядка від start до end (не включаючи end),
// дозволяє задати start більше ніж end, але не підтримує відʼємні аргументи (інтерпретуються як 0)
console.log(hello.substring(8, 12)); // світ
console.log(hello.substring(12, 8)); // світ
console.log(hello.substring(8)); // світе

// substr(from [, length]) – повертає частину рядка з позиції start, із заданою довжиною length.
// Перший аргумент може бути відʼємним, щоб рахувати з кінця
console.log(hello.substr(8, 4)); // світ
console.log(hello.substr(8)); // світе
console.log(hello.substr(8, 40)); // світе

let myName = "sERHII";

myName[0] = "S"; // Не працює

// Створити новий рядок замість старого і записати його в ту саму змінну.
myName = myName[0].toUpperCase() + myName.slice(1).toLowerCase();
myName = `${myName[0].toUpperCase()}${myName.slice(1).toLowerCase()}`;
myName = myName.at(0).toUpperCase().concat(myName.slice(1).toLowerCase());

console.log(myName);

// Перетворили рядок на масив символів за допомогою .split("") з роздільником - порожній рядок
// За допомогою метода масивів .reverse() "розвернули" порядок елементів
// за допомогою метода масивів .join("") об'єднали всі елементи у рядок з розідльником - порожній рядок
console.log("Написати рядок".split("").reverse().join("")); // кодяр итасипаН

let result = "";

for (const letter of "Написати рядок") {
  //   console.log(letter);

  result = letter + result;
}

console.log(result);

const str = "Я впевнена(-ий), що у мене вийде вивчити ДжаваСкрипт у 2025 році";

const wordArr = str.split(" "); // перетворити рядок на масив рядків по роздільнику

console.log(str);
console.log(wordArr);

console.log("локомотив".split("о"));

const line10 =
  "Я впевнена(-ий), що у мене вийде вивчити ДжаваСкрипт до кінця 2025 року на високому рівні";

if (line10.length > 72) {
  console.log(line10.slice(0, 72) + "...");
} else {
  console.log(line10);
}
