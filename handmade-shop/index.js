// Функція додавання товару в корзину
function addToCart(productId, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Перевіряємо, чи товар вже є в кошику
  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct != null) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: name,
      price: price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartDisplay();
}

// Функція оновлення відображення кошика
function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".cart-items");

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = "";

    cart.forEach((item) => {
      const cartItemElement = document.createElement("div");

      cartItemElement.classList.add("cart-item");

      cartItemElement.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>${item.price * item.quantity} грн</span>
                <button onclick="removeFromCart(${item.id})">Видалити</button>
            `;

      cartItemsContainer.appendChild(cartItemElement);
    });
  }
}

// Видалення товару з кошика
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Ініціалізація сторінки
document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();
});
