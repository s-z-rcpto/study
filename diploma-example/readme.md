# Використання Virtual Hosts

Якщо вам потрібно працювати у WAMP з декількома папками одночасно, краще налаштувати віртуальні хости:

1. У файлі httpd-vhosts.conf (можна знайти через меню WAMP: Apache > `httpd-vhosts.conf`) додайте:
```
<VirtualHost *:80>
    DocumentRoot "D:/MyProjects"
    ServerName myprojects.local
    <Directory "D:/MyProjects/">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
2. Додайте запис до файлу hosts (у папці `C:\Windows\System32\drivers\etc`):
```
127.0.0.1 myprojects.local
```

3. Перезапустіть WAMP.

Тепер ви зможете доступитися до ваших файлів за адресою:
```
http://myprojects.local
```

# Встановлення Composer

## Завантажте інсталятор Composer:
1. Перейдіть на офіційний сайт: [getcomposer.org/download](https://getcomposer.org/download).
2. Завантажте `Composer-Setup.exe`.

## Встановіть Composer:
1. Під час установки переконайтеся, що обираєте PHP-інтерпретатор, який використовується у вашій системі (наприклад, з WAMP, XAMPP або іншого веб-сервера).
2. Інсталятор додасть Composer у змінні середовища `PATH`.

## Перевірте інсталяцію:
1. Після установки відкрийте новий командний рядок і введіть:
   ```bash
   composer --version
   ```
2. Натисніть `Enter` щоб побачити версію Composer.


# Кроки для читання `xlsx` у PHP

## 1. Встановіть PhpSpreadsheet

Використовуйте Composer, щоб встановити бібліотеку:
```bash
composer require phpoffice/phpspreadsheet
```

## 2. Завантажте бібліотеку у ваш проєкт

Переконайтеся, що ви підключили автозавантажувач Composer у вашому PHP-файлі:
```bash
require 'vendor/autoload.php';
```

# Скрол до елента із закріпленим `header`

## Спосіб 1: CSS

```
html {
  scroll-behavior: smooth;
} // для плавного скролу

.section {
  scroll-margin-top: 140px; /* Висота хедера */
} // для корекції скролу
```

## Спосіб 2: JS
```
const header = document.querySelector('header')
const scrollLinks = document.querySelectorAll(".scroll-link");

for (const link of scrollLinks) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Забороняє стандартну поведінку посилання

    const targetId = link.getAttribute("href"); // Отримує ID цільового елемента

    const targetElement = document.querySelector(targetId);
    // querySelector замість getElementById 
    // тому що в targetId буде "#about", а не "about"

    // Обчислення позиції з урахуванням хедера
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - header.offsetHeight; // Висота хедера

    // Плавна прокрутка
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
```

# Кнопка `Вгору`

1. Встановіть кнопці значення `display: none`. Можна навіть прямо в HTML за допомогою атрибуту `style`. 
2. У скрипті JS знайти кнопку за ID або класом.
3. Додайте обробник натискання з таким кодом:
```
window.scrollTo({
  top: 0,
  behavior: "smooth", // Плавний скрол
});
```

4. Додати подію, яка буде відслідковувати скрол й показувати кнопку, коли вона буде потрібною:
```
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block"; // Показуємо кнопку
  } else {
    scrollToTopButton.style.display = "none"; // Ховаємо кнопку
  }
});
```

# Share button

## Telegram

```
window.open(
  `https://t.me/share/url?url=${encodeURIComponent(
    "#" // або location.origin
  )}&text=${encodeURIComponent(`${message}`)}`,
  "_blank"
);
```

## Viber

```
window.open(
  `viber://forward?text=${encodeURIComponent(text)}`,
  '_blank',
);
```
