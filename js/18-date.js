console.log(new Date()); // поточна дата і час
// Wed Aug 13 2025 13:25:29 GMT+0300 (за східноєвропейським літнім часом)

// Способи задання дати (і часу)

// за допомогою кількості мілісекунд з 01.01.1970 00:00:00.000
// console.log(new Date(987654321));
console.log(new Date(987_654_321)); // 12.01.1970 13:20:54

// за допомогою рядка у форматі ISO
console.log(new Date("2025-08-03T09:04")); // 03.08.2025 09:04

// за допомогою рядка у форматі "yyyy-mm-dd"
console.log(new Date("2025-08-03")); // 03.08.2025 03:00

// не рекомендовано
console.log(new Date("2025.08.03")); //

// компоненти дати і/або часу
console.log(new Date(2025, 7, 13, 14, 5)); // 13.08.2025 14:05
console.log(new Date(2025, 7, 13)); // 13.08.2025 00:00
console.log(new Date(2025, 7)); // 01.08.2025 00:00

// Місяці рахуються з 0 (0 — січень, 11 — грудень)

// Отримання компонентів дати та часу
const today = new Date();

console.log(today);

const year = today.getFullYear(); // 2025, рік у форматі 4 цифр (yyyy)
const month = today.getMonth() + 1; // 8, індекс + 1 = номер місяця
const day = today.getDate(); // 13, число місяця
const dayOfWeek = today.getDay(); // 3 = середа, день тижня

// Дні тижня у JS
// 0 - неділя
// 1 - понеділок
// 2 - вівторок
// 3 - середа
// 4 - четвер
// 5 - п'ятниця
// 6 - субота

console.log(year, month, day, dayOfWeek);

const hour = today.getHours(); // 14
const minute = today.getMinutes(); // 32
const second = today.getSeconds(); // **
const miliseconds = today.getMilliseconds(); // ***

console.log(hour, minute, second, miliseconds);

// Ручне перетворення дати у рядок
const misitsi = [
  "січень",
  "лютий",
  "березень",
  "квітень",
  "травень",
  "червень",
  "липень",
  "серпень",
  "вересень",
  "жовтень",
  "листопад",
  "грудень",
];

const dniTyzhnya = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
];

console.log(
  `Сьогодні ${day} ${
    misitsi[month - 1]
  } ${year} ${hour}:${minute}:${second}.${miliseconds}`
);

// String(month).padStart(2, "0") перетворює номер місяця 8 на формат з 2 цифрами "08"
console.log(
  `Сьогодні ${day}.${String(month).padStart(
    2,
    "0"
  )}.${year} ${hour}:${minute}:${second}.${miliseconds}`
);

// Готові способи перетворення дата і часу в рядок
console.log(today.toDateString()); // Wed Aug 13 2025
console.log(today.toLocaleDateString()); // 13.08.2025
console.log(today.toLocaleString()); // 13.08.2025, 14:57:42
console.log(today.toLocaleTimeString()); // 14:57:42
console.log(today.toISOString()); // 2025-08-13T11:59:12.274Z // час за 0 меридіаном

// Методи зміни дати або часу
const zavtra = new Date(); // поточна дата і час

zavtra.setFullYear(2030); // встановили рік 2030

console.log(zavtra.toLocaleDateString()); // 13.08.2030

zavtra.setMonth(11); // встановили місяць з індексом 11 (грудень)

console.log(zavtra.toLocaleDateString()); // 13.12.2030

zavtra.setDate(14); // встановили число 14

console.log(zavtra.toLocaleDateString()); // 14.12.2030

// Рекомендований спосіб
const zavtra2 = new Date(year, month - 1, day + 1);

console.log(zavtra2.toLocaleDateString());
