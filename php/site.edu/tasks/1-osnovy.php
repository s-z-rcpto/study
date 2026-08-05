<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h3>Основи php</h3>

    <h5>Завдання 8</h5>
    <?php
    $num = rand(1, 100);
    echo "<p>$num</p>";
    if ($num % 2 == 0) {
        $num /= 2;
    } else {
        $num += 5;
    }
    echo "<p>$num</p>";
    ?>

    <h5>Завдання 9</h5>
    <?php
    $num1 = rand(1, 20);
    $num2 = rand(1, 20);
    $num3 = rand(1, 20);

    if ($num1 <= $num2 && $num2 <= $num3) {
        echo "$num1  $num2  $num3";
    } elseif ($num1 <= $num3 && $num3 <= $num2) {
        echo "$num1  $num3  $num2";
    } elseif ($num2 <= $num3 && $num3 <= $num1) {
        echo "$num2  $num3  $num1";
    } elseif ($num2 <= $num1 && $num1 <= $num3) {
        echo "$num2  $num1  $num3";
    } elseif ($num3 <= $num1 && $num1 <= $num2) {
        echo "$num3  $num1  $num2";
    } elseif ($num3 <= $num2 && $num2 <= $num1) {
        echo "$num3  $num2  $num1";
    }

    ?>
</body>

</html>