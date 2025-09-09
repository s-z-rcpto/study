<?php
require 'src/functions.php';

$products = readProductsFromExcel('data/services.xlsx');

$mainProducts = array_filter($products, function ($product) {
  return isset($product['showOnMain']) && $product['showOnMain'] == 1;
});

// Налаштування галереї
$images_dir = 'images/examples/';

// Підтримувані формати зображень
$image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

// Функція для читання EXIF даних та отримання назви
function getImageTitle($image_path)
{
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

// Читаємо вміст папки дипломів
if (is_dir($images_dir)) {
  $files = scandir($images_dir);

  foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;

    $file_info = pathinfo($file);
    $extension = strtolower($file_info['extension'] ?? '');

    // Перевіряємо чи це підтримуваний формат
    if (in_array($extension, $image_extensions)) {
      $path = $images_dir . $file;

      // Отримуємо назву з EXIF або використовуємо ім'я файлу
      $exif_title = getImageTitle($path);
      $alt_text = $exif_title ? $exif_title : "Результат " . $file_info['filename'];

      $images[] = [
        'src' => $path,
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
  <meta
    name="description"
    content="Зробимо якісний ремонт квартир, будинків, офісів і магазинів у Києві та області. 
      Косметичний і капітальний ремонт, електромонтажні та сантехнічні роботи, оздоблення стін,
       підлоги й стелі, перепланування, монтаж гіпсокартону. Досвід з 2000 року, професійна команда, 
       прозорі ціни та строки, безкоштовна консультація й кошторис. Вікна, меблі." />

  <title>
    Ремонт квартир, будинків, офісів у Києві та області | Косметичний і
    капітальний ремонт, електрика, сантехніка
  </title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;500;700&display=swap"
    rel="stylesheet" />

  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <!-- ШАПКА -->
  <header class="header">
    <div class="logo">Зробимо ремонт</div>
    <nav class="nav">
      <ul>
        <li>
          <a href="tel:+380936336344">+38&nbsp;093&nbsp;633&nbsp;63&nbsp;44</a>
        </li>
        <li><a href="#price">Наші послуги та ціни</a></li>
        <li><a href="#works">Наші роботи</a></li>
        <li><a href="#about">Про нас</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </nav>
  </header>

  <!-- ГОЛОВНИЙ ЕКРАН -->
  <section class="hero">
    <h1>Якісний ремонт</h1>
    <p>Ремонтуємо квартири під ключ</p>
    <p>Якісно працюємо з 2000 року</p>
    <p>Працюємо в Києві та області</p>
    <p>Безкоштовно зробимо кошторис</p>
    <p>Видихайте</p>
    <p>Ми допоможемо Вам з ремонтом</p>

    <a href="#form" class="btn">Замовити консультацію</a>
  </section>
  <br />
  <!-- ОБ’ЄКТИ -->
  <section id="objects" class="section">
    <h2>Ми виконуємо ремонт у:</h2>
    <ul class="objects-list">
      <li>Квартирах</li>
      <li>Будинках</li>
      <li>Офісах</li>
      <li>Магазинах</li>
      <li>Та інших приміщеннях</li>
    </ul>
  </section>
  <br />
  <!-- ПРАЙС -->
  <section id="price" class="section">
    <h2>Наші послуги та ціни</h2>
    <table class="price-table">
      <thead>
        <tr>
          <th>Вид робіт</th>
          <th>Опис</th>
          <th>Ціна (грн)</th>
        </tr>
      </thead>
      <tbody>
        <?php if (!empty($mainProducts)): ?>
          <?php foreach ($mainProducts as $product): ?>
            <tr>
              <td><?= htmlspecialchars($product['name'] ?? '') ?></td>
              <td><?= htmlspecialchars($product['description'] ?? '') ?></td>
              <td><?= htmlspecialchars($product['price'] ?? '') ?></td>
            </tr>
          <?php endforeach; ?>
        <?php else: ?>
          <tr>
            <td colspan="3" style="text-align: center;">Немає послуг для відображення на головній сторінці.</td>
          </tr>
        <?php endif; ?>
      </tbody>
    </table>

    <h3>
      <a href="price-all.php" class="btn">Подивитись всі послуги</a>
    </h3>
  </section>
  <br />
  <!-- Наші роботи -->
  <section id="works" class="section">
    <h2>Наші роботи</h2>
    <div class="gallery">
      <button id="btnLeft" class="gallery-btn gallery-btn-left">‹</button>
      <button id="btnRight" class="gallery-btn gallery-btn-right">›</button>

      <div class="images-row" id="imagesRow">
        <!-- Зображення будуть додаватися тут через JavaScript -->
      </div>
    </div>
  </section>
  <!-- Модальне вікно -->
  <div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <img id="modalImg" src="" alt="Робота" />
    <button class="nav-btn prev" id="prev">&#10094;</button>
    <button class="nav-btn next" id="next">&#10095;</button>
  </div>

  <!-- ПРО НАС -->
  <section id="about" class="section">
    <h2>Про нас</h2>
    <p>
      Ми команда професіоналів, яка спеціалізується на ремонтах квартир,
      будинків, офісів та інших приміщень.
    </p>
    <p>
      Понад 20 років допомагаємо клієнтам втілювати мрії про комфортне та
      сучасне житло.
    </p>

    <h3>Наші переваги:</h3>
    <ul class="advantages-list">
      <li>✔ Проста та зрозуміла комунікація</li>
      <li>✔ Якість виконання</li>
      <li>
        ✔ Замовлення матеріалів зі знижкою у постачальників (або самостійно)
      </li>
      <li>✔ Прозорий прайс та чіткі терміни виконання</li>
      <li>✔ Індивідуальний підхід до кожного клієнта</li>
      <li>✔ Досвідчена команда майстрів</li>
    </ul>
  </section>
  <br />
  <!-- ФОРМА -->
  <section id="form" class="section form-section">
    <h2>Замовити консультацію</h2>
    <form id="consultForm" method="post" novalidate>
      <input type="text" name="name" placeholder="Ваше ім'я" required />
      <input type="tel" name="phone" placeholder="Ваш телефон" required />
      <input type="text" name="coment" placeholder="Ваш коментар" />
      <!-- антиспам-пастка -->
      <input
        type="text"
        name="website"
        tabindex="-1"
        autocomplete="off"
        style="position: absolute; left: -9999px" />
      <button type="submit" class="btn">Надіслати</button>
      <div id="formResult"></div>
    </form>
  </section>
  <br />
  <!-- КОНТАКТИ -->
  <section id="contacts" class="section contacts">
    <h2>Контакти</h2>

    <p>Зателефонуйте або напишіть нам</p>
    <p>
      <b>Телефон:</b>
      <a href="tel:+380936336344">+38&nbsp;093&nbsp;633&nbsp;63&nbsp;44 </a>
    </p>

    <div class="social-buttons">
      <a
        href="https://t.me/AnnaDemchenkooo"
        target="_blank"
        class="btn-social telegram">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
          alt="Telegram" />
        Telegram
      </a>

      <a href="viber://chat?number=%2B380936336344" class="btn-social viber">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/viber.svg"
          alt="Viber" />
        Viber
      </a>
    </div>
    <p>
      <b>Для майстрів стосовно роботи(вакансій): </b><a href="tel:+380936336344">+38&nbsp;093&nbsp;633&nbsp;63&nbsp;44 </a>
    </p>

    <p>
      <b>Email:</b>
      <a href="mailto:romkinaanna@gmail.com" class="email-link">
        romkinaanna@gmail.com
      </a>
    </p>

    <p><b>Адреса:</b> Україна, Київ</p>
    <p><b>Графік:</b> Пн-Нд 9:30-20:00</p>
  </section>

  <!-- ПІДВАЛ -->
  <footer>
    <p>© 2025 Зробимо ремонт. Всі права захищені.</p>
  </footer>

  <!-- Кнопка прокрутки вгору з картинкою -->
  <button id="scrollTopBtn" title="Вгору">
    <img src="images/button-up.png" alt="Вгору" />
  </button>

  <script>
    document
      .getElementById("consultForm")
      .addEventListener("submit", async function(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        document.getElementById("formResult").innerHTML =
          "Відправляємо дані...";

        try {
          const response = await fetch("send_mail.php", {
            method: "POST",
            body: formData,
          });

          const res = await response.json();

          if (res.ok) {
            document.getElementById("formResult").innerHTML =
              '<span style="color:green">' + res.message + "</span>";
            form.reset();
          } else {
            document.getElementById("formResult").innerHTML =
              '<span style="color:red">' + res.message + "</span>";
          }
        } catch (err) {
          document.getElementById("formResult").innerHTML =
            '<span style="color:red">Помилка з’єднання.' +
            err.message +
            "</span>";
        }
      });
  </script>

  <script>
    // Передаємо дані з PHP в JavaScript
    const imageUrls = <?php echo json_encode($images); ?>;
  </script>

  <script src="index.js"></script>
</body>

</html>