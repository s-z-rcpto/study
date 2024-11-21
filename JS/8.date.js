console.log(new Date());
console.log(new Date(789_456_123)); // мілісекунди
console.log(new Date("2024-09-19T08:30")); // рядок
console.log(new Date("2024-09-19")); // рядок
console.log(new Date("2024.09.19")); // не рекомендований формат
console.log(new Date(2024, 8, 19, 8, 30)); // компоненти дати
console.log(new Date(2024, 8, 19));
console.log(new Date(2024, 8));

console.log(`Зараз ${new Date().getFullYear()} рік`);
console.log(`Зараз ${new Date().getMonth() + 1} місяць`); // індекс місяця, тобто від 0 до 11
console.log(`Зараз ${new Date().getDate()} день місяця`);
console.log(`Зараз ${new Date().getDay()} день тижня`); // неділя - 0 день, понеділок - 1

const now = new Date();

console.log(
  `${String(now.getHours()).padStart(
    2,
    "0"
  )}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`
);

console.log(
  `Кількість мілісекунд, що пройшли з 1 січня 1970 UTC+0 - ${now.getTime()}`
);

console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());
console.log(now.toString());
console.log(now.toTimeString());
console.log(now.toUTCString());

console.log(now.setFullYear(2025));
console.log(now);

// Спосіб 1 отримання завтрішньої дати
const tomorrow = new Date(
  new Date() // дата і час на даний момент
    .setDate(
      // додаємо до дати 1 день
      new Date().getDate() + 1 // отримуємо день місяця
    )
); // перетворюємо мілісекунди з setDate у дату

// Спосіб 2 отримання завтрішньої дати
const altTomorrow = new Date();

altTomorrow.setDate(altTomorrow.getDate() + 1);

console.log(`Завтра - ${tomorrow.toLocaleDateString()}`);
console.log(`Завтра - ${altTomorrow.toLocaleDateString()}`);

// Отримуємо дату минулого місяця
const prevMonth = new Date();

prevMonth.setMonth(prevMonth.getMonth() - 1);

console.log(`Дата попереднього місяця - ${prevMonth.toLocaleDateString()}`);

// Отримуємо дату початку минулого місяця
const startOfPrevMonth = new Date();

startOfPrevMonth.setMonth(startOfPrevMonth.getMonth() - 1, 1);

console.log(
  `Дата початку попереднього місяця - ${startOfPrevMonth.toLocaleDateString()}`
);

// Отримуємо дату кінця наступного місяця
const endOfNextMonth = new Date();

endOfNextMonth.setMonth(
  endOfNextMonth.getMonth() + // індекс поточного місяця (листопад)
    2, // додаємо 2 місяці (січень) щоб отримати 1 день місяця,
  // після наступного (01.01.2025)
  0 // завдяки властивості автокорекції 0 - віднімає 1 день від
  //  початку місяця, після наступного (від 01.01.2025)
);

console.log(
  `Дата кінця наступного місяця - ${endOfNextMonth.toLocaleDateString()}`
);

const startOfWeb = new Date("2024-09-19T08:30");

// Розрахунок тривалості навчання
const duration = new Date() - startOfWeb; // 5_457_428_597 мілісекунд

console.log(`Тривалість навчання ${duration} мс`);
console.log(`Тривалість навчання ${duration / 1000} с`);
console.log(`Тривалість навчання ${duration / 1000 / 60} хв`);
console.log(`Тривалість навчання ${duration / 1000 / 60 / 60} год`);
console.log(`Тривалість навчання ${duration / 1000 / 60 / 60 / 24} дні`);
console.log(`Тривалість навчання ${duration / 1000 / 60 / 60 / 24 / 30} міс`);

function pad0(dateTimePart, length = 2, fillString = "0") {
  return String(dateTimePart).padStart(length, fillString);
}

const now2 = new Date();

// Було
console.log(
  `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
);

// Стало
console.log(
  `${pad0(now.getHours())}:${pad0(now.getMinutes())}:${pad0(now.getSeconds())}`
);
