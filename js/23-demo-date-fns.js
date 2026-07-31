// Встановлення української локалізації (мови) по замовчуванню
if (window.dateFns && dateFns.locale && dateFns.locale.uk) {
  dateFns.setDefaultOptions({ locale: dateFns.locale.uk });
}
/*
// Сьогоднішня дата
const now = new Date();

// Конкретна дата 25 липня 2025, 10:45
const myDate = new Date(2025, 6, 25, 10, 45);

console.log(now);
console.log(myDate);

//  Форматований вивід
console.log(dateFns.format(now, "dd-MM-yyyy")); // 31-07-2026
console.log(dateFns.format(now, "HH:mm:ss")); // 10:14:15
console.log(dateFns.format(now, "'Сьогодні' eee dd MMMM yyyy HH:mm:ss"));

// Парсинг радка в дату
const dateStr = "21/04/2024 12:30";
const formatPattern = "dd/MM/yyyy HH:mm";

const parserDate = dateFns.parse(dateStr, formatPattern, new Date());

console.log(parserDate);
console.log(dateFns.format(parserDate, "eee dd MMMM yyyy HH:mm:ss"));

// Перевірка об'єкта дата
console.log(dateFns.isValid(new Date())); // true
console.log(dateFns.isValid(new Date("21312dsfs"))); // false

// Приклад функції парсингу рядка з датою від користувача
function parserUserInput(str) {
  const parsed = dateFns.parse(str, "dd.MM.yyyy", new Date());

  if (!dateFns.isValid(parsed)) {
    console.error("Некоректний формат дати: очікується ДД.ММ.РРРР");
    return null;
  }
  return parsed;
}

console.log(parserUserInput("24.04.2025")); // ok
console.log(parserUserInput("35.04.2025")); // ne ok - error
*/

const today = new Date();
// Додавання днів, місяців, років
const add10Days = dateFns.addDays(today, 10);
const add3Months = dateFns.addMonths(today, 3);
const add1Years = dateFns.addYears(today, 1);

console.log(dateFns.format(add10Days, "dd.MM.yyyy"));
console.log(dateFns.format(add3Months, "dd.MM.yyyy"));
console.log(dateFns.format(add1Years, "dd.MM.yyyy"));

// Віднімання днів, годин
const sub10Days = dateFns.subDays(today, 10);
const sub30Hours = dateFns.subHours(today, 30);

console.log(dateFns.format(sub10Days, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(sub30Hours, "dd.MM.yyyy HH:mm"));

// Початок і кінець місяця
const startMonth = dateFns.startOfMonth(today);
const endMonth = dateFns.endOfMonth(today);

console.log(dateFns.format(startMonth, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(endMonth, "dd.MM.yyyy HH:mm"));

// Початок і кінець тижня
const startWeek = dateFns.startOfWeek(today, { weekStartsOn: 1 });
const endWeek = dateFns.endOfWeek(today, { weekStartsOn: 1 });

console.log(dateFns.format(startWeek, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(endWeek, "dd.MM.yyyy HH:mm"));

const date1 = new Date(2026, 6, 20);
const date2 = new Date(2026, 7, 21);

// Порівняння дат раніше і пізніше
console.log(dateFns.isBefore(date1, date2)); // true
console.log(dateFns.isAfter(date1, date2)); // false

// Перевірка чи дата пройшла чи ще ні
// сьогодні 31.6.2026 (за стилем js)
console.log(dateFns.isPast(date1)); // true
console.log(dateFns.isFuture(date2)); // true

const time1 = new Date(2026, 6, 15, 10, 0);
const time2 = new Date(2026, 6, 15, 18, 20);

// Абсосютна точність
console.log(dateFns.isEqual(time1, time2)); // false

// Точність до дня
console.log(dateFns.isSameDay(time1, time2)); // true

// Приклад. Перевірка бронювання
// Існуючу бронювання
const booking = {
  start: new Date(2026, 6, 15),
  end: new Date(2026, 6, 21),
};

// Заявка від клієнта
const newBooking = {
  start: new Date(2026, 6, 19),
  end: new Date(2026, 6, 25),
};

// Перевірка перекриття інтервалів
const isOverlapping = dateFns.areIntervalsOverlapping(booking, newBooking);

if (isOverlapping) {
  console.log("Обрані дати зайняті. Оберіть інший період");
} else {
  console.log("Бронювання успішне");
}

// Різниця між датами
const diffDeys = dateFns.differenceInDays(date2, date1);
console.log(diffDeys); // 32

const diffWeeks = dateFns.differenceInWeeks(date2, date1);
console.log(diffWeeks); // 4 повні тижні
console.log("------------------------------------------");

// Відносний час
const comentDate = new Date(2026, 6, 31, 10, 0);
console.log(dateFns.formatDistanceToNow(comentDate));

// з суфіксом "тому" або "через"
console.log(dateFns.formatDistanceToNow(comentDate, { addSuffix: true }));
const dateStart = new Date(2024, 6, 20);
const dateEnd = new Date(2026, 7, 21);

console.log(dateFns.formatDistance(dateStart, dateEnd));
console.log("------------------------------------------");

// Діапазон дат
const interval = {
  start: new Date(2026, 7, 1),
  end: new Date(2026, 7, 10),
};

// Формуємо масив дат за інтервалом
const daysArray = dateFns.eachDayOfInterval(interval);

// Вивід
for (const day of daysArray) {
  console.log(dateFns.format(day, "dd.MM (EEEE)"));
}
console.log("------------------------------------------");

// Приклад: таймер зворотнього відліку
function getTimeEvent(targetDate) {
  const now = new Date();

  // Якщо подія відбулася
  if (dateFns.isBefore(targetDate, now)) {
    return "Подія вже відбулася";
  }

  const days = dateFns.differenceInDays(targetDate, now);

  const dateAfterDays = dateFns.addDays(now, days);
  const hours = dateFns.differenceInHours(targetDate, dateAfterDays);

  return `До події залишилося ${days} дн. та ${hours} год.`;
}

console.log(getTimeEvent(new Date(2026, 11, 31, 23, 59, 59)));
// console.log(dateFns.format(new Date(2026, 13, 31, 23, 59, 59), "dd.MM.yyyy"));
