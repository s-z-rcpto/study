<?php
require 'src/functions.php';

$products = readProductsFromExcel('data/products.xlsx');
$categories = getUniqueCategories($products);

// Сортування товарів спочатку по категорії, потім по назві
if (!empty($products)) {
  usort($products, function ($a, $b) {
    // Спочатку порівнюємо категорії
    $categoryComparison = strcasecmp($a['category'] ?? '', $b['category'] ?? '');

    // Якщо категорії однакові, порівнюємо назви товарів
    if ($categoryComparison === 0) {
      return strcasecmp($a['name'] ?? '', $b['name'] ?? '');
    }

    return $categoryComparison;
  });
}

// Групуємо товари по категоріях
$productsByCategory = [];

if (!empty($products)) {
  foreach ($products as $product) {
    $category = $product['category'] ?? 'Без категорії';

    $productsByCategory[$category][] = $product;
  }
}
?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Зчитування інформації з Excel файлу</title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <section>
    <h1>Товари з Excel файлу</h1>

    <?php if (!empty($products)): ?>
      <table class="products-table">
        <thead>
          <tr>
            <th>Категорія</th>
            <th>Назва</th>
            <th class="text-right">Ціна, грн</th>
            <th>Опис</th>
          </tr>
        </thead>
        
        <tbody>
          <?php foreach ($products as $product): ?>
            <tr>
              <td><?= htmlspecialchars($product['category'] ?? '') ?></td>
              <td><?= htmlspecialchars($product['name'] ?? '') ?></td>
              <td class="text-right"><?= number_format((float)($product['price'] ?? 0), 2, ',', ' ') ?></td>
              <td><?= htmlspecialchars($product['description'] ?? '') ?></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php else: ?>
      <p>Товари не знайдено або помилка читання Excel файлу.</p>
    <?php endif; ?>
  </section>

  <section>
    <h1>Товари по категоріях</h1>

    <?php if (!empty($productsByCategory)): ?>
      <?php foreach ($productsByCategory as $category => $categoryProducts): ?>
        <div class="category-section">
          <h2 class="category-title"><?= htmlspecialchars($category) ?></h2>

          <div class="products-grid">
            <?php foreach ($categoryProducts as $product): ?>
              <div class="product-card">
                <div class="product-header">
                  <h3 class="product-name"><?= htmlspecialchars($product['name'] ?? '') ?></h3>
                  <div class="product-price"><?= number_format((float)($product['price'] ?? 0), 2, ',', ' ') ?> грн</div>
                </div>
                <div class="product-description"><?= htmlspecialchars($product['description'] ?? '') ?></div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endforeach; ?>
    <?php else: ?>
      <p>Товари не знайдено або помилка читання Excel файлу.</p>
    <?php endif; ?>
  </section>

  <script src="script.js"></script>
</body>

</html>