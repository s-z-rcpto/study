const hello = "Привіт, світе";

console.log(hello);

console.log("Довжина рядка =", hello.length);

console.log("Перший символ:", hello[0]);
console.log("Перший символ:", hello.at(0));

console.log("Останій символ:", hello[hello.length - 1]);
console.log("Останій символ:", hello.at(-1));

hello[8] = "С"; // Не працює

console.log(hello);

let workingDays = `
  * Понеділок
  * Вівторок
  * Середа
  * Четвер
  * П’ятниця
`;

console.log(workingDays);

// Спеціальні символи
workingDays =
  "  * Понеділок\n  * Вівторок\n  * Середа\n  * Четвер\n  * П’ятниця";
// \n - символ нового рядка, "\n".length = 1
// \ - символ екранування
// \t - символ табуляції
// \\ - виведення зворотного слеша на екран
// \', \", \` - лапки

console.log(workingDays);

workingDays = [
  "\t* Понеділок",
  "\t* Вівторок",
  "\t* Середа",
  "\t* Четвер",
  "\t* П’ятниця",
].join("\n");

console.log(workingDays);

console.log("''"); // одинарні лапки
console.log('""'); // подвійні лапки
console.log("``"); // обернені лапки
console.log(
  `'' - одинарні лапки, "" - подвійні лапки, \`\` - обернені лапки, \\ - зворотній слеш`
);

// Основні методи рядків
console.log(
  "Рядок у нижньому регістрі (всі літери маленькі):",
  hello.toLowerCase()
);

console.log(
  "Рядок у ВЕРХНЬОМУ регістрі (всі літери великі):",
  hello.toUpperCase()
);

console.log("1-й символ у нижньому регістрі", hello[0].toLowerCase());
console.log("Останній символ у верхньому регістрі", hello.at(-1).toUpperCase());

// СЕРГІЙ => Сергій

const posName = hello.indexOf("Сергій"); // -1

console.log(`Розташування слова "Сергій" у рядку "${hello}"`, posName);

const posVi = hello.indexOf("ві");

console.log(`Розташування складу "ві" у рядку "${hello}"`, posVi); // 3

const posVi2 = hello.indexOf("ві", 4); // почиаємо пошук з індекса 4

console.log(`Розташування складу "ві" у рядку "${hello}"`, posVi2); // 9

console.log("Рядок містить склад 'віт'", hello.includes("віт")); // true
console.log("Рядок містить склад 'лист'", hello.includes("лист")); // false

console.log('Рядок починається з "Привіт"', hello.startsWith("Привіт")); // true
console.log('Рядок закінчуєть на "лист"', hello.endsWith("лист")); // false

// Якщо позиція слова "Привіт" у рядку "Привіт, світе" буде рівна 0
if (hello.indexOf("Привіт") === 0) {
  // то щось робимо
}

// Якщо рядок "Привіт, світе" починається зі слова "Привіт"
if (hello.startsWith("Привіт")) {
  // то щось робимо
}

const spaceHello = "     Привіт, світе!                                 ";

console.log(`Оригінальний рядок 2: "${spaceHello}"`);
console.log(`Оброблений рядок 2: "${spaceHello.trim()}"`); // Привіт, світе! (видалили пробіли на початку і в кінці рядка)

let today = "9.08.2025";

console.log(`0${today}`); // 9.08.2025

today = "12.08.2025";

console.log(`0${today}`); // 012.08.2025

console.log("9.08.2025".padStart(10, "0")); // 09.08.2025
console.log("12.08.2025".padStart(10, "0")); // 12.08.2025

console.log("Serhii".padEnd(20, ".")); // Serhii..............
