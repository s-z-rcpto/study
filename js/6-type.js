// Явне перетворення типів

// Інші типи в число (number)
console.log(`"29" ->`, Number("29")); // 29
console.log(`"3.4" ->`, Number("3.4")); // 3.4
console.log(`"03.4" ->`, Number("03.4")); // 3.4
console.log(`"-0.4" ->`, Number("-0.4")); // -0.4
console.log(`"-0,4" ->`, Number("-0,4")); // NaN, роздільник цілих і дробових - кома
console.log(`"O" ->`, Number("O")); // NaN, літера "О"
console.log(`"f" ->`, Number("f")); // NaN
console.log(`"-" ->`, Number("-")); // NaN
console.log(`"" ->`, Number("")); // 0, порожній рядок
// Числа в лапках (роздільник - крапка) конвертуються в числа
// Порожній рядок - в 0
// Інші символи і рядки - в NaN

console.log(`true ->`, Number(true)); // 1
console.log(`false ->`, Number(false)); // 0
console.log(`null ->`, Number(null)); // 0
console.log(`undefined ->`, Number(undefined)); // NaN
console.log("-------------------------------");

// NaN - Not a Number (не число)
// Спеціальне зарезервоване значення

const q = "q";
const testNaN = 3 * q; // NaN
// JS бачить операцію множення, тому
// намагається НЕЯВНО перетворити значення змінної q (рядок)
// у число, але результат перетворення - NaN
// Будь-яка операція з NaN дасть результат NaN

console.log("Змінна testNaN =", testNaN, "тип:", typeof testNaN);

// Перевірка на NaN
// Синтаксис
// Number.isNaN(<підозріла_змінна>)
console.log("Чи є змінна testNaN NaN? -", Number.isNaN(testNaN));
console.log("-------------------------------");

// Інші типи в рядок (string)
console.log(29, `->`, String(29)); // "29"
console.log(3.4, `->`, String(3.4)); // "3.4"
console.log(-0.4, `->`, String(-0.4)); // "-0.4"
console.log(0, `->`, String(0)); // "0"
console.log(true, `->`, String(true)); // "true"
console.log(false, `->`, String(false)); // "false"
console.log(null, `->`, String(null)); // "null"
console.log(undefined, `->`, String(undefined)); // "undefined"
console.log("-------------------------------");

// Інші типи в логічний тип (boolean)
console.log(29, `->`, Boolean(29)); // true
console.log(3.4, `->`, Boolean(3.4)); // true
console.log(-0.4, `->`, Boolean(-0.4)); // true
console.log(-29, `->`, Boolean(-29)); // true
console.log(Infinity, `->`, Boolean(Infinity)); // true
console.log(-Infinity, `->`, Boolean(-Infinity)); // true
console.log(0, `->`, Boolean(0)); // false
console.log(NaN, `->`, Boolean(NaN)); // false
// Всі числа крім 0 та NaN конвертуються в true,
// 0 та NaN - в false

console.log("'f'", `->`, Boolean("f")); // true
console.log("''", `->`, Boolean("")); // false
console.log("'0'", `->`, Boolean("0")); // true
console.log("' '", `->`, Boolean(" ")); // true
console.log("'true'", `->`, Boolean("true")); // true
console.log("'false'", `->`, Boolean("false")); // true
console.log("'word'", `->`, Boolean("word")); // true
console.log("-------------------------------");
// Будь-який рядок крім порожнього ("")
// конвертується в true,
// порожній рядок ("") - в false

// Перетворення дробових чисел у рядок
const testNum = 1 / 3;

console.log("testNum =", testNum); // 0.33333333333
console.log("String(testNum) =", String(testNum)); // "0.33333333333"
console.log("testNum.toString() =", testNum.toString()); // "0.33333333333"

// Конвертуємо число в рядок
// з вказаною точністю після коми
// (використовується заокруглення)
console.log("testNum.toFixed(4) =", testNum.toFixed(4)); // 0.3333
console.log("testNum.toFixed(2) =", testNum.toFixed(2)); // 0.33
console.log("testNum.toFixed(0) =", testNum.toFixed(0)); // 0
