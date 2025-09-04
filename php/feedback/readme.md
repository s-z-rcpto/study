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
    1. Знайдіть потрібну папку (`feedback`) в розділі Explorer редактора коду.
    2. Клацніть по знайденій папці правою кнопкою миші.
    3. У контекстному меню виберіть пункт `Open in Integrated Terminal`.

2. У терміналі.
    1. Відкрийте термінал за допомогою головного меню або сполучення клавіш ``Ctrl + Shift + ` ``
    2. Введіть команду `cd php/feedback`.

# Використання файла `.env` у PHP

## 1. Встановіть `vlucas/phpdotenv`

Використовуйте Composer, щоб встановити бібліотеку:

```
composer require vlucas/phpdotenv
```

Вона автоматично додається до вашого проекту в папку `vendor`.

## 2. Завантажте бібліотеку у ваш проєкт

```
use Dotenv\Dotenv;
```

Переконайтеся, що ви підключили автозавантажувач Composer у вашому PHP-файлі:

```
require 'vendor/autoload.php';
```

## 3. Завантажте дані з файла `.env`

```
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();
```

## 4. Використовуйте змінні

```
$db_host = $_ENV['SMTP_HOST'];
$db_user = $_ENV['SMTP_USER'];
$db_pass = $_ENV['SMTP_PASS'];
```

# Надсилання електронної пошти у PHP

## 1. Встановіть `PHPMailer`

Використовуйте Composer, щоб встановити бібліотеку:

```bash
composer require phpmailer/phpmailer
```

Вона автоматично додається до вашого проекту в папку `vendor`.

## 2. Завантажте бібліотеку у ваш проєкт

```
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
```

Переконайтеся, що ви підключили автозавантажувач Composer у вашому PHP-файлі:

```
require 'vendor/autoload.php';
```
