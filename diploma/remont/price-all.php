<?php
require 'src/functions.php';

$products = readProductsFromExcel('data/services.xlsx');

?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Всі наші послуги</title>

  <link
    href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;500;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <header class="header">
    <div class="logo">Зробимо ремонт</div>
    <nav class="nav">
      <ul>
        <li><a href="index.php">🏠 На головну</a></li>
      </ul>
    </nav>
  </header>

  <!-- ТУТ ВЖЕ ПОЧИНАЄТЬСЯ КОНТЕНТ -->
  <section id="price" class="section">
    <h2>Всі наші послуги та ціни</h2>
    <table class="price-table">
      <thead>
        <tr>
          <th>Вид робіт</th>
          <th>Опис</th>
          <th>Ціна (грн)</th>
        </tr>
      </thead>
      <tbody>
        <?php if (!empty($products)): ?>
          <?php foreach ($products as $product): ?>
            <tr>
              <td><?= htmlspecialchars($product['name'] ?? '') ?></td>
              <td><?= htmlspecialchars($product['description'] ?? '') ?></td>
              <td><?= htmlspecialchars($product['price'] ?? '') ?></td>
            </tr>
          <?php endforeach; ?>
        <?php else: ?>
          <tr>
            <td colspan="3" style="text-align: center;">Немає послуг для відображення на головній сторінці.</td>
          </tr>
        <?php endif; ?>
      </tbody>
    </table>
  </section>
</body>

</html>