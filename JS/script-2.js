let hour = 13;

hour = 5;

if (hour >= 8 && hour <= 12) {
  console.log("Доброго ранку");
} else if (hour > 12 && hour < 18) {
  console.log("Добрий день");
} else if (hour >= 18 && hour <= 22) {
  console.log("Добрий вечір");
} else if (hour > 22 && hour < 24) {
  console.log("На добраніч");
} else {
  console.log("Доброї ночі");
}

const day = 6;

switch (day) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;

  default:
    console.log("Такий день тижня не існує");
    break;
}
