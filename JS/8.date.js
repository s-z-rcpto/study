console.log(new Date());
console.log(new Date(789456123)); // мілісекунди
console.log(new Date("2024-09-19")); // рядок
console.log(new Date("2024.09.19"));
console.log(new Date(2024, 8, 19, 8, 30)); // компоненти дати
console.log(new Date(2024, 8, 19));
console.log(new Date(2024, 8));

console.log(`Зараз ${new Date().getFullYear()} рік`);
console.log(`Зараз ${new Date().getMonth() + 1} місяць`); // індекс місяця, тобто від 0 до 11
console.log(`Зараз ${new Date().getDate()} день місяця`);
console.log(`Зараз ${new Date().getDay()} день тижня`); // неділя - 0 день, понеділок - 1

const now = new Date();

console.log(
  `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`
);

console.log(
  `Кількість мілісекунд, що пройшли з 1 січня 1970 UTC+0 - ${now.getTime()}`
);

console.log(new Date(now.setFullYear(2025)));
