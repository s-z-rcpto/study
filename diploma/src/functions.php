<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

function readProductsFromExcel($filePath)
{
  try {
    // Завантаження файлу
    $spreadsheet = IOFactory::load($filePath);
    $worksheet = $spreadsheet->getActiveSheet();

    // Отримання діапазону даних
    $dataArray = $worksheet->toArray(null, true, true, true);

    // Видалення заголовків (перший рядок)
    array_shift($dataArray);

    $products = [];

    // Перетворення масиву в структуру продуктів
    foreach ($dataArray as $row) {
      // Перевірка, чи не порожній рядок
      if (empty(array_filter($row))) continue;

      $product = [
        'id' => $row['A'] ?? null,
        'category' => $row['B'] ?? null,
        'name' => $row['C'] ?? null,
        'price' => $row['D'] ?? null,
        'description' => $row['E'] ?? null
      ];

      $products[] = $product;
    }

    return $products;
  } catch (Exception $e) {
    // Розширена обробка помилок
    error_log('Помилка читання Excel-файлу: ' . $e->getMessage());
    error_log('Деталі: ' . print_r($e, true));
    error_log('Шлях до файлу: ' . $filePath);

    // Додаткова перевірка файлу
    if (!file_exists($filePath)) {
      error_log('Файл не існує: ' . $filePath);
    }

    return [];
  }
}

function getUniqueCategories($products)
{
  // Фільтрація унікальних категорій з додатковою перевіркою
  $categories = array_column($products, 'category');
  $categories = array_filter($categories);

  return array_unique($categories);
}

function getProductsByCategory($products, $category)
{
  return array_filter($products, function ($product) use ($category) {
    return !empty($product['category']) && $product['category'] === $category;
  });
}

function getProductById($products, $productId)
{
  foreach ($products as $product) {
    if (!empty($product['id']) && $product['id'] == $productId) {
      return $product;
    }
  }

  return null;
}
