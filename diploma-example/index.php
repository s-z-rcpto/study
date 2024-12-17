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

  <!-- Підключення Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
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

  <section>
    <form id="feedbackForm">
      <h2>Зворотний зв'язок</h2>
      <label for="name">Ім'я</label>
      <input type="text" id="name" name="name" required>

      <label for="phone">Телефон</label>
      <input type="tel" id="phone" name="phone" required>

      <label for="email">Електронна пошта</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Ваше питання</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Відправити</button>
      <p id="responseMessage" style="color: green; display: none;">Повідомлення надіслано!</p>
    </form>
  </section>

  <section class="container example-1">
    <div class="text-image-container">
      <div class="text">
        <div class="text-container">
          <h2>Заголовок тексту</h2>
          <p>Це приклад тексту, який напливає на зображення з ефектом вицвітання.</p>
        </div>
      </div>

      <div class="image">
        <img src="assets/images/188383.jpg" alt="Приклад зображення" />
      </div>
    </div>
  </section>

  <section class="container example-2">
    <div class="text-image-container">
      <div class="text">
        <h2>Заголовок тексту</h2>
        <p>Це приклад тексту, який напливає на зображення з ефектом вицвітання.</p>
      </div>

      <div class="image">
        <img src="assets/images/188383.jpg" alt="Приклад зображення" />
      </div>
    </div>
  </section>

  <div class="container custom-carousel-container">
    <div class="custom-carousel-track" id="custom-carousel-track"></div>
    <div class="custom-carousel-buttons">
      <button id="custom-prev-btn">❮</button>
      <button id="custom-next-btn">❯</button>
    </div>
  </div>

  <div class="container mt-5">
    <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" id="carousel-inner">
        <!-- Динамічний контент -->
      </div>

      <!-- Кнопки навігації -->
      <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <script src="script.js"></script>

  <!-- Підключення Bootstrap і JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="carousel-bootstrap.js"></script>
  <script src="carousel.js"></script>
</body>

</html>