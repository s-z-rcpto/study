<?php
function info(string $name, int $year)
{
    return "Мене звати $name, мені: " . (date("Y") - $year) . " років";
}

function info2(string $name, int $year = 2000)
{
    return "Мене звати $name, мені: " . (date("Y") - $year) . " років";
}

function add3(int|float &$num)
{
    $num += 3;
    print_r($num);
}

function sum(int|float ...$nums)
{
    $rezult = 0;
    foreach ($nums as $val) {
        $rezult += $val;
    }
    return $rezult;
}
