const numbers = [11, 22, 33, 44, 55];

console.log(numbers);

// map() - створює новий масив на основі значень поточного (numbers),
// які відповідним чином обробляються (наприклад, множаться на 2)
const doubled = numbers.map((element) => element * 2);
// (element) => element * 2 - стрілкова функція
// element - неявно оголошена змінна,
// у яку по черзі будуть підставлятися елементи масиву numbers
// element * 2 - операція зі значенням елеменета масиву
// map - частково "замінює" цикл for

console.log("numbers:", numbers); // [11, 22, 33, 44, 55]
console.log("doubled:", doubled); // [22, 44, 66, 88, 110]

// map() замінює код нижче
const doubleArr = [];

for (const element of numbers) {
  doubleArr.push(element * 2);
}

console.log("doubleArr:", doubleArr);

// Практичний приклад
// Отримання масиву ідентифікаторів
// з масиву користувачів
const users = [
  { id: 1, name: "Сергій" },
  { id: 2, name: "Катерина" },
  { id: 3, name: "Тетяна" },
  { id: 4, name: "Оксана" },
  { id: 5, name: "Віктор" },
  { id: 6, name: "Вадим" },
]; // масив об'єктів Користувач
// об'єкт Користувач складається з 2 властивостей (полів)
// 1. Ідентифікатор - id
// 2. Ім'я - name

const userIds = users.map((user) => user.id);

console.log("userIds:", userIds); // [1, 2, 3, 4, 5, 6]

// filter() - повертає НОВИЙ масив, елементами якого
// будуть елементи поточного масиву (numbers),
// які відповідають умові: залишок від ділення === 0 (парні числа)
const evenNumbers = numbers.filter((element) => element % 2 === 0);
// (element) => element % 2 === 0 - стрілкова функція
// element - це параметр стрілкової функції,
// виконує роль ЛОКАЛЬНОЇ змінної,
// містить по черзі значення елементів поточного масиву (numbers)
// element % 2 === 0 - первірка умови парності,
// якщо результат для поточного елемента true - він буде доданий
// у результуючий (новий) масив,
// інакше метод перейде до наступного елемента масива numbers

console.log("numbers:", numbers); // [11, 22, 33, 44, 55]
console.log("evenNumbers:", evenNumbers); // [22, 44]

// reduce() - "згортає" масив до одного значення,
// на практиці, найчастіше використовуєть для обчислення
// суми елементів, або суми властивостей об'єктів-елементів
const numbersSum = numbers.reduce((sum, element) => (sum = sum + element), 0);
// sum - параметр (previousValue) стрілкової функції, локальна змінна,
// зберігає попереднє значення розрахунку на новому колі
// (sum = sum + element) - розрахунок для "згортання",
// 0 - початкове значення для параметра sum

console.log("numbers:", numbers); // [11, 22, 33, 44, 55]
console.log("numbersSum:", numbersSum); // 165

// find() - повертає елемент масиву,
// який першим буде відповідати умові,
// або undefined, якщо такого елемента не існує
// якщо елемент існує, то після його виявлення
// подальший пошук припиняється, на відміну від .filter
const firstEvenNumber = numbers.find((element) => element % 2 === 0);

console.log("numbers:", numbers); // [11, 22, 33, 44, 55]
console.log("firstEvenNumber:", firstEvenNumber); // 22

// const evenNumbers = numbers.filter((element) => element % 2 === 0);
// const firstEvenNumber = numbers.find((element) => element % 2 === 0);
// .filter - шукає ВСІ елементи, які відповідають умові, або повертає []
// .filter - повертає масив
// .find - шукає ХОЧА Б ОДИН елемент, який відповідає умові та зупиняє пошук,
// або повертає undefined
// .find - повертає значення або undefined

// slice() - створює НОВИЙ масив і копіює до нього
// вказану частину поточного масива
const subNumb1 = numbers.slice(1, 3);
// 1 (start) - стартовий індекс, з якого починається копіювання
// 3 (end) - це НЕ кількість, а кінцевий індекс (НЕ ВКЛЮЧАЄТЬСЯ) до якого копіюється

//   0   1   2   3   4
// [11, 22, 33, 44, 55]

console.log("numbers:", numbers); // [11, 22, 33, 44, 55]
console.log("subNumb1:", subNumb1); // [22, 33]

const subNumb2 = numbers.slice(1); // у новий масив
// копіюємо елементи з індекса 1 до кінця поточного масиву,
// оскільки параметр end відсутній

console.log("subNumb2:", subNumb2); // [22, 33, 44, 55]

const subNumb3 = numbers.slice(-2); // у новий масив
// копіюємо 2 останні елементи поточного масиву,
// тобто знак "-" вказує на рух з кінця масиву

console.log("subNumb3:", subNumb3); // [44, 55]

// Об'єднання масивів
const fruits = ["Вишня", "Яблуко", "Банан", "Груша", "Апельсин", "Виноград"];
const gorodina = ["Морква", "Буряк", "Картопля"];

// Спосіб 1.1
const koshik1 = fruits.concat(gorodina); // об'єднуємо 2 масиви у НОВИЙ масив

console.log("fruits", fruits); // без змін
console.log("gorodina", gorodina); // без змін
console.log("koshik1", koshik1); // fruits + gorodina = Array(9)

// Спосіб 1.2
const koshik2 = [].concat(fruits, gorodina);

console.log("fruits", fruits); // без змін
console.log("gorodina", gorodina); // без змін
console.log("koshik2", koshik2); // fruits + gorodina = Array(9)

// Спосіб 2
const koshik3 = [...fruits, ...gorodina];

console.log("fruits", fruits); // без змін
console.log("gorodina", gorodina); // без змін
console.log("koshik3", koshik3); // fruits + gorodina = Array(9)

// Інші методи

console.log("Отримання значення за індексом 2:", fruits.at(2)); // fruits[2] = Банан
console.log(
  'Отримання значення за індексом "-2" з кінця, тому що "-":',
  fruits.at(-2),
  fruits[fruits.length - 2],
); // Апельсин Апельсин

console.log("Дізнатися індекс за значенням:", fruits.indexOf("Груша")); // 3
// Якщо .indexOf не знаходить елемент, то повертає "-1"

console.log(
  "Об'єднати елементи у рядок (неявне перетворення):",
  fruits.join(", "),
); // Вишня, Яблуко, Банан, Груша, Апельсин, Груша, Виноград
