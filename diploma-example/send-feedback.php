<?php

require 'vendor/autoload.php';
require 'src/email-functions.php';

use Dotenv\Dotenv;

// Завантаження змінних середовища з .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

function sendEmail($subject, $name, $phone, $email, $message)
{
  try {
    $body = "Ім'я: {$name}\nТелефон: {$phone}\nЕлектронна пошта: {$email}\nПовідомлення:\n{$message}";

    // return sendEmailWithSMTP($_ENV['EMAIL_FEEDBACK'], $subject, $body);
    return sendEmailWithOAuth($_ENV['EMAIL_FEEDBACK'], $subject, $body);
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

  if (sendEmail('Форма зворотного зв\'язку', $name, $phone, $email, $message)) {
    echo 'success';
  } else {
    echo 'error';
  }
} else {
  http_response_code(405);
  echo 'Method Not Allowed';
}
