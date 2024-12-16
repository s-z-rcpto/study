<?php
require 'src/functions.php';

$productId = $_GET['id'] ?? '';
$products = readProductsFromExcel('data/products.xlsx');
$product = getProductById($products, $productId);

if (!$product) {
  die('Товар не знайдено');
}
?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title><?= htmlspecialchars($product['name']) ?></title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <div class="product-details"
      data-id="<?= htmlspecialchars($product['id']) ?>"
      data-name="<?= htmlspecialchars($product['name']) ?>"
      data-price="<?= htmlspecialchars($product['price']) ?>"
      data-description="<?= htmlspecialchars($product['description']) ?>">

      <h1><?= htmlspecialchars($product['name']) ?></h1>

      <p><strong>Категорія:</strong> <?= htmlspecialchars($product['category']) ?></p>
      <p><strong>Ціна:</strong> <?= number_format($product['price'], 2) ?> грн</p>
      <p><strong>Опис:</strong> <?= htmlspecialchars($product['description']) ?></p>
    </div>

    <div class="navigation">
      <a href="category.php?category=<?= urlencode($product['category']) ?>" class="back-link">
        ← Назад до категорії
      </a>

      <a href="index.php" class="home-link">На головну</a>
    </div>
  </div>

  <script src="script.js"></script>
</body>

</html>