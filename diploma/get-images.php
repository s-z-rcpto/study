<?php
// Шлях до папки з зображеннями
$directory = "data/feedbacks"; // Вказати назву папки
$images = array_diff(scandir($directory), array('.', '..')); // Отримати всі файли, крім "." і ".."

// Масив шляхів до зображень
$imagePaths = [];
foreach ($images as $image) {
  if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $image)) { // Фільтруємо тільки зображення
    $imagePaths[] = $directory . "/" . $image;
  }
}

// Передаємо дані як JSON для використання на клієнті
echo json_encode($imagePaths);
