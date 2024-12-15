<?php
// Обробка даних форми
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : null;
$items = [
    ["id" => 1, "name" => "Свічка ручної роботи", "price" => 150],
    ["id" => 2, "name" => "Ваза з кераміки", "price" => 300],
    ["id" => 3, "name" => "Блокнот у шкіряному переплеті", "price" => 250],
];
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин ручної роботи</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }
        header {
            background: #333;
            color: white;
            padding: 1em 0;
            text-align: center;
        }
        .container {
            padding: 1em;
        }
        .item {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            background: white;
        }
        .item h3 {
            margin: 0 0 5px;
        }
    </style>
</head>
<body>
<header>
    <h1>Магазин ручної роботи</h1>
</header>
<div class="container">
    <!-- Виведення привітання -->
    <?php if ($name): ?>
        <p>Привіт, <?= $name ?>! Ласкаво просимо до нашого магазину.</p>
    <?php else: ?>
        <form method="POST">
            <label for="name">Ваше ім'я:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Підтвердити</button>
        </form>
    <?php endif; ?>

    <h2>Наші товари</h2>
    <!-- Виведення списку товарів -->
    <?php foreach ($items as $item): ?>
        <div class="item">
            <h3><?= htmlspecialchars($item['name']) ?></h3>
            <p>Ціна: <?= $item['price'] ?> грн</p>
        </div>
    <?php endforeach; ?>
</div>
</body>
</html>
