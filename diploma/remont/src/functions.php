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
        'id' => trim($row['A'] ?? ''),
        'name' => trim($row['B'] ?? ''),
        'description' => trim($row['C'] ?? ''),
        'price' => trim($row['D'] ?? ''),
        'showOnMain' => trim($row['E'] ?? '')
      ];

      // Додаткова перевірка - пропускаємо рядки з порожніми ключовими полями після trim
      if (empty($product['name']) && empty($product['price'])) {
        continue;
      }

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
