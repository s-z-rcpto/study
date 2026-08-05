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
