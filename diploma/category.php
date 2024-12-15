<?php
require 'src/functions.php';

$category = $_GET['category'] ?? '';
$products = readProductsFromExcel('data/products.xlsx');
$categoryProducts = getProductsByCategory($products, $category);
?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Товари категорії: <?= htmlspecialchars($category) ?></title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1>Товари категорії: <?= htmlspecialchars($category) ?></h1>

    <a href="index.php" class="back-link">← Назад до категорій</a>

    <div class="products">
      <?php foreach ($categoryProducts as $product): ?>
        <div class="product"
          data-id="<?= htmlspecialchars($product['id']) ?>"
          data-name="<?= htmlspecialchars($product['name']) ?>"
          data-price="<?= htmlspecialchars($product['price']) ?>"
          data-description="<?= htmlspecialchars($product['description']) ?>">

          <a href="product.php?id=<?= $product['id'] ?>">
            <h2><?= htmlspecialchars($product['name']) ?></h2>

            <p>Ціна: <?= number_format($product['price'], 2) ?> грн</p>
          </a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <script src="script.js"></script>
</body>

</html>