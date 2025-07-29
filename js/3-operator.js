const a = 10;
const b = 5;

// Арифметичні оператори
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

// Остача від ділення
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${b} % ${a} = ${b % a}`);
console.log(`${a} % 3 = ${a % 3}`);
console.log(`5 % 2 = ${5 % 2}`); // непарне число
console.log(`4 % 2 = ${4 % 2}`); // парне число

// Піднесення до степеня
console.log(`${a} ** ${b} = ${a ** b}`);
console.log(`2 у степені 3 = ${2 ** 3}`);
console.log(`2 у степені 10 = ${2 ** 10}`);

const x = "42";
const y = "18";

console.log(`Тип константи x = ${x}: ${typeof x}`);
console.log(`Тип константи y = ${y}: ${typeof y}`);

console.log(x + y);
console.log(a + y);

// Не явне перетворення типів
console.log(x + a); // якщо "число + рядок", то число -> рядок
console.log(a + y); // якщо "число * рядок", то рядок -> число (намагається)
console.log(a / y); // якщо "число / рядок", то рядок -> число (намагається)
console.log(a - y); // якщо "число - рядок", то рядок -> число (намагається)
