<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Основи роботи з РНР</h2>
    <p>Використання php вставки в html</p>
    <p>
        <?php
        echo "Hello world!";
        $num = rand(1, 100);
        $num *= 3; // $num = $num * 3
        ?>
    </p>
    <p>
        <?= $num ?>
    </p>
    <p>
        <?php
        include_once __DIR__ . '/osnovy.php';

        // include - якщо буде помилка, видасть попередження 
        // але скрипт працюватиме далі. Підключення щоразу.

        // require - якщо буде помилка, скрипт зупиниться.  
        // Підключення щоразу.

        // include_once - якщо буде помилка, видасть попередження 
        // але скрипт працюватиме далі. Підключення 1 раз.

        // require_once - якщо буде помилка, скрипт зупиниться.  
        // Підключення 1 раз. (Конфігурацій, бібліотек, класів)

        ?>
    </p>
    <h5>Кінець сторінки</h5>
</body>

</html>