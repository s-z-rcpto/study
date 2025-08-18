function showMessage(message) {
  alert(message);
}

function elementInfo(element) {
  console.log(element);
}

// Шукаємо на HTML сторінці тег зі значенням атрибуту id="bHello"
// Якщо знаходимо, то у змінну button записуємо адресу знайденого об'єкта
// якщо не знаходимо, то записуємо null
const button = document.getElementById("bHello");

console.log("button", button); // HTML-представлення об'єкта
console.dir(button); // об'єктне представлення об'єкта (можна подивитися всі поля (властивості))

// Задаємо значення поля (властивості) onclick
// у вигляді анонімної функції
button.onclick = function () {
  alert("Hello!");
};

const exampleButton = document.getElementById("example");

// Для знайденого об'єкта "кнопка" додаємо прослуховувач події "натискання"
// якщо відбудеться натискання на кнопку, то прослуховувач викличе анонімну функцію,
// яку передаємо йому у якості 2-го параметра
exampleButton.addEventListener("click", function () {
  alert("Thanks");
});

console.log("--------------------- querySelector");

// querySelector шукає на сторінці елементи з вказаним селектором
// повертає перший елемент, який відповідає умовам
console.log("div", document.querySelector("div"));
console.log("#d2", document.querySelector("#d2"));
console.log(".c3", document.querySelector(".c3"));
console.log("div div", document.querySelector("div div"));
console.log("p", document.querySelector("p"));

console.log("--------------------- querySelectorAll");

// querySelectorAll шукає на сторінці ВСІ елементи з вказаним селектором
// повертає список (масив) елементів, які відповідають умовам
console.log("div", document.querySelectorAll("div"));
console.log("#d2", document.querySelectorAll("#d2"));
console.log(".c3", document.querySelectorAll(".c3"));
console.log("div div", document.querySelectorAll("div div"));
console.log("p", document.querySelectorAll("p"));

console.log("--------------------- querySelectorAll('div')");

for (const div of document.querySelectorAll("div")) {
  console.log(div);
}
