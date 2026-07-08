// Типи даних у JS

// Числа (Number)
const age = 36; // ціле число
const smallPrice = 0.17; // число з плаваючою комою
const count = 0;
const milion = 1_000_000; // аналог 1000000, "_" - для зручності

// Рядки (String)
const name = "Serhii"; // 'Serhii' Prettier замінює одинарні лапки на подвійні
const lastName = "Zubryiuk";
const middleName = `Anatoliyovych`;
const letter = "q"; // один символ
const sign = "-"; // один символ
const emptyString = ""; // Порожній рядок

const orgName1 = 'ТОВ "Анастасія"'; // один вид лапок можна вкладати в інший
const orgName2 = `ТОВ "Анастасія"`;

const cafeName1 = "Морквяна Мар'яна";
const cafeName2 = `Морквяна Мар'яна`;

// Шаблонний літерал (шаблонний рядок)

// Синтаксис
// `${назва_змінної_або_вираз}`
// Приклад
console.log(`Вітаємо, ${name} з успішною реєстрацією`); // Вітаємо, Serhii з успішною реєстрацією
// Відбувається підстановка значення змінної name
// замість конструкції ${name}
// Важливо, щоб між $ і { не було пробілів

let amount = 2;
const price = 47;

console.log(3, 4, 5, "dds");

console.log(
  `${amount} кг яблук по ціні ${price} грн коштує ${amount * price} ₴`,
); // 2 кг яблук по ціні 47 грн коштує 94 ₴

amount = 5;

console.log(
  `${amount} кг яблук по ціні ${price} грн коштує ${amount * price} ₴`,
); // 5 кг яблук по ціні 47 грн коштує 235 ₴
