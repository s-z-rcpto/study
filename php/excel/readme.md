# Використання Virtual Hosts

Якщо вам потрібно працювати у XAMPP з декількома папками одночасно, краще налаштувати віртуальні хости (псевдоніми):

1. У файлі httpd.conf (можна знайти через меню XAMPP: Apache > Config > `Apache (httpd.conf)`) додайте:

```
Alias /study "D:/2025.132/study/php"

<Directory "D:/study/php">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Require all granted
</Directory>
```

2. Перезапустіть Apache в XAMPP.

Тепер ви зможете доступитися до ваших файлів за адресою:

```
http://localhost/study
```

# Встановлення Composer

## Завантажте інсталятор Composer:

1. Перейдіть на офіційний сайт: [getcomposer.org/download](https://getcomposer.org/download).
2. Завантажте `Composer-Setup.exe`.

## Встановіть Composer:

1. Виберіть `Install for all users (recommended)`.
2. Дозвольте вносити зміни на пристрої.
3. Встановіть опцію `Developer mode`.
4. Вкажіть шлях до PHP-інтерпретатор, наприклад `C:\xampp\php\php.exe`.
5. Інсталятор додасть Composer у змінні середовища `PATH`, тому перезавантажте комп'ютер після завершення встановлення.

## Перевірте інсталяцію:

1. Після установки відкрийте новий командний рядок і введіть:
   ```bash
   composer --version
   ```
2. Натисніть `Enter` щоб побачити версію Composer.

Приклад успішної відповіді:

```bash
Composer version 2.8.11 2025-08-21 11:29:39
PHP version 8.2.12 (C:\Programs\xampp\php\php.exe)
Run the "diagnose" command to get more detailed diagnostics output.
```

# Підготовка до встановлення додаткових бібліотек

У терміналі потрібно перейти у папку з потрібним проєктом. Це можна зробити 2 способами:

1. За допомогою інструментів редактора коду.
    1. Знайдіть потрібну папку (`excel`) в розділі Explorer редактора коду.
    2. Клацніть по знайденій папці правою кнопкою миші.
    3. У контекстному меню виберіть пункт `Open in Integrated Terminal`.

2. У терміналі.
    1. Відкрийте термінал за допомогою головного меню або сполучення клавіш ``Ctrl + Shift + ` ``
    2. Введіть команду `cd php/excel`.

Для встановлення бібліотеки роботи з електронними таблицями потрібно активувати 2 розширення в XAMPP. Для цього:
1. Через панель XAMPP відкрийте файл `php.ini` (натисніть `Config` → `PHP (php.ini)`).
2. Знайдіть ці рядки:
```bash
;extension=gd
;extension=zip
```
3. Видаліть символ `;` на початку щоб розкоментувати. Має лишитися так:
```bash
extension=gd
extension=zip
```
4. Збережіть файл та перезапустіть Apache в XAMPP

# Читання `xlsx` у PHP

## 1. Встановіть `PhpSpreadsheet`

Використовуйте Composer, щоб встановити бібліотеку:

```bash
composer require phpoffice/phpspreadsheet
```

Вона автоматично додається до вашого проекту в папку `vendor`.

## 2. Завантажте бібліотеку у ваш проєкт

```
use PhpOffice\PhpSpreadsheet\IOFactory;
```

Переконайтеся, що ви підключили автозавантажувач Composer у вашому PHP-файлі:

```
require 'vendor/autoload.php';
```