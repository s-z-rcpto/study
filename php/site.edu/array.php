<?php
$arr = [3, 8, 31, 7, 34, 5, 11];
$arr2 = [33, 51, 5.24, true, "Hello", 7, 2];

var_dump($arr);
echo "<br>";
print_r($arr2);
echo "<br>";

$arr2[8] = 88;
$arr2[] = 5;
print_r($arr2);
echo "<br>";

for ($i = 0; $i < count($arr); $i++) {
    echo $arr[$i] . " ";
}
echo "<br>";

foreach ($arr2 as $val) {
    echo $val . " ";
}
echo "<br>";

foreach ($arr2 as $key => $val) {
    $arr2[$key] = 1;
}
print_r($arr2);
echo "<br>";

// Не парні елементи масиву замінити на 0
// Порахувати суму елементів масиву з новими значеннями
foreach ($arr as $key => $val) {
    // 5 (2 2 1)
    if ($val % 2 === 1) {
        $arr[$key] = 0;
    }
}
print_r($arr);

$suma = 0;
foreach ($arr as $val) {
    $suma += $val;
}
echo "<br>Сума ел. масиву: " . $suma;

echo "<h4>Багатовимірні масиви</h4>";
// багатовимірні масиви
$arr3 = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3],
    [4, 5, 6, 7, 8]
];

foreach ($arr3 as $valArr) {
    foreach ($valArr as $val) {
        echo $val . " ";
    }
    echo "<br>";
}
echo "<br>";
print_r($arr3);

// Створити масив 5х8 з випадкових чисел від 10 до 99
// Вивести його у вигляді таблиці
$arr4 = [];

for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 8; $j++) {
        $arr4[$i][$j] = rand(10, 99);
    }
}

echo "<table>";
foreach ($arr4 as $valRow) {
    echo "<tr>";
    foreach ($valRow as $val) {
        echo "<td>$val</td>";
    }
    echo "</tr>";
}
// echo "</table>";

// Сума елементів кожного стовпця
$arrSuma = [];
for ($i = 0; $i < count($arr4[0]); $i++) {
    $arrSuma[$i] = 0;
}

for ($col = 0; $col < count($arr4[0]); $col++) {
    for ($row = 0; $row < count($arr4); $row++) {
        $arrSuma[$col] += $arr4[$row][$col];
    }
}

echo "<tr>";
foreach ($arrSuma as $val) {
    echo "<td><b>$val</b></td>";
}
echo "</tr>";
echo "</table>";

echo "<h4>Асоціативний масив</h4>";
$arrAges = ["Саша" => 31, "Коля" => 28, "Іра" => 29, "Оля" => 25];

print_r($arrAges);
echo "<br>";

foreach ($arrAges as $key => $val) {
    echo "$key - $val <br>";
}

foreach ($arrAges as $key => $val) {
    $arrAges[$key]++;
}
print_r($arrAges);
echo "<br>";

// Знайти наймолодшого з масиву
$minAge = PHP_INT_MAX; // записуємо найбільше можливе число в типі int
$minName = "";
foreach ($arrAges as $key => $val) {
    if ($minAge > $val) {
        $minAge = $val;
        $minName = $key;
    }
}
echo "$minName наймолодший(ша), йому(їй) $minAge років<br>";
