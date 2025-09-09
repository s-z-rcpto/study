<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/exception.php';
require __DIR__ . '/phpmailer/src/phpmailer.php';
require __DIR__ . '/phpmailer/src/smtp.php';

header('Content-Type: application/json; charset=UTF-8');

// ===== Налаштування =====
$toEmail = "romkinaanna@gmail.com"; // <- ваша пошта, куди надійде лист
$fromSMTP = "romkinaanna@gmail.com"; // логін SMTP, ваша пошта, звідки надсилаємо лист 
$fromName = "Website Form";

// SMTP сервер
$smtpHost = "smtp.gmail.com"; // Залежить від вашої поштової служби
$smtpUser = "romkinaanna@gmail.com"; // Ваша пошта
$smtpPass = "kcza sxfb dbfx ehql"; // ваш пароль або App Password
$smtpPort = 587; // Використовуйте 587 або 465 для SMTPS

// Антиспам
$honeypot = trim($_POST['website'] ?? '');
if($honeypot !== ''){
  echo json_encode(["ok"=>false, "message"=>"Spam detected."]);
  exit;
}

// Дані форми
$name    = trim($_POST['name']    ?? '');
$phone   = trim($_POST['phone']   ?? '');
$message = trim($_POST['coment'] ?? '');

if(!$name || !$phone ){
  echo json_encode(["ok"=>false, "message"=>"Будь ласка, заповніть всі обов’язкові поля."]);
  exit;
}

try {
    $mail = new PHPMailer(true);

    // SMTP
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // або PHPMailer::ENCRYPTION_SMTPS
    $mail->Port       = $smtpPort;

    // Від кого
    $mail->setFrom($fromSMTP, $fromName);
    // Кому
    $mail->addAddress($toEmail);

    // Тема і тіло
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "Контакт з сайту";
    $body  = "Ім’я замовника: {$name}\n";
    $body .= "Телефон: {$phone}\n";
   
    $body .= "----------------------------------\n";
    $body .= $message;

    $mail->Body = $body;

    $mail->send();
    echo json_encode(["ok"=>true, "message"=>"Дякуємо! Повідомлення надіслано."]);
} catch (Exception $e) {
    echo json_encode(["ok"=>false, "message"=>"Помилка: {$mail->ErrorInfo}"]);
}

