<?php
// Явне встановлення кодування UTF-8
header('Content-Type: text/html; charset=utf-8');

mb_internal_encoding('UTF-8');

// Імпорт класів PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Підключення автозавантажувача Composer
require 'vendor/autoload.php';

// Завантаження змінних середовища з .env
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

/**
 * Відправка листа через SMTP (з паролем)
 */
function sendEmailWithSMTP($to, $subject, $body)
{
  $mail = new PHPMailer(true);

  try {
    // Встановлення максимального часу виконання
    set_time_limit(20); // 5 хвилин замість 2 хвилин

    // Налаштування SMTP
    $mail->isSMTP();

    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USERNAME'];
    $mail->Password   = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int)$_ENV['SMTP_PORT'];

    // Налаштування кодування
    $mail->CharSet    = PHPMailer::CHARSET_UTF8;
    $mail->Encoding   = PHPMailer::ENCODING_BASE64;

    // Відправник і отримувач
    $mail->setFrom($_ENV['SMTP_USERNAME'], $_ENV['EMAIL_SERVICE_NAME']);
    $mail->addAddress($to);

    // Тіло листа
    $mail->Subject = $subject;
    $mail->Body    = $body;

    // Надсилання листа
    if (!$mail->send()) {
      return false;
    } else {
      return true;
    }
  } catch (Exception $e) {
    echo "Помилка відправлення: {$mail->ErrorInfo} ({$e})";
  }
}
