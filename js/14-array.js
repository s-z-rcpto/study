// Способи створення масивів
const arr1 = [1, "липень", true, null, undefined];
const arr2 = new Array(1, "липень", true, null, undefined);
const arr3 = Array.from("12345"); // ['1', '2', '3', '4', '5']
const arr4 = [...arr1]; // створення копії

// На практиці, найчастіше використовуються способи 1 і 4
const arr5 = []; // створення порожнього масиву

console.log("arr1 =", arr1);
console.log("arr2 =", arr2);
console.log("arr3 =", arr3);
console.log("arr4 =", arr4);
console.log("arr5 =", arr5);

console.log("----------------------");

console.log("Тип масиву:", typeof arr1); // object

// Примітивні типи
let a = 3;
const b = a; // 3 // для примітивний типів
// оператор присвоєння (=) створює копію
// значення змінної a і записує у змінну b
// далі вони працюють незалежно

console.log("a =", a, " b =", b); // a = 3  b = 3

a = -2;

console.log("a =", a, " b =", b); // a = -2  b = 3

// Об'єктні типи
const arrA = ["a", 4, null]; // у пам'яті пристрою
// виділяється місце під масив і записуються дані
// у змінну записується адреса масиву в пам'яті (посилання)
// назва_вулиці = [буд. 1, буд. 2, буд. 3, ...]

const arrB = arrA; // для економії ресурсів
// пристрій не виділяє нове місце
// і записує в змінну існуючу адресу масиву в пам'яті (посилання)
// нова_назва_вулиці = [буд. 1, буд. 2, буд. 3, ...]

// У виразі arrB = arrA оператор присвоєння (=) не створює новий масив,
// він додає ще одну назву для звертання до існуючого
// Аналогія: перйменування вулиць - вулиця лишається та сама,
// проте має 2 назви - стару і нову

console.log("arrA =", arrA, " arrB =", arrB);

// Так робити не можна, змінна arrA оголошена як const
// arrA = []; // TypeError: Assignment to constant variable.

// Ось так - можна, ми змінюємо не все значення змінної,
// а звертаємося лише до "частини" і можемо її редагувати
arrA[1] = "BINGO";

console.log("arrA =", arrA, " arrB =", arrB);

const arrC = arrA; // НЕ створили копію, створили 3 посилання на масив arrA
const copyA = [...arrC]; // створили копію масива arrA

console.log("-----------------------");

console.log("arrA =", arrA); // ['a', 'BINGO', null]
console.log("arrB =", arrB); // ['a', 'BINGO', null]
console.log("arrC =", arrC); // ['a', 'BINGO', null]
console.log("copyA =", copyA); // ['a', 'BINGO', null]

arrC[2] = 5698; // ніби-то оновлюються і arrA, і arrB, але насправді це все один масив
copyA[0] = true; // це новий масив, не прив'язаний до arrA чи arrB, чи arrC

console.log("-----------------------");
console.log("arrA =", arrA); // ['a', 'BINGO', 5698]
console.log("arrB =", arrB); // ['a', 'BINGO', 5698]
console.log("arrC =", arrC); // ['a', 'BINGO', 5698]
console.log("copyA =", copyA); // [true, 'BINGO', null]

console.log("-----------------------");
