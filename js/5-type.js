// Перетворення інших типів у число (Number)
console.log(`"29" ->`, Number("29")); // 29
console.log(`"3.4" ->`, Number("3.4")); // 3.4
console.log(`"3,4" ->`, Number("3,4")); // NaN - Not a Number (не число)
console.log(`"03.4" ->`, Number("03.4")); // 3.4
console.log(`"0.4" ->`, Number("0.4")); // 0.4
console.log(`true ->`, Number(true)); // 1
console.log(`false ->`, Number(false)); // 0
console.log(`null ->`, Number(null)); // 0
console.log(`undefined ->`, Number(undefined)); // NaN
console.log(`"q" ->`, Number("q")); // NaN
console.log(`"" ->`, Number("")); // 0
console.log("------------------------");

// NaN - Not a Number (не число)
// Спеціальне зарезервоване значення
const testNaN = 3 * "q";

console.log("Змінна testNaN =", testNaN, "тип:", typeof testNaN); // NaN

// Перевірка на NaN
console.log("Чи змінна testNaN є NaN:", Number.isNaN(testNaN));
console.log("------------------------");

// Перетворення інших типів у рядок (String)
console.log(29, `->`, String(29)); // "29"
console.log(3.4, `->`, String(3.4)); // "3.4"
console.log(0.4, `->`, String(0.4)); // "0.4"
console.log(true, `->`, String(true)); // "true"
console.log(false, `->`, String(false)); // "false"
console.log(null, `->`, String(null)); // "null"
console.log(undefined, `->`, String(undefined)); // "undefined"
console.log("------------------------");

// Перетворення інших типів у логічний (Boolean)
console.log(29, `->`, Boolean(29)); // true
console.log(3.4, `->`, Boolean(3.4)); // true
console.log(0.4, `->`, Boolean(0.4)); // true
console.log(-29, `->`, Boolean(-29)); // true
console.log(-3.4, `->`, Boolean(-3.4)); // true
console.log(-0.4, `->`, Boolean(-0.4)); // true
console.log(0, `->`, Boolean(0)); // false
console.log(`"true"`, `->`, Boolean("true")); // true
console.log(`"false"`, `->`, Boolean("false")); // true
console.log(`"q"`, `->`, Boolean("q")); // true
console.log(`""`, `->`, Boolean("")); // false
console.log(`"0"`, `->`, Boolean("0")); // true
console.log(null, `->`, Boolean(null)); // false
console.log(undefined, `->`, Boolean(undefined)); // false
