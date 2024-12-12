<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Кошик - Hand Made Магазин</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Кошик</h1>

      <nav>
        <a href="index.php">На головну</a>
      </nav>
    </header>

    <main>
      <section class="cart">
        <h2>Ваше замовлення</h2>

        <div class="cart-items">
          <!-- Товари будуть додаватися динамічно через JavaScript -->
        </div>

        <div class="order-actions">
          <button id="copy-order">Копіювати замовлення</button>
          <button id="telegram-order">Надіслати в Telegram</button>
        </div>
      </section>
    </main>

    <script src="js/index.js"></script>
    <script src="js/cart.js"></script>
  </body>
</html>
