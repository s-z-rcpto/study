# Встановіть Composer

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


# Кроки для читання xlsx у PHP

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
