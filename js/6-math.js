const up = 4.6;
const down = 4.4;
const middle = 4.5;

// Math.round() – округлення до найближчого цілого

console.log("Math.round():");
console.log(Math.round(up)); // 5
console.log(Math.round(down)); // 4
console.log(Math.round(middle)); // 5

// Math.floor() – округлення вниз

console.log("Math.floor():");
console.log(Math.floor(up)); // 4
console.log(Math.floor(down)); // 4
console.log(Math.floor(middle)); // 4

// Math.ceil() – округлення вгору

console.log("Math.ceil():");
console.log(Math.ceil(up)); // 5
console.log(Math.ceil(down)); // 5
console.log(Math.ceil(middle)); // 5

// Math.trunc() – видалення дробової частини

console.log("Math.trunc():");
console.log(Math.trunc(up)); // 4
console.log(Math.trunc(down)); // 4
console.log(Math.trunc(middle)); // 4

// Math.max() – максимальне значення

console.log("Math.max: ", Math.max(-56, 0, 52, 236, 5.65)); // 236

// Math.min() – мінімальне значення

console.log("Math.min: ", Math.min(-56, 0, 52, 236, 5.65)); // -56

// Math.abs() – абсолютне значення (значення по модулю)

console.log("|53| =", Math.abs(53));
console.log("|0| =", Math.abs(0));
console.log("|-65| =", Math.abs(-65));
