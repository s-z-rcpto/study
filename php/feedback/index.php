<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Форма зворотного зв'язку</title>

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <section>
    <form id="feedbackForm">
      <h2>Зворотний зв'язок</h2>
      <label for="name">Ім'я</label>
      <input type="text" id="name" name="name" autocomplete="name" required>

      <label for="phone">Телефон</label>
      <input type="tel" id="phone" name="phone" autocomplete="tel" required>

      <label for="email">Електронна пошта</label>
      <input type="email" id="email" name="email" autocomplete="email" required>

      <label for="message">Ваше питання</label>
      <textarea id="message" name="message" rows="5" autocomplete="off" required></textarea>

      <button type="submit">Відправити</button>

      <p id="feedbackResponseMessage" style="display: none;">Повідомлення надіслано!</p>
    </form>
  </section>

  <script src="script.js"></script>
</body>

</html>