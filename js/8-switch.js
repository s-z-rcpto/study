const day = 3;

switch (day) {
  case 1: // якщо значення змінної day === 1, то
    console.log("Понеділок");
    break; // якщо умова істинна, то завершуємо перевірку

  case 2: // if (day === 2)
    console.log("Вівторок");
    break;

  case 3: // if (day === 3)
    console.log("Середа");
    break;

  default: // else
    console.log("Інший день");
    break;
}

// Альтернативний підхід з умовним оператором
if (day === 1) {
  console.log("Понеділок");
} else if (day === 2) {
  console.log("Вівторок");
} else if (day === 3) {
  console.log("Середа");
} else {
  console.log("Інший день");
}

switch (day) {
  case 1: // if (day === 1 ||
  case 2: // day === 2 ||
  case 3: // day === 3 ||
  case 4: // day === 4 ||
  case 5: // day === 5)
    console.log("Будній день");
    break;

  case 6:
  case 7:
    console.log("Вихідний день");
    break;

  default:
    console.log("Інший день");
    break;
}
