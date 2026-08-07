<?php
$str = "lorem ipsum amet dolor sit amet consectetur adipisicing amet elit";
$str2 = "Привіт світ";
$str3 = "HELLO";

$str[6] = "1";
echo $str . "<br>";

// Зміна регістра літер
echo strtoupper($str) . "<br>";
echo mb_strtoupper($str2) . "<br>";
echo strtolower($str3) . "<br>";

// Зміна регістра першої літери
echo ucfirst($str) . "<br>";
echo lcfirst($str3) . "<br>";

// Кожне слово з великої літери
echo ucwords($str) . "<br>";

// Довжина рядка
echo strlen($str) . "<br>";

// Отримати підрядок
echo substr($str, 12, 5) . "<br>";

// Заміна всіх входжень рядка пошуку на радок заміни
echo str_replace(['o', 't'], ['0', 'T'], $str) . "<br>";

// Повертає позицію першого входження підрядка
echo strpos($str, "amet") . "<br>";

// Повертає позицію останього входження підрядка
echo strrpos($str, "amet") . "<br>";

// Розбити рядок за допомогою роздільника
$rezult = explode(' ', $str);
print_r($rezult);

// Об'єднати елементи масиву у рядок за допомогою роздільника
echo implode('_', $rezult) . "<br>";

$arr = range(1, 10);
echo implode(', ', $arr) . "<br>";

// Перетворює рядок на масив по вказаній кількості символів
$str4 = "abcdef";
$rezult = str_split($str4, 2);
echo implode(', ', $rezult) . "<br>";

// Видалення пробілів або інших не видимих символів на початку та
// вкінці рядка
echo "(" . trim("  Hello world  ") . ")";
echo "(" . "  Hello world  " . ")";
