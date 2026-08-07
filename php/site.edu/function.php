<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    require_once __DIR__ . "/lib.php";

    echo info("Ольга", 1990) . "<br>";
    echo info("Іван", 1995) . "<br>";

    echo info2("Павло", 1995) . "<br>";
    echo info2("Олена") . "<br>";

    $number = 12;
    add3($number);
    echo "($number)<br>";

    echo sum(2, 6, 5.2, 8) . "<br>";
    echo sum(2, 6, 5.2, 8, 2.4, 7.1, 3) . "<br>";

    ?>
</body>

</html>