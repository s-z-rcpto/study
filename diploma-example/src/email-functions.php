<?php
// Явне встановлення кодування UTF-8
header('Content-Type: text/html; charset=utf-8');

mb_internal_encoding('UTF-8');

// Імпорт класів PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\OAuth;
use League\OAuth2\Client\Provider\Google;

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

    // Додаткові налаштування для надійності
    $mail->SMTPOptions = array(
      'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );

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
      return false;
    }
  } catch (Exception $e) {
    echo "Email could not be sent. Error: {$mail->ErrorInfo} ({$e})";
  }
}

// Метод генерації OAuth токену
function generateOAuthToken($provider)
{
  // Спочатку потрібно отримати refresh token 
  // Це робиться ONE-TIME через окремий скрипт автентифікації
  $accessToken = $provider->getAccessToken('refresh_token', [
    'refresh_token' => $_ENV['OAUTH_REFRESH_TOKEN']
  ]);

  return new OAuth(
    $_ENV['OAUTH_USERNAME'],
    $_ENV['OAUTH_CLIENT_ID'],
    $_ENV['OAUTH_CLIENT_SECRET'],
    $accessToken->getToken()
  );
}

/**
 * Відправка листа через OAuth
 */
function sendEmailWithOAuth($to, $subject, $body)
{
  $mail = new PHPMailer(true);

  $provider = new Google([
    'clientId'     => $_ENV['OAUTH_CLIENT_ID'],
    'clientSecret' => $_ENV['OAUTH_CLIENT_SECRET'],
    'redirectUri'  => $_ENV['OAUTH_REFRESH_TOKEN']
  ]);

  try {
    // Налаштування SMTP
    $mail->isSMTP();

    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465; // (int)$_ENV['SMTP_PORT'];
    $mail->AuthType   = 'XOAUTH2';

    $mail->setOAuth(generateOAuthToken($provider));

    // Налаштування кодування
    $mail->CharSet    = PHPMailer::CHARSET_UTF8;
    $mail->Encoding   = PHPMailer::ENCODING_BASE64;

    $mail->SMTPOptions = array(
      'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );

    // OAuth2 налаштування
    // $mail->setOAuth(new OAuth([
    //   'provider' => new Google([
    //     'clientId'     => $_ENV['OAUTH_CLIENT_ID'],
    //     'clientSecret' => $_ENV['OAUTH_CLIENT_SECRET'],
    //   ]),
    //   'clientId'     => $_ENV['OAUTH_CLIENT_ID'],
    //   'clientSecret' => $_ENV['OAUTH_CLIENT_SECRET'],
    //   'refreshToken' => $_ENV['OAUTH_REFRESH_TOKEN'],
    //   'userName'     => $_ENV['OAUTH_USERNAME'],
    // ]));

    // Відправник і отримувач
    $mail->setFrom($_ENV['OAUTH_USERNAME'], $_ENV['EMAIL_SERVICE_NAME']);
    $mail->addAddress($to);

    // Тіло листа
    $mail->Subject = $subject;
    $mail->Body    = $body;

    // Надсилання листа
    if (!$mail->send()) {
      return false;
    } else {
      return false;
    }
  } catch (Exception $e) {
    error_log("Error: {$e->getMessage()}");
    error_log("Error: {$mail->ErrorInfo}");

    echo "Email could not be sent. Error: {$mail->ErrorInfo} ({$e})";
  }
}

// Використання функцій
// sendEmailWithSMTP('recipient@example.com', 'Test Subject', 'Test Body');
// sendEmailWithOAuth('recipient@example.com', 'Test Subject', 'Test Body');
