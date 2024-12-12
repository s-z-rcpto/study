// Функція формування замовлення
function formatOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let orderText = "Замовлення:\n";
  let totalPrice = 0;

  cart.forEach((item) => {
    orderText += `${item.name} x ${item.quantity} - ${
      item.price * item.quantity
    } грн\n`;

    totalPrice += item.price * item.quantity;
  });

  orderText += `\nЗагальна сума: ${totalPrice} грн`;

  return orderText;
}

// Копіювання замовлення в буфер обміну
function copyOrderToClipboard() {
  const orderText = formatOrder();

  navigator.clipboard.writeText(orderText).then(
    function () {
      alert("Замовлення скопійовано в буфер обміну");
    },
    function (err) {
      console.error("Помилка копіювання:", err);
    }
  );
}

// Відправка замовлення в Телеграм
function sendOrderToTelegram() {
  const orderText = formatOrder();
  const telegramBotToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";
  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    orderText
  )}`;

  window.open(telegramUrl, "_blank");
}

// Ініціалізація подій
document.addEventListener("DOMContentLoaded", function () {
  const copyOrderButton = document.getElementById("copy-order");
  const telegramOrderButton = document.getElementById("telegram-order");

  if (copyOrderButton) {
    copyOrderButton.addEventListener("click", copyOrderToClipboard);
  }

  if (telegramOrderButton) {
    telegramOrderButton.addEventListener("click", sendOrderToTelegram);
  }
});
