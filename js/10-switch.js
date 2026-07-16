const day = 3;

switch (day) {
  case 1:
    console.log("Понеділок");
    break; // завершуємо перевірку

  case 2: // else if (day === 2)
    console.log("Вівторок");
    break; // завершуємо перевірку

  case 3: // else if (day === 3)
    console.log("Середа");
    break;

  // Між операціями case немає {}

  default: // else
    // випадок за замовчуванням, коли жоден case не співпав
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
  // Для групи значень змінної day
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    // Виконуємо один код
    console.log("Будні дні");
    break; // І завершуємо перевірку та роботу

  case 6:
  case 7:
    console.log("Вихідні дні");
    break;

  //   default:
  //     break;
}

const status = 500;

switch (status) {
  case 400:
    console.log("Сервер отримав неповні або неправильні дані");
    break;

  case 401:
    console.log("Потрібна авторизація");
    break;

  case 403:
    console.log("Немає доступу");
    break;

  case 404:
    console.log("Сторінка не знайдена");
    break;

  default:
    console.log("Невідома помилка:", status);
    break;
}
