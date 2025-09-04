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
    return sendEmailWithSMTP($_ENV['EMAIL_FEEDBACK'], 'Форма зворотного зв\'язку', $body);
  } catch (Exception $e) {
    error_log("Error: {$e->getMessage()}");
    return false;
  }
}

// Перевірка методу запиту
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $phone = htmlspecialchars($_POST['phone']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $data = [
    "Ім'я: {$name}",
    "Телефон: {$phone}",
    "Електронна пошта: {$email}",
    "Повідомлення: {$message}",
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
