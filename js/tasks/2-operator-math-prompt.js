// 9. Створіть програму, яка:
// - запитає суму вкладу +
// - запитає річну процентну ставку +
// - запитає термін вкладу в місяцях +
// - обчислить суму відсотків +
// - виведе початкову суму та суму з відсотками

const sum = Number(prompt("Введіть суму вкладу, ₴", 1000));
const percent = Number(prompt("Введіть річну процентну ставку, %", 20));
const period = Number(prompt("Введіть термін вкладу в місяцях", 6));

const percentFrom100 = percent / 100; // 20% / 100% = 0.2
const periodFromYear = period / 12; // 6 міс. / 12 міс. = 0,5;

const percentSum = sum * periodFromYear * percentFrom100;
const resultSum = sum + percentSum;

alert(
  `Початкова сума: ${sum} грн\nНараховані відсотки: ${percentSum.toFixed(
    2
  )} грн\nЗагальна сума: ${resultSum.toFixed(2)} грн`
);

// 12. Розрахунок віку в днях:
// Створіть програму, яка:
// - запитає рік народження +
// - запитає місяць народження (1-12)
// - запитає день народження
// - обчислить приблизну кількість днів з дня народження (у році 365 днів, а у місяці – 30 днів) до сьогодні
// - виведе результат

const rikNarod = Number(prompt("Введіть рік народження", 2002));
const misiatsNarod = Number(
  prompt("Введіть місяць народження числом, 1-12", 9)
);
const denNarod = Number(prompt("Введіть день місяця, 1-31", 15));

const potochRik = 2025;
const potochMis = 7;
const potochDen = 31;

const rokiv = potochRik - rikNarod;
const mis = potochMis - misiatsNarod;
const dniv = potochDen - denNarod;

const vsogo = rokiv * 365 + mis * 30 + dniv;

console.log(`Всього ${vsogo} днів`);
