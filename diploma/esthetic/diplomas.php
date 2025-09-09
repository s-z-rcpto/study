<?php
// Налаштування галереї
$images_dir = 'images/diploms/';

// Підтримувані формати зображень
$image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

// Функція для читання EXIF даних та отримання назви
function getImageTitle($image_path)
{
  $title = null;

  // Читаємо EXIF дані (працює тільки з JPEG)
  if (function_exists('exif_read_data')) {
    $exif = @exif_read_data($image_path);

    if ($exif !== false) {
      // Спробуємо знайти назву в різних полях EXIF
      if (!empty($exif['ImageDescription'])) {
        $title = trim($exif['ImageDescription']);
      }
    }
  }

  return $title;
}

// Генерація масиву зображень з локальних папок
$images = [];

// Читаємо вміст папки дипломів
if (is_dir($images_dir)) {
  $files = scandir($images_dir);

  foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;

    $file_info = pathinfo($file);
    $extension = strtolower($file_info['extension'] ?? '');

    // Перевіряємо чи це підтримуваний формат
    if (in_array($extension, $image_extensions)) {
      $path = $images_dir . $file;

      // Отримуємо назву з EXIF або використовуємо ім'я файлу
      $exif_title = getImageTitle($path);
      $alt_text = $exif_title ? $exif_title : "Диплом " . $file_info['filename'];

      $images[] = [
        'src' => $path,
        'alt' => $alt_text
      ];
    }
  }
}
?>

<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Подологічний кабінет та естетика — професійний догляд за стопами, лікування проблемних нігтів, косметологічні та естетичні послуги." />
  <title>Подологічний кабінет подології та естетики в м.Лозова&дипломи</title>
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

  <main>
    <h1>Мої дипломи та сертифікати</h1>

    <div class="gallery">
      <?php if (!empty($images)): ?>
        <?php foreach ($images as $image): ?>
          <img src="<?= htmlspecialchars($image['src']) ?>" alt="<?= htmlspecialchars($image['alt']) ?>" />
        <?php endforeach; ?>
      <?php else: ?>
        <p>Дипломи та сертифікати наразі недоступні.</p>
      <?php endif; ?>
    </div>
  </main>

  <div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <button class="nav-btn prev" id="prev">&#10094;</button>
    <img id="modalImg" src="" alt="" />
    <button class="nav-btn next" id="next">&#10095;</button>
  </div>

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