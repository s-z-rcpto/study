<?php
require 'src/functions.php';

$products = readProductsFromExcel('data/services.xlsx');
$categories = getUniqueCategories($products);

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
  <meta
    name="description"
    content="Подологічний кабінет та естетика — професійний догляд за стопами, лікування проблемних нігтів, косметологічні та естетичні послуги." />
  <title>Подологічний кабінет подології та естетики в м.Лозова&ціни</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <header>
    <img src="images/photo.png" alt="Емблема" class="logo" />
    <button id="menu-button" class="menu-button">☰ Меню</button>
    <nav id="menu">
      <a href="index.html">Головна</a>
      <a href="services.html">Послуги</a>
      <a href="prices.php">Ціни</a>
      <a href="diplomas.php">Мої дипломи</a>
      <a href="contacts.html">Контакти</a>
    </nav>
  </header>

  <main class="content">
    <article class="card" role="region" aria-label="Прайс послуг">
      <section class="left">
        <?php if (!empty($productsByCategory)): ?>
          <?php foreach ($productsByCategory as $categoryName => $products): ?>
            <h1><?= htmlspecialchars($categoryName) ?></h1>

            <div class="subhead">
              <strong>Послуги</strong><span>Вартість, грн</span>
            </div>

            <div class="divider"></div>

            <ul class="price" aria-label="Список послуг і цін">
              <?php foreach ($products as $product): ?>
                <li class="row">
                  <span class="name"><?= htmlspecialchars($product['name'] ?? '') ?></span>
                  <span class="dots"></span>
                  <span class="price-val"><?= htmlspecialchars($product['price'] ?? '') ?></span>
                </li>
              <?php endforeach; ?>
            </ul>

            <div class="divider"></div>
          <?php endforeach; ?>
        <?php else: ?>
          <h1>Прайс послуг</h1>

          <div class="subhead">
            <strong>Послуги</strong><span>Вартість, грн</span>
          </div>

          <div class="divider"></div>

          <p>Послуги наразі недоступні або файл з даними не знайдено.</p>

          <div class="divider"></div>
        <?php endif; ?>
      </section>

      <section class="right" aria-hidden="true">
        <i class="sparkle"></i>
      </section>
    </article>
  </main>

  <footer>
    <div class="footer-container">
      <div class="footer-about">
        <h3>Про нас</h3>

        <p>
          Подологічний кабінет, що дбає про здоров’я та комфорт ваших ніг.
        </p>

        <p>Професійна допомога та сучасне обладнання.</p>
      </div>

      <div class="footer-contact">
        <h3>Контакти</h3>

        <p>Телефон: <a href="tel:+30506194963">+38 050 619 49 63</a></p>
        <p>
          Адреса:
          <a href="https://www.google.com/maps/place/м.+Лозова,+м-н+буд.41а">
            м. Лозова, м-н буд.41а</a>
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      &copy; 2025 Подологічний кабінет. Всі права захищені.
    </div>
  </footer>
  <!-- Кнопка -->
  <button id="scrollToTopBtn">⇧</button>

  <script src="script.js"></script>
</body>

</html>