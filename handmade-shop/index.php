<?php
$json_file = 'data/products.json';
$json_data = file_get_contents($json_file);
$products = json_decode($json_data, true)['products'];
?>

<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Магазин Hand Made виробів</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Hand Made Магазин</h1>
      <nav>
        <a href="#products">Товари</a>
        <a href="#about">Про нас</a>
        <a href="#delivery">Доставка</a>
        <a href="#contacts">Контакти</a>
        <a href="cart.php">Кошик</a>
      </nav>
    </header>

    <main>
      <section id="products">
        <h2>Наші товари</h2>

        <div class="products">
          <?php foreach($products as $product): ?>
          <div class="product">
            <img
              src="images/<?= $product['id'] ?>.jpg"
              alt="<?= $product['name'] ?>"
            />

            <h3><?= $product['name'] ?></h3>

            <p><?= $product['description'] ?></p>
            <p>
              Ціна:
              <?= $product['price'] ?>
              грн
            </p>

            <button
              onclick="addToCart(<?= $product['id'] ?>, '<?= $product['name'] ?>', <?= $product['price'] ?>)"
            >
              Додати до кошика
            </button>
          </div>
          <?php endforeach; ?>
        </div>
      </section>

      <section id="about">
        <h2>Про нас</h2>

        <p>
          Ми створюємо унікальні речі з любов'ю та турботою про кожну деталь.
        </p>
      </section>

      <section id="delivery">
        <h2>Доставка і оплата</h2>

        <p>
          Доставка по Україні здійснюється "Новою Поштою" або кур'єром. Оплата
          готівкою або безготівковим розрахунком.
        </p>
      </section>

      <section id="contacts">
        <h2>Контакти</h2>
        <p>Телефон: +380 (XX) XXX-XX-XX</p>
        <p>Email: handmade@example.com</p>
        <p>Telegram: @handmade_shop</p>
      </section>
    </main>

    <script src="index.js"></script>
  </body>
</html>
