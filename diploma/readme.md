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
