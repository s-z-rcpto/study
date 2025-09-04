<?php
// Налаштування галереї
$images_dir_400 = 'images/400/';
$images_dir_800 = 'images/800/';

// Підтримувані формати зображень
$image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

// Функція для читання EXIF даних та отримання назви
function getImageTitle($image_path) {
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

// Читаємо вміст папки 400
if (is_dir($images_dir_400)) {
  $files = scandir($images_dir_400);
  
  foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;
    
    $file_info = pathinfo($file);
    $extension = strtolower($file_info['extension'] ?? '');
    
    // Перевіряємо чи це підтримуваний формат
    if (in_array($extension, $image_extensions)) {
      $small_path = $images_dir_400 . $file;
      $large_path = $images_dir_800 . $file;
      
      // Отримуємо назву з EXIF або використовуємо ім'я файлу
      $exif_title = getImageTitle($small_path);
      $alt_text = $exif_title ? $exif_title : "Зображення " . $file_info['filename'];
      
      $images[] = [
        'src' => $small_path,
        'src_large' => file_exists($large_path) ? $large_path : $small_path,
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

  <title>Горизонтальна галерея</title>

  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <div class="container">
    <h1>Горизонтальна галерея</h1>

    <div class="gallery">
      <button id="btnLeft" class="gallery-btn gallery-btn-left">‹</button>

      <button id="btnRight" class="gallery-btn gallery-btn-right">›</button>

      <div class="images-row" id="imagesRow">
        <!-- Зображення будуть додаватися тут через JavaScript -->
      </div>
    </div>

    <!-- Модальне вікно для повного перегляду -->
    <div id="imageModal" class="modal">
      <div class="modal-content">
        <button class="modal-close">&times;</button>

        <div class="modal-image" id="modalImage"></div>
        <div class="modal-info" id="modalInfo">Зображення</div>
      </div>
    </div>
  </div>

  <script>
    // Передаємо дані з PHP в JavaScript
    const imageUrls = <?php echo json_encode($images); ?>;
  </script>

  <script src="index.js"></script>
</body>

</html>