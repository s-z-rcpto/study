<?php
$num = 77;
$num2 = 25.27;
$sumvol = '+';
$str = "Hello";
$b = true;

// константи
// define("PI", 3.14);
const PI = 3.14;
echo PI;

echo "<p>Hello PHP, $str</p>";
echo '<p>Hello PHP, $str</p>';

echo "Numder = " . $num;

// + - * / % 
// ++ --

$a = 5;
$b = $a + 7; // 12

$b++; // 13
$b--; // 12

/*
$a = 5 + $b++; // 17
// b+1=13
*/
$a = 5 + ++$b; // 18  // b+1=13
echo "<br>";

// лолічні конструкції
$num = 5;
if ($num > 0) {
    echo "Число $num додатнє";
} else {
    echo "Число $num відємне";
}
echo "<br>";

$num = rand(-8, 10); // -8, -7 .. 9, 10
if ($num > 0) {
    echo "Число $num додатнє";
} elseif ($num < 0) {
    echo "Число $num відємне";
} else {
    echo "Число = 0";
}
echo "<br>";

$seson = rand(1, 5);
echo "Seson $seson <br>";
switch ($seson) {
    case 1:
        echo "Зима";
        break;
    case 2:
        echo "Весна";
        break;
    case 3:
        echo "Літо";
        break;
    case 4:
        echo "Осінь";
        break;
    default:
        echo "Такої пори року нема";
        break;
}

// Замість switch
$result = match ($seson) {
    1 => "Зима",
    2 => "Весна",
    3 => "Літо",
    4 => "Осінь",
    default => "Такої пори року нема"
};

echo "<br>$result";


$day = rand(1, 9);
echo "<br>День тижня: $day - ";

switch ($day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        echo "робочий";
        break;
    case 6:
    case 7:
        echo "вихідний";
        break;
    default:
        echo "такого дня нема";
        break;
}

// Замість switch
$result = match ($day) {
    1, 2, 3, 4, 5 => "робочий",
    6, 7 => "вихідний",
    default => "такого дня нема"
};
echo "<br>День тижня: $day - $result";
