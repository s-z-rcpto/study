<?php

require 'vendor/autoload.php';
require 'src/email-functions.php';

use Dotenv\Dotenv;

// Завантаження змінних середовища з .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

function sendEmail($body)
{
  try {

    return sendEmailWithSMTP($_ENV['EMAIL_FEEDBACK'], "Нове замовлення", $body);
  } catch (Exception $e) {
    error_log("Error: {$e->getMessage()}");
    return false;
  }
}

// Перевірка методу запиту
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $lastName = htmlspecialchars($_POST['lastName']);
  $firstName = htmlspecialchars($_POST['firstName']);
  $middleName = htmlspecialchars($_POST['middleName']);
  $phone = htmlspecialchars($_POST['phone']);
  $email = htmlspecialchars($_POST['email']);
  $city = htmlspecialchars($_POST['city']);
  $department = htmlspecialchars($_POST['department']);
  $comment = htmlspecialchars($_POST['comment']);
  $products = htmlspecialchars($_POST['products']);

  $data = [
    "Прізвище: {$lastName}",
    "Ім'я: {$firstName}",
    "По батькові: {$middleName}",
    "Телефон: {$phone}",
    "Електронна пошта: {$email}",
    "Місто: {$city}",
    "Відділення: {$department}",
    "Коментар: {$comment}",
    "Замовлення:\n{$products}",
  ];

  $body = implode("\n", $data);

  if (sendEmail($body)) {
    echo 'success';
  } else {
    echo 'error';
  }
} else {
  http_response_code(405);
  echo 'Method Not Allowed';
}
