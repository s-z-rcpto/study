<?php
require 'src/functions.php';

$products = readProductsFromExcel('data/products.xlsx');
$categories = getUniqueCategories($products);
?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Інтернет-магазин</title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1>Категорії товарів</h1>

    <div class="categories">
      <?php foreach ($categories as $category): ?>
        <div class="category">
          <a href="category.php?category=<?= urlencode($category) ?>">
            <?= htmlspecialchars($category) ?>
          </a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <script src="script.js"></script>
</body>

</html>